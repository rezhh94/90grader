'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/data';

export const ServicesSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-24 md:py-32 bg-[#181618] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-20 space-y-4">
          <p className="font-mono text-[10px] text-[#2eff9b] uppercase tracking-[0.4em]">Kjerneområder</p>
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-[#e6e5de]">
            Hva vi leverer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service) => (
            <Link 
              key={service.id} 
              href={`/oslo/${service.id}`}
              className="group flex flex-col h-full focus:outline-none focus:ring-1 focus:ring-[#2eff9b]/40 rounded-sm"
            >
              {/* 1. Top Section - Compressed Macro Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1c] border border-white/5">
                <Image 
                  src={service.macroImage || '/images/hero/service-placeholder.webp'} 
                  alt={service.title}
                  fill 
                  className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181618]/20 to-transparent pointer-events-none" />
              </div>

              {/* 2. Middle Section - Minimalist Content */}
              <div className="py-6 md:py-8 space-y-3 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#e6e5de] group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-[#e6e5de]/40 text-sm leading-relaxed font-light line-clamp-2 md:line-clamp-none">
                  {service.desc}
                </p>
              </div>

              {/* 3. Footer Section - Simplified CTA */}
              <div className="mt-auto">
                <div className="inline-flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#e6e5de]/60 group-hover:text-[#2eff9b] transition-colors duration-300">
                    Les mer
                  </span>
                  <div className="h-[1px] w-8 bg-white/10 group-hover:w-12 group-hover:bg-[#2eff9b] transition-all duration-500" />
                </div>
              </div>

              {/* Subtle Bottom Separator for Mobile Stacking */}
              <div className="mt-10 md:hidden h-[1px] w-full bg-white/5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
