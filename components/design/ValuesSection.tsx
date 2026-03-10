import React from 'react';

export const ValuesSection = () => {
  return (
    <section className="bg-[#181618] text-[#e6e5de] px-6 py-24 border-b border-[#e6e5de]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-block px-3 py-1 border border-[#2eff9b] text-[#2eff9b] font-mono text-[10px] uppercase tracking-[0.3em] w-fit">
            Vår Standard
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
            KVALITET <br/><span className="text-[#e6e5de]/40 italic text-3xl md:text-5xl">UTEN KOMPROMISS.</span>
          </h2>
          <div className="space-y-6 text-lg text-[#e6e5de]/70 leading-relaxed font-light">
            <p>
              Hos 90 Grader AS står kvalitet alltid i sentrum – vi går aldri på kompromiss med standarden på vårt arbeid. 
              Vi er pålitelige og holder det vi lover, med punktlighet og ansvar som grunnpilarer.
            </p>
            <p>
              Gjennom god dialog og tett samarbeid skaper vi optimale resultater og trygge prosesser for både private og profesjonelle kunder.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div>
              <h4 className="font-mono font-bold text-[#2eff9b] uppercase text-xs tracking-widest mb-3">Vår Visjon</h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Å bli en ledende aktør innen montering av dører, vinduer, fasader og tak i det norske markedet.
              </p>
            </div>
            <div>
              <h4 className="font-mono font-bold text-[#2eff9b] uppercase text-xs tracking-widest mb-3">Vårt Mål</h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Levere arbeid av høyeste kvalitet hver gang og bygge langvarige relasjoner gjennom tillit.
              </p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#2eff9b]/5 rounded-3xl blur-2xl group-hover:bg-[#2eff9b]/10 transition-all duration-500" />
          <div className="relative aspect-[4/5] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('/blueprint-grid.svg')] opacity-10" />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <span className="font-mono text-[15vw] font-black opacity-5 tracking-tighter select-none">90°</span>
                <div className="absolute bottom-8 left-8 right-8 text-left border-l-2 border-[#2eff9b] pl-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#2eff9b] mb-1">Status: Sertifisert</p>
                  <p className="text-sm font-bold uppercase">Spesialist på verneverdig restaurering</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
