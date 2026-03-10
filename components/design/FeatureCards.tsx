import React from 'react';

export const FeatureCards = () => {
  return (
    <section className="bg-[#181618] text-[#e6e5de] px-6 py-24 md:py-32 border-b border-[#e6e5de]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Metrics Grid mimicking Component_4_2 */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm px-8 py-12 rounded-2xl flex flex-col items-center gap-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#e6e5de]">
                Solid Erfaring
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-8 justify-between">
                
                <div className="flex flex-col items-center gap-2">
                    <div className="font-sans font-bold text-5xl md:text-6xl uppercase tracking-tighter text-[#2eff9b]">
                        24/7
                    </div>
                    <div className="font-mono font-bold text-sm uppercase text-[#e6e5de]/80">
                        Vakttelefon
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="font-sans font-bold text-5xl md:text-6xl uppercase tracking-tighter text-[#2eff9b]">
                        15+
                    </div>
                    <div className="font-mono font-bold text-sm uppercase text-[#e6e5de]/80">
                        År Erfaring
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="font-sans font-bold text-5xl md:text-6xl uppercase tracking-tighter text-[#2eff9b]">
                        6
                    </div>
                    <div className="font-mono font-bold text-sm uppercase text-[#e6e5de]/80">
                        Byer
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="font-sans font-bold text-5xl md:text-6xl uppercase tracking-tighter text-[#2eff9b]">
                        100%
                    </div>
                    <div className="font-mono font-bold text-sm uppercase text-[#e6e5de]/80">
                        Kvalitetsgaranti
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};
