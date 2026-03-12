import Image from 'next/image';

interface HeroProps {
  image?: string;
  title?: string;
  subtitle?: string;
}

export const HeroSection = ({ 
  image = "/images/hero/project-construction-city-ulven-90grader.webp",
  title = "Presisjon i hvert ledd",
  subtitle = "Håndverksbedrift med fokus på kvalitet og nøyaktighet i Stor-Oslo."
}: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#181618] flex items-center overflow-hidden border-b border-white/5">
      {/* Blueprint Griden fra layout.tsx skinner subtilt igjennom her */}
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full py-20">
        
        {/* TEKST-SEKSJON (Autoritet og Klarhet) */}
        <div className="lg:col-span-5 space-y-8 z-10 order-2 lg:order-1">
          <div className="inline-block px-3 py-1 border border-[#2eff9b]/20 text-[#2eff9b] font-mono text-[10px] uppercase tracking-[0.3em] bg-[#2eff9b]/5">
            Operativ Autoritet • 2026
          </div>
          <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] text-[#e6e5de]">
            {title}
          </h1>
          <p className="text-xl text-[#e6e5de]/60 font-light max-w-md leading-relaxed">
            {subtitle}
          </p>
          <div className="pt-4">
            <button className="group relative px-8 py-4 bg-transparent border border-[#2eff9b] text-[#2eff9b] font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:text-[#181618]">
              <span className="relative z-10">Start Prosjekt</span>
              <div className="absolute inset-0 bg-[#2eff9b] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* BILDE-BOKS (Arkitektonisk Fokus) */}
        <div className="lg:col-span-7 relative h-[450px] md:h-[600px] w-full order-1 lg:order-2">
          {/* Den visuelle rammen som gir dybde */}
          <div className="absolute inset-0 border border-[#2eff9b]/10 translate-x-6 translate-y-6 z-0" />
          
          <div className="relative h-full w-full overflow-hidden border border-white/10 group shadow-2xl">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Subtilt industrielt overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#181618]/40 to-transparent mix-blend-multiply" />
          </div>

          {/* Teknisk flytende data-tag */}
          <div className="absolute -bottom-4 -left-4 md:-left-8 bg-[#181618] border border-white/10 p-6 z-20 hidden md:block backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#2eff9b] animate-pulse" />
              <div>
                <p className="font-mono text-[10px] text-[#2eff9b] uppercase tracking-widest">Siste Flaggskip</p>
                <p className="text-white font-bold text-sm uppercase tracking-tight">Construction City, Ulven</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
