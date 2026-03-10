import React from 'react';
import { ContactForm } from '../ContactForm';

export const ContactSection = () => {
  return (
    <section id="kontakt" className="bg-[#181618] text-[#e6e5de] px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              START DITT <br/><span className="text-[#2eff9b]">PROSJEKT.</span>
            </h2>
            <p className="text-xl text-[#e6e5de]/60 mb-12 max-w-md">
              Uansett om det gjelder et moderne nybygg eller restaurering av et eldre objekt, 
              finner vi den beste løsningen.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#2eff9b] transition-colors">
                  <span className="text-[#2eff9b]">📞</span>
                </div>
                <div>
                  <p className="text-xs uppercase opacity-40 font-mono">Vakttelefon 24/7</p>
                  <p className="text-xl font-bold">+47 900 00 000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl">
             <ContactForm service="Generell Forespørsel" city="Stor-Oslo" />
          </div>
        </div>
      </div>
    </section>
  );
};
