import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  image?: string;
  title?: string;
  subtitle?: string;
}

export const HeroSection = ({ 
  image = "", 
  title = "90 GRADER.", 
  subtitle = "Vi er en moderne og løsningsorientert bedrift som spesialiserer oss på montering, service og rehabilitering. Kvalitet i hver vinkel." 
}: HeroSectionProps) => {
  return (
    <section className="relative px-6 py-24 md:py-32 flex flex-col items-center select-none overflow-hidden scroll-mt-20 border-b border-[#e6e5de]/10 bg-[#181618]">
      {/* Background Image if provided */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-40 brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181618]/80 via-transparent to-[#181618]" />
        </div>
      )}

      <div className="text-center relative z-10 flex flex-col items-center gap-y-8 max-w-4xl mx-auto">
        
        {/* Top Status Label */}
        <div className="bg-[#2eff9b]/10 backdrop-blur-sm border border-[#2eff9b]/20 px-4 py-2 rounded-md flex items-center gap-3">
           <span className="w-2 h-2 rounded-full bg-[#2eff9b] animate-pulse shadow-[0_0_10px_rgba(46,255,155,0.8)]" />
           <span className="font-mono text-xs uppercase tracking-widest text-[#2eff9b] font-bold">
             Akkurat nå: 3 tømrere aktive
           </span>
        </div>

        {/* Main Headline */}
        <h1 className="leading-[1.1] font-sans font-bold text-5xl md:text-7xl uppercase text-[#e6e5de] tracking-tighter">
          {title.includes('.') ? (
            <>
              {title.split('.')[0]}.<br />
              <span className="text-[#e6e5de]/60">{title.split('.')[1]}</span>
            </>
          ) : (
            title
          )}
        </h1>
        
        {/* Description */}
        <p className="leading-relaxed text-lg max-w-2xl text-[#e6e5de]/80 m-0">
          {subtitle}
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="tel:+4790000000"
            className="bg-[#2eff9b] text-[#181618] hover:bg-[#2eff9b]/90 transition-colors font-mono font-bold text-sm uppercase h-12 px-8 flex justify-center items-center gap-2 rounded-md shadow-[0_0_20px_rgba(46,255,155,0.15)] hover:shadow-[0_0_30px_rgba(46,255,155,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#181618] animate-pulse" />
            Ring Vakttelefon
          </a>
          
          <Link
            href="#tjenester"
            className="bg-transparent text-[#e6e5de] hover:bg-white/5 transition-colors font-mono font-bold text-sm uppercase h-12 px-8 flex justify-center items-center gap-2 rounded-md border border-[#e6e5de]/20"
          >
            Se Tjenester
          </Link>
        </div>
      </div>
    </section>
  );
};
