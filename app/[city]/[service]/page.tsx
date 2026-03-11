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

    const { baseService: service, cityName, zone, hook, usp, faq, slug, coordinates } = content;
    const otherServices = services.filter((s) => s.id !== serviceId);

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
        <main className="min-h-screen bg-[#181618] text-[#e6e5de] font-sans pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. PREMIUM SUB-HERO (Sentrert & Ren) */}
            <section className="px-6 py-24 border-b border-white/5 bg-white/[0.01]">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block px-3 py-1 border border-[#2eff9b]/20 text-[#2eff9b] font-mono text-[10px] uppercase tracking-[0.3em] mb-8 bg-[#2eff9b]/5 rounded-sm">
                        {service.vakt ? 'AKUTT BEREDSKAP' : 'SPESIALISTPROSJEKT'} • {cityName}
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                        {service.title} <br />
                        <span className="text-[#e6e5de]/20 italic">i {cityName}</span>
                    </h1>
                    <a href="#bestill" className="font-mono text-xs uppercase tracking-widest text-[#2eff9b] hover:opacity-70 transition-opacity">
                        Gå direkte til forespørsel ↓
                    </a>
                </div>
            </section>

            {/* 2. INNHOLDS-SECTION (Sentrert max-w-4xl for maksimal lesbarhet) */}
            <section className="px-6 py-24">
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* BILDE-BOKS (Visuelt Anker) */}
                    <div className="relative aspect-video bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                            style={{ backgroundImage: `url('/images/services/${service.id}.jpg')` }} />
                        <div className="absolute top-6 left-6 bg-[#181618]/80 backdrop-blur-md border border-[#2eff9b]/30 px-4 py-2 rounded font-mono text-[10px] text-[#2eff9b]">
                            PROSJEKTKODE: 90G-{city.toUpperCase()}-{serviceId.toUpperCase()}
                        </div>
                    </div>

                    {/* TEKSTLIG GJENNOMGANG (Med Dynamisk Løsnings-Plikt) */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-[1px] bg-[#2eff9b]" />
                            <h2 className="text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#2eff9b]">Prosjektbeskrivelse</h2>
                        </div>
                        <div className="text-xl md:text-2xl leading-relaxed text-[#e6e5de]/80 font-light space-y-8">
                            <p>{service.longDesc}</p>
                            <div className="p-6 border-l-2 border-[#2eff9b] bg-[#2eff9b]/[0.02]">
                                <h3 className="text-lg font-bold text-[#e6e5de] mb-2 uppercase font-mono text-sm tracking-widest">Lokal Ekspertise i {cityName}</h3>
                                <p className="text-lg">{hook}</p>
                            </div>
                        </div>
                    </div>

                    {/* TEKNISKE SPESIFIKASJONER & ZONE */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/5">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Soneprofil', val: zone },
                                { label: 'Region', val: cityName },
                            ].map((item) => (
                                <div key={item.label} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                    <p className="font-mono text-[9px] text-[#2eff9b] uppercase tracking-widest mb-2">{item.label}</p>
                                    <p className="font-bold text-sm uppercase">{item.val}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-[#1c1c1e] border border-[#2eff9b]/20 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2eff9b]/5 blur-3xl -mr-16 -mt-16" />
                            <h3 className="text-[#2eff9b] font-mono text-xs uppercase tracking-widest mb-4">Unik Sonefordel</h3>
                            <div className="space-y-4">
                                <p className="text-xl font-bold leading-tight text-[#e6e5de]">
                                    {usp}
                                </p>
                                <div className="flex items-center gap-2 text-[#2eff9b] text-[10px] font-mono uppercase tracking-widest">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2eff9b] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2eff9b]"></span>
                                    </span>
                                    SGE Dominans Aktiv
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DEEP CONTEXT / FAG-ARKIV LINK */}
                    <Link href={`/fag-arkiv/${slug}`} className="block group pt-6">
                        <div className="p-8 border border-[#2eff9b]/20 bg-[#2eff9b]/[0.02] rounded-2xl group-hover:bg-[#2eff9b]/[0.08] transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-6xl font-black italic mix-blend-overlay pointer-events-none">
                                REPORT
                            </div>
                            <h3 className="text-[#2eff9b] font-mono text-sm uppercase tracking-widest mb-2 flex items-center gap-3">
                                <span>Deep Context Link</span> <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </h3>
                            <p className="text-xl font-bold mb-2">Les vår tekniske rapport fra fagarkivet</p>
                            <p className="text-sm text-[#e6e5de]/50 group-hover:text-[#e6e5de]/80 transition-colors">Avgjørende SGE-signal for {cityName}</p>
                        </div>
                    </Link>

                    {/* LOKAL FAQ FOR SGE */}
                    <div className="pt-12 border-t border-white/5">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-[#2eff9b]" />
                            Ofte stilte spørsmål i <span className="text-[#2eff9b]">{cityName}</span>
                        </h3>
                        <div className="grid gap-4">
                            {faq.map((item, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                    <h4 className="font-bold text-lg mb-2">{item.q}</h4>
                                    <p className="text-[#e6e5de]/70">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. "THE ANCHOR" - FULLBREDDE KONTAKTSESJON (Lead-motoren) */}
            <section id="bestill" className="bg-[#1c1c1e] px-6 py-24 md:py-32 border-t border-[#2eff9b]/10 relative overflow-hidden">
                {/* Blueprint dekorasjon som kun synes i bunnen */}
                <div className="absolute inset-0 bg-[url('/blueprint-grid.svg')] opacity-[0.02] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                            Start ditt prosjekt <span className="text-[#2eff9b]">i {cityName}</span>
                        </h2>
                        <p className="text-[#e6e5de]/50 font-mono text-sm uppercase tracking-widest">
                            Svarer normalt innen 2 timer • {service.vakt ? '24/7 Vakttelefon aktiv' : 'Hurtig respons'}
                        </p>
                    </div>

                    <div className="bg-[#181618] border border-white/10 p-8 md:p-16 rounded-[2.5rem] shadow-3xl">
                        <ContactForm service={service.title} city={cityName} />

                        <div className="mt-12 pt-12 border-t border-white/5 flex flex-col items-center">
                            <a href="tel:+4790000000" className="group flex items-center gap-6 text-2xl md:text-4xl font-black hover:text-[#2eff9b] transition-colors">
                                <span className="text-xs font-mono font-normal text-[#2eff9b] group-hover:animate-pulse uppercase tracking-[0.4em]">{service.vakt ? 'VAKT:' : 'RING OSS:'}</span>
                                +47 900 00 000
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services — Interlinking */}
            <section className="px-6 py-16 border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#2eff9b]" />
                        Andre tjenester i <span className="text-[#2eff9b]">{cityName}</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {otherServices.map((s) => (
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
                </div>
            </section>

            {/* Other Cities */}
            <section className="px-6 py-16 border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-[#2eff9b]" />
                        {service.title} i andre byer
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {cities.filter((c) => c !== city).map((c) => (
                            <Link
                                key={c}
                                href={`/${c}/${serviceId}`}
                                className="px-5 py-2.5 border border-[#e6e5de]/5 text-sm text-[#e6e5de]/50 hover:border-[#2eff9b]/50 hover:bg-[#2eff9b]/[0.02] hover:text-[#e6e5de] rounded-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(46,255,155,0.1)] font-bold uppercase tracking-wider"
                            >
                                {cityNames[c]}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
