'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects, services, Zone } from '@/lib/data';

export default function ProjectsPage() {
  const [activeZone, setActiveZone] = useState<Zone | 'ALLE'>('ALLE');
  const [activeService, setActiveService] = useState<string>('ALLE');

  const filteredProjects = projects.filter((project) => {
    const zoneMatch = activeZone === 'ALLE' || project.zone === activeZone;
    const serviceMatch = activeService === 'ALLE' || project.service === activeService;
    return zoneMatch && serviceMatch;
  });

  const zones: (Zone | 'ALLE')[] = ['ALLE', 'HISTORISK', 'MODERNE', 'VEKST'];
  const serviceOptions = ['ALLE', ...services.map((s) => s.id)];

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20">
      {/* Hero Section */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2eff9b]/10 border border-[#2eff9b]/20 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2eff9b] animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#2eff9b]">
            Operasjon: Bevisføring
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
          PROSJEKT<br />ARCHIVE.
        </h1>
        <p className="max-w-2xl text-xl text-[#a0a0a0] font-light leading-relaxed">
          Vår industrielle portefølje. Fra verneverdige bygårder på Frogner til høyteknologiske hotellbygg på Økern. Vi dokumenterer presisjon i alle soner.
        </p>
      </div>

      {/* Filter System */}
      <div className="flex flex-wrap gap-12 mb-16 border-y border-white/5 py-8">
        <div className="space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">01 / SONE_LOGIKK</span>
          <div className="flex flex-wrap gap-2">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => setActiveZone(zone)}
                className={`px-4 py-2 rounded-none border text-xs font-mono transition-all duration-300 ${
                  activeZone === zone
                    ? 'bg-[#2eff9b] border-[#2eff9b] text-[#181618] shadow-[0_0_20px_rgba(46,255,155,0.2)]'
                    : 'bg-transparent border-white/10 text-white/60 hover:border-white/30'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">02 / TJENESTE_FILTER</span>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((serviceId) => (
              <button
                key={serviceId}
                onClick={() => setActiveService(serviceId)}
                className={`px-4 py-2 rounded-none border text-xs font-mono transition-all duration-300 uppercase ${
                  activeService === serviceId
                    ? 'bg-[#2eff9b] border-[#2eff9b] text-[#181618] shadow-[0_0_20px_rgba(46,255,155,0.2)]'
                    : 'bg-transparent border-white/10 text-white/60 hover:border-white/30'
                }`}
              >
                {serviceId.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Asymmetrical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {filteredProjects.map((project, index) => {
          // Logic for asymmetic layout
          const isLarge = index % 5 === 0;
          const gridSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4';
          
          return (
            <Link 
              href={`/prosjekter/${project.id}`}
              key={project.id}
              className={`${gridSpan} group relative flex flex-col bg-[#1f1d1f] border border-white/5 overflow-hidden hover:border-[#2eff9b]/30 transition-all duration-500`}
            >
              <div className="aspect-[16/9] bg-[#2a282a] relative overflow-hidden">
                {/* Fallback pattern instead of images for now */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-[linear-gradient(45deg,#2eff9b_1px,transparent_1px),linear-gradient(-45deg,#2eff9b_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Info Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#181618] via-transparent to-transparent opacity-90">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-white/20 text-white/60 group-hover:border-[#2eff9b]/40 group-hover:text-[#2eff9b] transition-colors">
                      {project.zone}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-white/20 text-white/60">
                      {project.location.toUpperCase()}
                    </span>
                  </div>
                  <h3 className={`font-bold tracking-tight mb-2 group-hover:text-[#2eff9b] transition-colors duration-300 ${isLarge ? 'text-3xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#a0a0a0] line-clamp-2 font-light">
                    {project.description}
                  </p>
                </div>

                {/* Technical Corner - Action Green */}
                <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500 bg-[#2eff9b]">
                  <svg className="w-5 h-5 text-[#181618]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Stats / Proof Footer */}
      <div className="mt-32 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="space-y-2">
          <div className="text-4xl font-bold font-mono tracking-tighter text-[#2eff9b]">22</div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Referanse_Noder</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold font-mono tracking-tighter text-[#2eff9b]">358</div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Landings_Sider</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold font-mono tracking-tighter text-[#2eff9b] uppercase">Oslo+</div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Operative_Regioner</div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold font-mono tracking-tighter text-[#2eff9b]">24/7</div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Teknisk_Beredskap</div>
        </div>
      </div>
    </div>
  );
}
