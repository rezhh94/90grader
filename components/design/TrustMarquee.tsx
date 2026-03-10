'use client';
import { motion } from 'framer-motion';

const trustLogos = [
  { name: 'Sentralt Godkjent', id: 'sg' },
  { name: 'Startbank', id: 'sb' },
  { name: 'Mesterbrev', id: 'mb' },
  { name: 'Miljøfyrtårn', id: 'mf' },
  { name: 'Faglig Stolthet', id: 'fs' },
];

export const TrustMarquee = () => {
  return (
    <div className="bg-[#181618] border-y border-white/5 py-10 overflow-hidden relative">
      {/* Tonet overlay for "fade" effekt på sidene */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#181618] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#181618] to-transparent z-10" />
      
      <motion.div 
        className="flex whitespace-nowrap gap-24 items-center"
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...trustLogos, ...trustLogos, ...trustLogos].map((logo, i) => (
          <div key={i} className="flex items-center gap-6 group">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center grayscale opacity-40 group-hover:opacity-100 transition-all">
               {/* Her legges SVG/Bilde av logoer inn */}
               <span className="text-[10px] font-mono text-[#2eff9b] font-bold">90°</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#e6e5de]/30 group-hover:text-[#2eff9b] transition-colors">
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
