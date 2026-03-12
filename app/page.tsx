import React from 'react';
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
            
            {/* Ny Referanse-seksjon for umiddelbar tillit */}
            <section className="py-24 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold uppercase mb-12 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-[#2eff9b]" />
                        Utvalgte Prosjekter
                    </h2>
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
