import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/data';

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-8">
      {projects.map((project) => (
        <Link key={project.id} href={`/prosjekter/${project.id}`} className="group block">
          
          <div className="relative">
            {/* 1. STATISK RAMME: Nøytral hvit-nyanse, ingen forskyvning på hover */}
            <div className="absolute inset-0 border border-white/10 translate-x-2 translate-y-2 z-0" />
            
            {/* 2. BILDEBOKS: Skarpe kanter og industriell maskering */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#161618] z-10">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
                />
              )}
              {/* Svak vignett for å fokusere blikket */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181618]/40 to-transparent" />
            </div>

            {/* 3. TEKNISK TAG: Minimalistisk plassering i hjørnet */}
            <div className="absolute top-0 right-0 bg-[#181618] border-l border-b border-white/10 px-3 py-1 z-20">
              <p className="font-mono text-[9px] text-[#e6e5de]/30 uppercase tracking-[0.2em]">
                {project.location}
              </p>
            </div>
          </div>

          {/* 4. DATA-INFORMASJON: Rent og hierarkisk */}
          <div className="mt-6 space-y-1">
            <h3 className="text-lg font-bold uppercase tracking-tight text-[#e6e5de]">
              {project.title}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono uppercase text-[#2eff9b] tracking-tighter">
                {project.service}
              </span>
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <span className="text-[10px] font-mono uppercase text-[#e6e5de]/20 italic">
                {project.zone}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};



