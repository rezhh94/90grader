import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/data';

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-8">
      {projects.map((project) => (
        <Link key={project.id} href={`/prosjekter/${project.id}`} className="group block">
          
          <div className="relative">
            {/* 1. Den statiske rammen ligger fast som et anker */}
            <div className="absolute inset-0 border border-white/5 translate-x-2 translate-y-2 z-0" />
            
            {/* 2. Bildeboksen - Løfter seg 4px opp ved hover (Elevation) */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#161618] z-10 transition-transform duration-500 ease-out group-hover:-translate-y-1">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181618]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* 3. Lokasjonstag - Statisk og nøytral */}
            <div className="absolute top-0 right-0 bg-[#181618] border-l border-b border-white/10 px-3 py-1 z-20">
              <p className="font-mono text-[9px] text-[#e6e5de]/30 uppercase tracking-[0.2em]">
                {project.location}
              </p>
            </div>
          </div>

          {/* 4. Tekst & CTA - Interaktiv reveal */}
          <div className="mt-6 space-y-1">
            <h3 className="text-lg font-bold uppercase tracking-tight text-[#e6e5de] group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase text-[#2eff9b] tracking-tighter">
                  {project.service}
                </span>
                <div className="w-1 h-1 rounded-full bg-white/10" />
                <span className="text-[10px] font-mono uppercase text-[#e6e5de]/20 italic">
                  {project.zone}
                </span>
              </div>

              {/* DYNAMISK CTA: En pil som "våkner" ved hover */}
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="text-[9px] font-mono uppercase text-[#2eff9b] tracking-widest opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  Se Case
                </span>
                <svg 
                  className="w-4 h-4 text-[#2eff9b] transition-transform duration-500 group-hover:translate-x-1" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};



