import React from 'react';
import { CityServiceClient } from '@/components/design/CityServiceClient';
import { cities, cityNames, services } from '@/lib/data';
import Link from 'next/link';

interface PageProps {
    params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
    return cities.map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps) {
    const { city } = await params;
    const cityName = cityNames[city];
    
    if (!cityName) return {};
    
    return {
        title: `Håndverkstjenester i ${cityName} | 90 Grader`,
        description: `Vi tilbyr kvalitetstjenester, restaurering og 24/7 vakt innen tømrer, betong og vindu i ${cityName}.`,
    };
}

export default async function CityPage({ params }: PageProps) {
    const { city } = await params;
    const cityName = cityNames[city];

    if (!cityName) {
        return null;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "90 Grader AS",
        "areaServed": cityName,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vakt-tjenester",
            "itemListElement": services
                .filter(s => s.vakt)
                .map(s => ({
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": `${s.title} i ${cityName}`
                    }
                }))
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        }
    };

    return (
        <main className="min-h-screen bg-[#050505] text-[#e6e5de] font-sans selection:bg-[#2eff9b] selection:text-[#181618]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CityServiceClient cityName={cityName} />
            
            {/* Nærhets-matrisen - Interlinking */}
            <section className="max-w-7xl mx-auto px-6 py-24 border-t border-[#e6e5de]/5">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-[#2eff9b]" />
                    Tjenester i <span className="text-[#2eff9b]">{cityName}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((s) => (
                        <Link
                            key={s.id}
                            href={`/${city}/${s.id}`}
                            className="group relative p-6 border border-[#e6e5de]/5 bg-[#e6e5de]/[0.01] hover:border-[#2eff9b]/50 hover:bg-[#2eff9b]/[0.02] rounded-none transition-all duration-500 hover:shadow-[0_0_30px_rgba(46,255,155,0.1)]"
                        >
                            <span className="text-[10px] font-mono text-[#2eff9b] uppercase tracking-widest">
                                {s.vakt ? '● VAKT' : '◆ PROSJEKT'}
                            </span>
                            <h3 className="text-lg font-bold mt-2 group-hover:text-[#2eff9b] transition-colors">{s.title}</h3>
                            <p className="text-xs text-[#e6e5de]/40 mt-1">{s.desc}</p>
                        </Link>
                    ))}
                </div>
            </section>

        </main>
    );
}
