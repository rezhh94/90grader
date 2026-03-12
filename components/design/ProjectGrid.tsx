import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/data';

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-8">
      {projects.map((project) => (
        <Link key={project.id} href={`/prosjekter/${project.id}`} className="group block">
          
          <div className="relative">
            {/* 1. Statisk Ramme: Nøytral farge, ingen bevegelse */}
            <div className="absolute inset-0 border border-white/10 translate-x-2 translate-y-2 z-0" />
            
            {/* 2. Bildeboks: Rent kutt, ingen unødvendig "glow" */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/20 bg-[#161618] z-10">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                />
              )}
            </div>

            {/* 3. Teknisk tag: Minimalistisk og integrert */}
            <div className="absolute top-0 right-0 bg-[#181618] border-l border-b border-white/10 px-3 py-1 z-20">
              <p className="font-mono text-[9px] text-[#e6e5de]/40 uppercase tracking-widest">
                {project.location}
              </p>
            </div>
          </div>

          {/* 4. Tekstinformasjon: Fokus på innhold */}
          <div className="mt-6 space-y-2">
            <h3 className="text-lg font-bold uppercase tracking-tight text-[#e6e5de]">
              {project.title}
            </h3>
            <div className="flex gap-3">
              <span className="text-[10px] font-mono uppercase text-[#2eff9b] tracking-tighter">
                {project.service}
              </span>
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


