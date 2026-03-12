import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, cities, cityNames, getServiceContent, projects } from '@/lib/data';
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

                {/* BEVIS-MASKINEN: AUTOMATSISK REFERANSE-INJEKSJON */}
                <div className="mt-32 space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-white/10" />
                        <h2 className="text-[10px] font-mono text-[#2eff9b] uppercase tracking-[0.4em]">Proven_Local_Authority</h2>
                        <div className="h-[1px] flex-1 bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects
                            .filter(p => p.cityId === city || p.zone === zone)
                            .slice(0, 2)
                            .map((project) => (
                                <Link 
                                    href={`/prosjekter/${project.id}`} 
                                    key={project.id}
                                    className="group relative bg-[#1f1d1f] border border-white/5 p-8 overflow-hidden hover:border-[#2eff9b]/30 transition-all duration-500"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                        <div className="text-[10px] font-mono text-[#2eff9b]">DETALJER →</div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="flex gap-2">
                                            <span className="text-[8px] font-mono px-1.5 py-0.5 border border-[#2eff9b]/30 text-[#2eff9b] uppercase">Referanse</span>
                                            <span className="text-[8px] font-mono px-1.5 py-0.5 border border-white/10 text-white/40 uppercase">{project.location}</span>
                                        </div>
                                        <h3 className="text-xl font-bold tracking-tight group-hover:text-[#2eff9b] transition-colors">{project.title}</h3>
                                        <p className="text-sm text-white/40 font-light leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Action Green Indicator */}
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2eff9b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </Link>
                            ))}
                    </div>
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
