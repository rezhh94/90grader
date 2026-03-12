import { projects, services, cityNames } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const service = services.find((s) => s.id === project.service);
  const cityName = cityNames[project.cityId] || project.location;

  return (
    <div className="bg-[#181618] min-h-screen">
      {/* Massive Hero Section */}
      <section className="relative h-[70vh] flex items-end pb-20 px-6 border-b border-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#1f1d1f]"></div>
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2eff9b]/10 border border-[#2eff9b]/20 mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#2eff9b]">
              Case Study / {project.id}
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 text-white uppercase italic">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Lokasjon:</span>
              <span className="text-xl font-light text-white">{project.location}, {cityName}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#2eff9b]">01 / PROSJEKT_INFO</h2>
              <p className="text-3xl font-light leading-relaxed text-white/80">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/[0.03] border border-white/10 text-xs font-mono text-white/60">
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
            
            {/* Visual Placeholder (Full Width in column) */}
            <div className="aspect-video bg-[#1f1d1f] border border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#2eff9b_1px,transparent_1px),linear-gradient(-45deg,#2eff9b_1px,transparent_1px)] bg-[size:30px_30px]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase italic">Teknisk Dokumentasjon_Visuell</span>
               </div>
            </div>
          </div>

          {/* Technical Specs & CTA */}
          <div className="lg:col-span-5 space-y-8">
             {/* Technical Specs Box */}
             <div className="bg-[#1f1d1f] border border-white/5 p-10 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#2eff9b]/5 blur-3xl rounded-full"></div>
                
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">Technical_Specs</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-xs font-mono text-white/40 uppercase">Tjeneste</span>
                    <span className="text-lg font-bold text-[#2eff9b] tracking-tight">{service?.title}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-xs font-mono text-white/40 uppercase">Sone</span>
                    <span className="text-lg font-bold text-white tracking-tight">{project.zone}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-xs font-mono text-white/40 uppercase">Omfang</span>
                    <span className="text-lg font-bold text-white tracking-tight italic">Teknisk Enterprise</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-xs font-mono text-white/40 uppercase">Protokoll</span>
                    <span className="text-lg font-bold text-white tracking-tight uppercase">SGE-Optimized</span>
                  </div>
                </div>

                <div className="pt-8">
                    <p className="text-sm font-light text-white/40 leading-relaxed mb-6 italic">
                       Dette prosjektet i {project.location} fungerer som referanse-node for vår ekspertise innen {service?.title.toLowerCase()} i {cityName}.
                    </p>
                    <Link 
                      href={`/${project.cityId}/${project.service}`}
                      className="inline-flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#2eff9b] group"
                    >
                      Se tilgjengelighet i {cityName}
                      <span className="w-12 h-[1px] bg-[#2eff9b] group-hover:w-16 transition-all duration-500"></span>
                    </Link>
                </div>
             </div>

             {/* The Anchor (CTA) */}
             <div className="p-10 border border-[#2eff9b]/20 bg-[#2eff9b]/5 flex flex-col items-center text-center space-y-6">
                <h4 className="text-xl font-bold tracking-tight text-white">Trenger du lignende kompetanse på {cityName}?</h4>
                <p className="text-sm text-white/60 font-light">Våre teknikere i {cityName} er klare for en befaring av ditt prosjekt i dag.</p>
                <Link 
                    href="/#kontakt"
                    className="w-full py-5 bg-[#2eff9b] text-[#181618] font-bold uppercase tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    Bestill Befaring Nå
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <Link href="/prosjekter" className="text-xs font-mono text-white/40 hover:text-[#2eff9b] transition-colors flex items-center gap-2">
                <span className="text-lg">←</span> Tilbake til alle prosjekter
            </Link>
        </div>
      </section>
    </div>
  );
}
