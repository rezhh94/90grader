'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const KnowledgePreview = () => {
  const articles = [
    { 
      title: "Verneverdig Restaurering i Oslo", 
      slug: "restaurering-oslo", 
      cat: "Fag-artikkel",
      image: "/images/services/macro-restoration.webp",
      ref: "01",
      topic: "HISTORISK"
    },
    { 
      title: "Kjerneboring i Komplekse Konstruksjoner", 
      slug: "kjerneboring-teknikk", 
      cat: "Teknisk Rapport",
      image: "/images/services/macro-drill.webp",
      ref: "02",
      topic: "TEKNISK"
    },
    { 
      title: "Tak & Fasade: Nordisk Klimasikring", 
      slug: "fasade-klimasikring", 
      cat: "Klima-analyse",
      image: "/images/services/macro-facade.webp",
      ref: "03",
      topic: "MILJØ"
    }
  ];

  return (
    <section className="bg-[#181618] px-6 py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 space-y-4">
          <p className="font-mono text-[10px] text-[#2eff9b] uppercase tracking-[0.4em]">Fag-register</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#e6e5de]">
              Fag-arkiv
            </h2>
            <Link 
              href="/fag-arkiv" 
              className="group flex items-center gap-3 text-[#2eff9b] font-mono text-[10px] uppercase tracking-[0.2em]"
            >
              Komplett register
              <div className="h-[1px] w-6 bg-[#2eff9b] group-hover:w-10 transition-all duration-500" />
            </Link>
          </div>
        </div>

        {/* Ledger List */}
        <div className="flex flex-col border-t border-white/10">
          {articles.map((art) => (
            <Link 
              key={art.slug} 
              href={`/fag-arkiv/${art.slug}`} 
              className="group relative border-b border-white/10 focus:outline-none"
            >
              {/* IMAGE BACKGROUND REVEAL (The Wow Factor) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-1000 ease-out overflow-hidden pointer-events-none">
                <Image 
                  src={art.image} 
                  alt={art.title}
                  fill 
                  className="object-cover grayscale saturate-50 group-hover:scale-105 transition-transform duration-[2000ms]"
                  sizes="100vw"
                />
              </div>

              {/* LEDGER CONTENT */}
              <div className="relative z-10 py-10 md:py-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-20 transition-all duration-500 px-4 -mx-4 group-hover:bg-white/[0.01]">
                
                {/* 1. REF ID */}
                <div className="flex flex-row md:flex-col gap-3 md:gap-1 w-32 border-l border-[#2eff9b]/20 pl-4 group-hover:border-[#2eff9b] transition-colors duration-500">
                  <span className="font-mono text-[10px] text-[#2eff9b] font-bold tracking-widest leading-none">
                    REF_{art.ref}
                  </span>
                  <span className="font-mono text-[8px] text-[#e6e5de]/30 uppercase tracking-[0.2em]">
                    {art.topic}
                  </span>
                </div>

                {/* 2. MAIN CONTENT */}
                <div className="flex-grow max-w-2xl">
                  <span className="text-[9px] font-mono text-[#e6e5de]/40 uppercase tracking-[0.4em] mb-2 block group-hover:text-[#e6e5de]/60 transition-colors">
                    {art.cat}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#e6e5de] group-hover:text-white transition-colors duration-500">
                    {art.title}
                  </h3>
                </div>

                {/* 3. ACTION / STATUS */}
                <div className="md:ml-auto flex items-center gap-6">
                  <span className="hidden lg:block font-mono text-[8px] text-[#e6e5de]/20 uppercase tracking-[0.2em]">
                    Publisert // 2026
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#e6e5de]/40 group-hover:text-[#2eff9b] transition-colors duration-300">
                      Les mer
                    </span>
                    <div className="h-[1px] w-6 bg-white/10 group-hover:w-10 group-hover:bg-[#2eff9b] transition-all duration-500" />
                  </div>
                </div>
              </div>

              {/* TECHNICAL BOTTOM LINE (Blue-print feel) */}
              <div className="absolute left-0 bottom-[-1px] w-0 h-[1px] bg-[#2eff9b] group-hover:w-full transition-all duration-1000 z-20" />
            </Link>
          ))}
        </div>
      </div>

      {/* BACKGROUND DECORATIVE GRID (Blueprint feel) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-grid-white/[0.02] mask-image-radial-gradient pointer-events-none opacity-50" />
    </section>
  );
};
