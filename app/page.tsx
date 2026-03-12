import React from 'react';
import Link from 'next/link';

import { HeroSection } from '@/components/design/HeroSection';
import { TrustMarquee } from '@/components/design/TrustMarquee';
import { ServicesSection } from '@/components/design/ServicesSection';
import { KnowledgePreview } from '@/components/design/KnowledgePreview';
import { FeatureCards } from '@/components/design/FeatureCards';
import { ValuesSection } from '@/components/design/ValuesSection';
import { ContactSection } from '@/components/design/ContactSection';
import { ProjectGrid } from '@/components/design/ProjectGrid';
import { projects } from '@/lib/data';

export default function DesignTestPage() {
    // Vi henter de 3 mest autoritære prosjektene for forsiden
    const featuredProjects = projects.filter(p => 
      ["radisson-red-oslo-okern", "construction-city-oslo", "det-nye-sykehuset-i-drammen"].includes(p.id)
    );

    return (
        <main className="min-h-screen bg-[#181618] text-[#e6e5de] font-sans selection:bg-[#2eff9b] selection:text-[#181618]">
            {/* Hero med Construction City som bevis på kapasitet */}
            <HeroSection 
                image="/images/hero/project-construction-city-ulven-90grader.webp"
                title="Presisjon i hvert ledd"
                subtitle="Fra komplekse industriprosjekter til antikvarisk restaurering i Stor-Oslo."
            />
            
            <TrustMarquee />
            
            {/* Seksjonen i app/page.tsx */}
            <section className="py-32 bg-transparent">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                    <p className="font-mono text-[10px] text-[#2eff9b] uppercase tracking-[0.4em] mb-4">Referanser</p>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Utvalgte Prosjekter</h2>
                  </div>
                  <Link href="/prosjekter" className="text-[#2eff9b] font-mono text-xs uppercase tracking-widest border-b border-[#2eff9b]/30 pb-2 hover:border-[#2eff9b] transition-all">
                    Se alle referanser →
                  </Link>
                </div>
                
                <ProjectGrid projects={featuredProjects} />
              </div>
            </section>


            <FeatureCards />
            <ServicesSection />
            <KnowledgePreview />
            <ValuesSection />
            <ContactSection />
        </main>
    );
}
