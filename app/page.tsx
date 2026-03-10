import React from 'react';
import { HeroSection } from '@/components/design/HeroSection';
import { TrustMarquee } from '@/components/design/TrustMarquee';
import { ServicesSection } from '@/components/design/ServicesSection';
import { FeatureCards } from '@/components/design/FeatureCards';
import { ValuesSection } from '@/components/design/ValuesSection';
import { ContactSection } from '@/components/design/ContactSection';

export default function DesignTestPage() {
    return (
        <main className="min-h-screen bg-[#181618] text-[#e6e5de] font-sans selection:bg-[#2eff9b] selection:text-[#181618]">
            <HeroSection />
            <TrustMarquee />
            <FeatureCards />
            <ServicesSection />
            <ValuesSection />
            <ContactSection />
        </main>
    );
}
