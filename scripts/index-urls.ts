import { google } from 'googleapis';
import { cities, services } from '../lib/data';
import * as fs from 'fs';
import * as path from 'path';

// Define the base URL
const BASE_URL = 'https://90grader.no';

// Get the service account key
// NOTE: Make sure to place your service-account-key.json in the scripts folder or use ENV keys
const KEY_PATH = path.join(__dirname, 'service-account-key.json');

async function indexUrls() {
  // Check if the key exists before running
  if (!fs.existsSync(KEY_PATH)) {
    console.error('Missing service-account-key.json. Please add it to the scripts folder to use the Google Indexing API.');
    return;
  }

  // Generate the 300+ URLs based on data.ts
  const urls: string[] = [];
  cities.forEach(city => {
    services.forEach(service => {
      urls.push(`${BASE_URL}/${city}/${service.id}`);
    });
  });

  console.log(`Prepared ${urls.length} URLs for indexing.`);

  // Authenticate with Google API
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({
    version: 'v3',
    auth: auth, // Use the GoogleAuth object instead of the client
  });

  // Since Google limits to 200 requests per batch for Indexing API (or requires batching),
  // we could send them individually or batch them. Simple sequential sending with delay:
  let successCount = 0;
  let errorCount = 0;

  console.log('Starting URL submission...');

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      successCount++;
      console.log(`[${i + 1}/${urls.length}] Enqueued: ${url}`);
      
      // Delay to avoid hitting rate limits too quickly
      await new Promise(resolve => setTimeout(resolve, 200)); 
    } catch (error: any) {
      errorCount++;
      console.error(`[${i + 1}/${urls.length}] Failed: ${url}`, error?.message || error);
    }
  }

  console.log('--- Submission Complete ---');
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${errorCount}`);
}

indexUrls().catch(console.error);
