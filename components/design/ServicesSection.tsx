'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/data';

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('Alle');
  const [mounted, setMounted] = useState(false);
  const [randomTime, setRandomTime] = useState(45);
  const tabs = ['Alle', 'Vakt', 'Prosjekt'];

  React.useEffect(() => {
    setMounted(true);
    setRandomTime(Math.floor(Math.random() * (60 - 30 + 1) + 30));
  }, []);

  const filteredServices = services.filter(s => {
      if (activeTab === 'Vakt') return s.vakt === true;
      if (activeTab === 'Prosjekt') return s.vakt === false;
      return true;
  });

  return (
    <section className="bg-[#181618] text-[#e6e5de] px-6 py-24 md:py-32 border-b border-[#e6e5de]/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-2xl flex flex-col items-center gap-4 mb-10">
          <h2 className="leading-none font-sans font-bold text-4xl md:text-5xl uppercase text-[#e6e5de]">
            Våre Kjerneområder
          </h2>
          <p className="text-[#e6e5de]/70 text-lg">
             Alt fra akutt glassmestervakt til større rehabiliteringsprosjekter.
          </p>
        </div>

        {/* Tabs resembling Component_4 nav */}
        <nav role="tablist" className="bg-white/5 backdrop-blur-sm border border-white/10 p-1 mb-12 rounded-lg inline-flex items-center gap-2">
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                        font-mono text-xs uppercase h-10 px-6 py-0 rounded-md transition-all
                        ${activeTab === tab 
                            ? 'bg-[#2eff9b] text-[#181618] font-bold' 
                            : 'bg-transparent text-[#e6e5de] hover:bg-white/10'
                        }
                    `}
                >
                    {tab}
                </button>
            ))}
        </nav>

        {/* Features list resembling Component_4_1 elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredServices.map(service => (
                <Link href={`/oslo/${service.id}`} key={service.id}>
                    <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2eff9b]/30 p-6 rounded-xl flex items-start gap-4 transition-all duration-300 h-full backdrop-blur-sm">
                        
                        <div className="bg-black/20 p-2 border border-black/60 rounded flex-shrink-0 group-hover:border-[#2eff9b]/50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4 text-[#2eff9b]">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <h3 className="font-mono font-bold text-lg uppercase text-[#e6e5de] leading-tight flex flex-wrap items-center gap-2">
                                {service.title}
                                {service.vakt && (
                                    <div className="flex flex-wrap items-center gap-2 mt-1 sm:mt-0">
                                        <span className="text-[9px] bg-[#2eff9b]/20 text-[#2eff9b] px-1.5 py-0.5 rounded-sm border border-[#2eff9b]/30">VAKT 24/7</span>
                                        <span className="text-[9px] text-[#2eff9b]/80 flex items-center gap-1 border border-[#2eff9b]/10 bg-[#2eff9b]/5 px-1.5 py-0.5 rounded-sm">
                                            <span className="w-1.5 h-1.5 bg-[#2eff9b] rounded-full animate-pulse" />
                                            Live responstid: {mounted ? randomTime : 45} min
                                        </span>
                                    </div>
                                )}
                            </h3>
                            <p className="text-[#e6e5de]/60 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                            
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-mono text-[#2eff9b] uppercase font-bold tracking-wider">
                                    Les mer &rarr;
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        
      </div>
    </section>
  );
};
