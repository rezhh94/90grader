import Link from 'next/link';
import { Project } from '@/lib/data';

interface ProjectGridProps {
    projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
                <Link
                    href={`/prosjekter/${project.id}`}
                    key={project.id}
                    className="group relative bg-[#1f1d1f] border border-white/5 p-8 overflow-hidden hover:border-[#2eff9b]/30 transition-all duration-500 rounded-xl"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                        <div className="text-[10px] font-mono text-[#2eff9b]">DETALJER →</div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[8px] font-mono px-1.5 py-0.5 border border-[#2eff9b]/30 text-[#2eff9b] uppercase">
                                {project.service}
                            </span>
                            <span className="text-[8px] font-mono px-1.5 py-0.5 border border-white/10 text-white/40 uppercase">
                                {project.location}
                            </span>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold tracking-tight group-hover:text-[#2eff9b] transition-colors mb-4">
                                {project.title}
                            </h3>
                            <p className="text-sm text-white/40 font-light leading-relaxed line-clamp-3">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[9px] text-white/30 uppercase tracking-wider">#{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Action Green Indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2eff9b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
            ))}
        </div>
    );
};
