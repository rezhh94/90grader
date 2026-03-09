import Link from 'next/link';
import { BentoGrid } from '@/components/BentoGrid';
import { services, cities, cityNames } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center px-6 md:px-20 border-b border-white/10">
        <div className="z-10 max-w-4xl">
          <span className="text-orange-500 font-mono tracking-widest uppercase mb-4 block text-sm">
            Etablert Autoritet i Stor-Oslo
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            90 GRADER. <br />
            <span className="text-white/40">PRESISJON ER STANDARD.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Vi er en moderne og løsningsorientert bedrift som spesialiserer oss på montering,
            service og rehabilitering. Kvalitet i hver vinkel.
          </p>
          <div className="flex gap-4 mt-10">
            <a
              href="tel:+4790000000"
              className="bg-orange-600 hover:bg-orange-700 px-8 py-4 font-black text-sm tracking-wider rounded-sm transition-all inline-flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              RING VAKTTELEFON
            </a>
            <Link
              href="/#tjenester"
              className="border border-white/20 hover:bg-white/5 px-8 py-4 font-bold text-sm tracking-wider rounded-sm transition-all"
            >
              SE TJENESTER
            </Link>
          </div>
        </div>
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,95,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,95,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      </section>

      {/* Metrics Strip */}
      <section className="px-6 md:px-20 py-12 border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '24/7', label: 'Vakttelefon' },
            { value: '15+', label: 'År erfaring' },
            { value: '6', label: 'Byer' },
            { value: '100%', label: 'Kvalitetsgaranti' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-black text-orange-500 font-mono tracking-tighter">{stat.value}</p>
              <p className="text-xs text-white/40 mt-2 uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid — Tjenestene */}
      <section id="tjenester" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-orange-600" />
          Våre Kjerneområder
        </h2>
        <BentoGrid items={services} />
      </section>

      {/* By-velger for PSO Dominans */}
      <section id="byer" className="py-16 px-6 md:px-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-orange-600" />
          Vi Dekker Hele Regionen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/${city}/${services[0].id}`}
              className="group p-6 border border-white/10 bg-white/[0.02] hover:border-orange-500 rounded-sm transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{cityNames[city]}</h3>
                  <p className="text-white/40 text-sm mt-1">
                    {services.length} tjenester tilgjengelig
                  </p>
                </div>
                <span className="text-2xl text-white/20 group-hover:text-orange-500 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
