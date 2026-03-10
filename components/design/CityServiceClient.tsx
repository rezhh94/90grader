'use client';

import React, { useState, useEffect } from 'react';

interface CityServiceClientProps {
  cityName: string;
}

export function CityServiceClient({ cityName }: CityServiceClientProps) {
  const [responseTime, setResponseTime] = useState(45);

  // Løsning C: Instant Gratification Ticker (Hydration-safe)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResponseTime(Math.floor(Math.random() * (60 - 30 + 1) + 30));
  }, []);

  return (
    <section className="min-h-screen bg-[#050505] text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* 1400px Container - Fjerner "inneklemt" følelse */}
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* VENSTRE SIDE: Autoritet & Innhold (7 Kolonner) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
              </span>
              <span className="text-neon-green text-xs font-bold uppercase tracking-widest">
                VAKT 24/7 I {cityName.toUpperCase()}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Profesjonell service på <span className="text-neon-green font-outline">vinduer og dører</span> i {cityName}
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              90 Grader leverer døgnkontinuerlig bistand for både private og næring.
              Med over 15 års erfaring garanterer vi kvalitet i hvert eneste prosjekt –
              fra akutte skader til planlagt vedlikehold.
            </p>

            {/* Fordeler Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              {[
                { title: 'Kvalitetssikret', desc: 'Alle oppdrag etter gjeldende standarder.' },
                { title: 'Lokalkjent', desc: `Inngående kjennskap til ${cityName} og omegn.` },
                { title: 'Erfarne Fagfolk', desc: 'Sertifiserte tømrere og montører.' },
                { title: 'Rask Respons', desc: `Vaktlag stasjonert i ${cityName}.` }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-neon-green/30 transition-colors">
                  <div className="h-2 w-8 bg-neon-green mb-4 rounded-full" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HØYRE SIDE: Den Moderne Lead-Magneten (5 Kolonner) */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="relative group">
              {/* Bakgrunns-glød */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-green to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Forespørsel for {cityName}</h2>
                  <div className="flex items-center text-sm text-slate-400">
                    <span>Gjennomsnittlig responstid nå: </span>
                    <span className="text-neon-green font-mono font-bold ml-2">{responseTime} minutter</span>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Fullt navn / Firma</label>
                    <input
                      type="text"
                      placeholder="Ola Nordmann"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all text-white placeholder:text-slate-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Telefon</label>
                      <input
                        type="tel"
                        placeholder="+47 ..."
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-green transition-all text-white placeholder:text-slate-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">E-post</label>
                      <input
                        type="email"
                        placeholder="post@email.no"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-green transition-all text-white placeholder:text-slate-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Beskrivelse av behov</label>
                    <textarea
                      rows={4}
                      placeholder={`Hva trenger du hjelp med i ${cityName}?`}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-neon-green transition-all text-white placeholder:text-slate-700 resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full group relative flex items-center justify-center px-8 py-5 bg-neon-green text-black font-black uppercase tracking-tighter rounded-xl overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_-5px_rgba(20,255,147,0.4)]">
                    <span className="relative z-10">Send Forespørsel</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </button>

                  <p className="text-[10px] text-center text-slate-600 uppercase tracking-widest pt-2">
                    Uforpliktende tilbud • Svar innen {responseTime} min
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
