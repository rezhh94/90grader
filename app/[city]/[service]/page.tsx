import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, cities, cityNames } from '@/lib/data';
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
    const { city, service: serviceId } = await params;
    const service = services.find((s) => s.id === serviceId);
    const cityName = cityNames[city];

    if (!service || !cityName) return {};

    const title = `${service.title} i ${cityName} | 90 Grader`;
    const description = `${service.longDesc} Kontakt oss for ${service.vakt ? 'vaktservice' : 'prosjekter'} i ${cityName}-området.`;

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
    const { city, service: serviceId } = await params;
    const service = services.find((s) => s.id === serviceId);
    const cityName = cityNames[city];

    if (!service || !cityName) {
        notFound();
    }

    const otherServices = services.filter((s) => s.id !== serviceId);

    // JSON-LD for SGE/SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${service.title} i ${cityName}`,
        description: service.longDesc,
        areaServed: { '@type': 'City', name: cityName },
        provider: {
            '@type': 'LocalBusiness',
            name: '90 Grader AS',
            telephone: '+4790000000',
            email: 'post@90grader.no',
            url: 'https://90grader.no',
        },
    };

    return (
        <div className="text-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="relative pt-24 pb-16 px-6 md:px-20 border-b border-white/5">
                {/* Hero grid removed, relying on root layout grid */}

                <div className="relative z-10 max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs font-mono text-white/30 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-white transition-colors">Hjem</Link>
                        <span>/</span>
                        <Link href={`/${city}/${services[0].id}`} className="hover:text-white transition-colors">{cityName}</Link>
                        <span>/</span>
                        <span className="text-orange-500">{service.title}</span>
                    </nav>

                    <div className="flex items-center gap-3 mb-6">
                        <span className={`w-2 h-2 rounded-full ${service.vakt ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`} />
                        <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                            {service.vakt ? 'Vakt-tjeneste — 24/7' : 'Prosjekt-tjeneste'}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        {service.title}{' '}
                        <span className="text-orange-500">i {cityName}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-10 max-w-2xl">
                        {service.longDesc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:+4790000000"
                            className="bg-orange-600 hover:bg-orange-700 px-10 py-4 font-black text-sm tracking-wider rounded-sm transition-all inline-flex items-center gap-2"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                            RING FOR BEFARING
                        </a>
                        <a
                            href="mailto:post@90grader.no"
                            className="border border-white/20 hover:bg-white/5 px-10 py-4 font-bold text-sm tracking-wider rounded-sm transition-all text-center"
                        >
                            SEND FORESPØRSEL
                        </a>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="max-w-4xl mx-auto px-6 md:px-20 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="p-8 border border-white/5 bg-white/[0.01] rounded-none">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-orange-600" />
                                Om tjenesten
                            </h2>
                            <div className="space-y-4 text-white/60 leading-relaxed">
                                <p>
                                    90 Grader leverer profesjonell {service.title.toLowerCase()} i {cityName} og omegn.
                                    Med over 15 års erfaring og et dedikert team av fagfolk, garanterer vi kvalitet i hvert eneste prosjekt.
                                </p>
                                <p>
                                    {service.vakt
                                        ? `Vår vakttelefon er tilgjengelig 24/7 for akutte oppdrag i ${cityName}. Vi rykker ut raskt og effektivt med moderne utstyr.`
                                        : `Vi planlegger og gjennomfører prosjekter i ${cityName} med fokus på tidslinjer, budsjett og kvalitet. Fra første befaring til ferdigstillelse.`}
                                </p>
                            </div>
                        </div>

                        {/* Features grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: 'Kvalitetssikret', desc: 'Alle oppdrag etter gjeldende standarder.' },
                                { title: 'Lokalkjent', desc: `Inngående kjennskap til ${cityName}.` },
                                { title: 'Erfarne Fagfolk', desc: 'Sertifiserte og kvalifiserte håndverkere.' },
                                { title: 'Rask Respons', desc: service.vakt ? 'Utrykning innen kort tid.' : 'Rask oppstart etter avtale.' },
                            ].map((feature) => (
                                <div key={feature.title} className="p-6 border border-white/5 bg-white/[0.01] rounded-none">
                                    <div className="w-2 h-2 bg-orange-600 mb-4" />
                                    <h3 className="font-bold mb-1 text-sm">{feature.title}</h3>
                                    <p className="text-xs text-white/40">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* The Switch - Contact Form */}
                        <ContactForm city={cityName} service={service.title} />

                        {/* Metrics */}
                        <div className="p-6 border border-white/5 bg-white/[0.01] rounded-none">
                            <h3 className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-4">Nøkkeltall</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Responstid', value: service.vakt ? '< 2t' : '< 48t' },
                                    { label: 'Garanti', value: '100%' },
                                    { label: 'Dekning', value: cityName },
                                ].map((metric) => (
                                    <div key={metric.label} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0">
                                        <span className="text-xs text-white/40">{metric.label}</span>
                                        <span className="font-mono font-black text-orange-500">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services — Interlinking */}
            <section className="max-w-4xl mx-auto px-6 md:px-20 py-16 border-t border-white/5">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-orange-600" />
                    Andre tjenester i <span className="text-orange-500">{cityName}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherServices.map((s) => (
                        <Link
                            key={s.id}
                            href={`/${city}/${s.id}`}
                            className="group relative p-6 border border-white/5 bg-white/[0.01] hover:border-orange-500/50 hover:bg-orange-500/[0.02] rounded-none transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,95,0,0.1)]"
                        >
                            <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">
                                {s.vakt ? '● VAKT' : '◆ PROSJEKT'}
                            </span>
                            <h3 className="text-lg font-bold mt-2 group-hover:text-orange-500 transition-colors">{s.title}</h3>
                            <p className="text-xs text-white/40 mt-1">{s.desc}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Other Cities */}
            <section className="max-w-4xl mx-auto px-6 md:px-20 py-16 border-t border-white/5">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-orange-600" />
                    {service.title} i andre byer
                </h2>
                <div className="flex flex-wrap gap-3">
                    {cities.filter((c) => c !== city).map((c) => (
                        <Link
                            key={c}
                            href={`/${c}/${serviceId}`}
                            className="px-5 py-2.5 border border-white/5 text-sm text-white/50 hover:border-orange-500/50 hover:bg-orange-500/[0.02] hover:text-white rounded-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,95,0,0.1)] font-bold uppercase tracking-wider"
                        >
                            {cityNames[c]}
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
