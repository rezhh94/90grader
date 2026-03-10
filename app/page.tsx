import React from 'react';
import { HeroSection } from '@/components/design/HeroSection';
import { ServicesSection } from '@/components/design/ServicesSection';
import { FeatureCards } from '@/components/design/FeatureCards';

export default function DesignTestPage() {
    return (
        <main className="min-h-screen bg-[#181618] text-[#e6e5de] font-sans selection:bg-[#2eff9b] selection:text-[#181618]">
            <HeroSection />
            <FeatureCards />
            <ServicesSection />
        </main>
    );
}
