import type { Metadata } from 'next';
import { Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VaktCTA } from '@/components/VaktCTA';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-sans',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '90 Grader | Presisjon er Standard',
  description:
    'Moderne og løsningsorientert håndverksbedrift i Stor-Oslo. Service på vinduer og dører, kjerneboring, tømrerarbeid, restaurering, tak & fasade, rehab og nybygg.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="scroll-smooth">
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0A0A0A] text-white`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <VaktCTA />
      </body>
    </html>
  );
}
