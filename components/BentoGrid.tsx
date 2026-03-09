import Link from 'next/link';
import { services } from '@/lib/data';

type Service = (typeof services)[number];

export const BentoGrid = ({ items }: { items: Service[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
        {items.map((s, i) => (
            <Link
                href={`/oslo/${s.id}`}
                key={s.id}
                className={`
          group relative overflow-hidden p-8 rounded-none
          border border-white/5 bg-white/[0.01]
          hover:border-orange-500/50 hover:bg-orange-500/[0.02] hover:shadow-[0_0_30px_rgba(255,95,0,0.1)] transition-all duration-700
          flex flex-col justify-between
          ${i === 0 || i === 3 ? 'md:col-span-2' : ''}
        `}
            >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                    <span className="inline-block text-[10px] font-mono text-orange-500 uppercase tracking-[0.25em]">
                        {s.vakt ? '● VAKT' : '◆ PROSJEKT'}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-4 tracking-tight">{s.title}</h3>
                    <p className="text-white/40 mt-3 max-w-sm text-sm leading-relaxed">{s.desc}</p>
                </div>

                <div className="relative z-10 mt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-black text-orange-500 tracking-wider">
                        LES MER →
                    </span>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                    <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-orange-500 to-transparent" />
                </div>
            </Link>
        ))}
    </div>
);
