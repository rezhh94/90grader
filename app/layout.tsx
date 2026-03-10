import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/design/Footer';
import { VaktCTA } from '@/components/VaktCTA';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#181618] text-[#e6e5de] selection:bg-[#2eff9b] selection:text-[#181618] min-h-screen`}
      >
        {/* Blueprint Grid Background Pattern */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:8px_8px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
        <VaktCTA />
      </body>
    </html>
  );
}
