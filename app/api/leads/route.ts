import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // 1. Lagre i DIN database (Ditt faktureringsgrunnlag)
        const { error } = await supabase.from('leads').insert([
            { name: data.name, phone: data.phone, service: data.service, city: data.city }
        ]);

        if (error) {
            console.error('[SUPABASE ERROR] Failed to save lead:', error.message);
        }

        // 2. Sjekk om kunden er aktiv (Din bryter)
        if (process.env.PARTNER_ACTIVE !== 'true') {
            return NextResponse.json({ status: 'Logged but not forwarded' });
        }

        // 3. Send videre til 90 Grader (E-post/SMS)
        // Her integrerer du f.eks. Resend eller SendGrid
        // Simulating email delivery for now
        await new Promise((resolve) => setTimeout(resolve, 800));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[LEAD SYSTEM ERROR]', error);
        return NextResponse.json({ error: 'Lead processing failed' }, { status: 500 });
    }
}
