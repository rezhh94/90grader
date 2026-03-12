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
      ref: "ARCH-01"
    },
    { 
      title: "Kjerneboring i Komplekse Konstruksjoner", 
      slug: "kjerneboring-teknikk", 
      cat: "Teknisk Rapport",
      image: "/images/services/macro-drill.webp",
      ref: "TECH-22"
    },
    { 
      title: "Tak & Fasade: Nordisk Klimasikring", 
      slug: "fasade-klimasikring", 
      cat: "Bærekraft",
      image: "/images/services/macro-facade.webp",
      ref: "ENV-09"
    }
  ];

  return (
    <section className="bg-[#181618] px-6 py-24 md:py-32 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] text-[#2eff9b] uppercase tracking-[0.4em] mb-4">Kunnskapsarkiv</p>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[#e6e5de]">Fag-arkiv</h2>
            <p className="text-[#e6e5de]/40 font-light mt-4 max-w-md">
              Dypdykk i våre mest krevende prosjekter og lær om metodene vi bruker for å sikre 2026-standard resultater.
            </p>
          </div>
          <Link 
            href="/fag-arkiv" 
            className="group flex items-center gap-3 text-[#2eff9b] font-mono text-[10px] uppercase tracking-[0.2em]"
          >
            Se alle publikasjoner
            <div className="h-[1px] w-6 bg-[#2eff9b] group-hover:w-10 transition-all duration-500" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {articles.map((art) => (
            <Link 
              key={art.slug} 
              href={`/fag-arkiv/${art.slug}`} 
              className="group relative flex flex-col h-full bg-[#1a1a1c] border border-white/5 transition-all duration-500 hover:border-white/10"
            >
              {/* 1. Portrait Image Container with "Vault" Overlay */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={art.image} 
                  alt={art.title} 
                  fill 
                  className="object-cover grayscale-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Technical Blue Overlay (Archival feel) */}
                <div className="absolute inset-0 bg-[#1e293b]/60 mix-blend-multiply opacity-100 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Corner Accents (Blueprint feel) */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/20 group-hover:border-[#2eff9b]/40 transition-colors duration-500" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/20 group-hover:border-[#2eff9b]/40 transition-colors duration-500" />
                
                {/* Metadata Badge */}
                <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md px-3 py-1 border border-white/10">
                  <span className="font-mono text-[9px] text-[#e6e5de]/60 tracking-widest">{art.ref}</span>
                </div>
              </div>

              {/* 2. Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-mono text-[#2eff9b] uppercase tracking-[0.3em] mb-4 block">
                  {art.cat}
                </span>
                <h3 className="text-xl md:text-2xl font-bold uppercase leading-tight text-[#e6e5de] group-hover:text-white transition-colors duration-500">
                  {art.title}
                </h3>
                
                {/* Simple Journal CTA */}
                <div className="mt-auto pt-8 flex items-center gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#e6e5de]/40 group-hover:text-[#2eff9b] transition-colors duration-300">
                    Les Rapport
                  </span>
                  <div className="h-[1px] w-4 bg-white/10 group-hover:w-8 group-hover:bg-[#2eff9b] transition-all duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
