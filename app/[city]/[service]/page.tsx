import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, cities, cityNames, getServiceContent } from '@/lib/data';
import { ContactForm } from '@/components/ContactForm';

interface PageProps {
    params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
    const paths = [];
    for (const city of cities) {
        for (const service of services) {
            paths.push({ city, service: service.id });
        }
    }
    return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const p = await params;
    const { city, service: serviceId } = p;
    const content = getServiceContent(serviceId, city);

    if (!content) return {};

    const title = `${content.baseService.title} i ${content.cityName} | 90 Grader`;
    const description = `${content.hook} Kontakt oss for ${content.baseService.vakt ? 'vaktservice' : 'prosjekter'} i ${content.cityName}-området.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'nb_NO',
        },
    };
}

export default async function ServiceCityPage({ params }: PageProps) {
    const p = await params;
    const { city, service: serviceId } = p;
    const content = getServiceContent(serviceId, city);

    if (!content) {
        notFound();
    }

    const { baseService: service, cityName, zone, hook, faq, slug, coordinates } = content;

    // JSON-LD for SGE/SEO med Hyper-lokal NAP-data
    const schemaGeo = coordinates.split(', ') || ['59.9139', '10.7522']; // Fallback Oslo
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${service.title} i ${cityName}`,
        description: hook,
        areaServed: {
            '@type': 'City',
            name: cityName,
            geo: {
                '@type': 'GeoCoordinates',
                latitude: schemaGeo[0],
                longitude: schemaGeo[1]
            }
        },
        provider: {
            '@type': 'LocalBusiness',
            name: '90 Grader AS',
            telephone: '+4790000000',
            email: 'post@90grader.no',
            url: 'https://90grader.no',
            address: {
                '@type': 'PostalAddress',
                addressLocality: cityName,
                addressRegion: 'Viken/Oslo',
                addressCountry: 'NO'
            }
        },
    };

    return (
        <main className="min-h-screen bg-[#181618] text-[#e6e5de]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 6XL RAMME FOR PREMIUM FØLELSE */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="space-y-12">
                    <div className="inline-block px-3 py-1 border border-[#2eff9b]/20 text-[#2eff9b] font-mono text-[10px] uppercase tracking-[0.3em] bg-[#2eff9b]/5">
                        SONE: {zone} • {cityName}
                    </div>
                    
                    <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
                        {service.title} <br/>
                        <span className="text-[#e6e5de]/20 italic">i {cityName}</span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-[#e6e5de]/80 font-light max-w-4xl leading-relaxed">
                        {hook}
                    </p>
                </div>

                {/* DEEP CONTEXT LINKING MODUL */}
                <div className="mt-20 p-8 border border-white/10 bg-white/[0.02] rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h3 className="font-mono text-[10px] text-[#2eff9b] uppercase tracking-widest mb-2">Faglig Forankring</h3>
                        <p className="text-sm opacity-60">Les vår tekniske rapport om relevante standarder for {cityName}.</p>
                    </div>
                    <Link href={`/fag-arkiv/${slug}`} className="px-6 py-3 bg-white/5 border border-white/10 hover:border-[#2eff9b]/50 transition-all text-xs font-mono uppercase tracking-widest">
                        Se Teknisk Rapport →
                    </Link>
                </div>
            </section>

            {/* HYPER-LOKAL FAQ FOR SGE-DOMINANS */}
            <section className="bg-white/[0.01] py-24 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-bold uppercase mb-12 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-[#2eff9b]" />
                        Ofte stilte spørsmål i {cityName}
                    </h2>
                    <div className="space-y-8">
                        {faq.map((item, i) => (
                            <div key={i} className="group">
                                <h4 className="text-[#2eff9b] font-mono text-sm mb-2 uppercase tracking-wide">Q: {item.q}</h4>
                                <p className="text-[#e6e5de]/60 leading-relaxed italic">A: {item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* "THE ANCHOR" - FULLBREDDE KONTAKTSESJON */}
            <section id="bestill" className="bg-[#1c1c1e] px-6 py-24 border-t border-[#2eff9b]/10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                        Start ditt prosjekt <span className="text-[#2eff9b]">i {cityName}</span>
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto bg-[#181618] border border-white/10 p-8 md:p-12 rounded-[2rem]">
                    <ContactForm service={service.title} city={cityName} />
                </div>
            </section>
        </main>
    );
}
