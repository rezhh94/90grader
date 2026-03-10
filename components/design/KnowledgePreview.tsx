import Link from 'next/link';

export const KnowledgePreview = () => {
  const articles = [
    { title: "Verneverdig Restaurering i Oslo", slug: "restaurering-oslo", cat: "Fag-artikkel" },
    { title: "Kjerneboring i Komplekse Konstruksjoner: Sikkerhet og Millimeterpresisjon", slug: "kjerneboring-teknikk", cat: "Teknisk Rapport" },
    { title: "Tak & Fasade: Nordisk Klimasikring", slug: "fasade-klimasikring", cat: "Bærekraft" }
  ];

  return (
    <section className="bg-[#181618] px-6 py-24 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">Fag-arkiv</h2>
            <p className="text-[#e6e5de]/50 font-mono text-xs uppercase tracking-widest">Innsikt og teknisk dokumentasjon for 2026-markedet.</p>
          </div>
          <Link href="/fag-arkiv" className="hidden md:block text-[#2eff9b] font-mono text-xs uppercase hover:underline">Se alle artikler →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(art => (
            <Link key={art.slug} href={`/fag-arkiv/${art.slug}`} className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#2eff9b]/30 transition-all">
              <span className="text-[10px] font-mono text-[#2eff9b] uppercase mb-4 block">{art.cat}</span>
              <h3 className="text-xl font-bold uppercase leading-tight group-hover:text-[#2eff9b] transition-colors">{art.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
