import React from 'react';
import Link from 'next/link';

// Mock data for the knowledge base articles to demonstrate the layout
const articles = [
  {
    id: "restaurering-vs-utskifting",
    title: "Restaurering vs. Utskifting: Slik bevarer du verdien i verneverdige bygg i Oslo",
    category: "Fasade & Bevaring",
    date: "Mars 2026",
    readTime: "4 min lesing",
    excerpt: "Når er det riktig å restaurere en fasade fremfor å skifte den ut? Vi går gjennom de økonomiske og arkitektoniske avveiningene ved arbeid på eldre byksningsmasse."
  },
  {
    id: "energikrav-2026",
    title: "Energikrav 2026: Hvor mye sparer du egentlig på å bytte til moderne fasade-løsninger?",
    category: "Energi & Økonomi",
    date: "Februar 2026",
    readTime: "6 min lesing",
    excerpt: "De nye kravene for 2026 tvinger frem endringer. Vi har analysert tallene for borettslag i Stor-Oslo og viser ROI ved oppgradering."
  },
  {
    id: "kjerneboring-sikkerhet",
    title: "Kjerneboring i betong: Sikkerhet og presisjon i komplekse konstruksjoner",
    category: "Teknisk Utførelse",
    date: "Januar 2026",
    readTime: "5 min lesing",
    excerpt: "Slik unngår du kritiske feil og skjulte kostnader ved boring i eldre betongkonstruksjoner der armeringen er ukjent."
  }
];

export default function FagArkivPage() {
  return (
    <div className="min-h-screen bg-[#0e0d0e] text-[#e6e5de] font-sans selection:bg-[#2eff9b] selection:text-[#0e0d0e]">
      {/* Background Grid */}
      <div 
        className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #444 1px, transparent 1px),
            linear-gradient(to bottom, #444 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 min-h-screen flex flex-col">
          
        {/* Header section */}
        <div className="mb-16 border-b border-white/5 pb-12">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#2eff9b] shadow-[0_0_10px_rgba(46,255,155,0.5)]" />
                <span className="font-mono text-xs text-[#2eff9b] uppercase tracking-wider">
                  Knowledge Base_Array // 90_Grader
                </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
                 Fag<span className="text-white/40">arkiv</span>
            </h1>
            <p className="text-lg text-[#e6e5de]/60 max-w-2xl font-light leading-relaxed">
              Teknisk innsikt, analyser og dypdykk i våre kjerneområder. Bygget for å gi deg presis informasjon og beslutningsgrunnlag av høyeste kvalitet.
            </p>
        </div>

        {/* Content list */}
        <div className="grid grid-cols-1 gap-4">
            {articles.map((article, index) => (
                <Link key={article.id} href={`/fag-arkiv/${article.id}`} className="group block">
                    <article className="border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-8 justify-between">
                        
                        {/* Hover accent line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#2eff9b] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                        
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                                <span className="font-mono text-[10px] text-[#2eff9b] uppercase tracking-widest px-2 py-1 bg-[#2eff9b]/10 border border-[#2eff9b]/20 inline-block">
                                    {article.category}
                                </span>
                                <span className="font-mono text-xs text-white/40">{article.date}</span>
                                <span className="font-mono text-xs text-white/40 inline-flex items-center gap-1 before:content-[''] before:w-1 before:h-1 before:bg-white/20 before:rounded-full">
                                    {article.readTime}
                                </span>
                            </div>
                            
                            <h2 className="text-2xl text-white font-medium mb-3 group-hover:text-[#2eff9b] transition-colors">
                                {article.title}
                            </h2>
                            
                            <p className="text-[#e6e5de]/60 leading-relaxed max-w-3xl">
                                {article.excerpt}
                            </p>
                        </div>
                        
                        <div className="flex items-end md:items-center">
                             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#2eff9b]/50 group-hover:bg-[#2eff9b]/10 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-[#2eff9b] transition-colors"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                             </div>
                        </div>

                    </article>
                </Link>
            ))}
        </div>

      </div>
    </div>
  );
}
