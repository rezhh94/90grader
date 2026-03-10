import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";

interface Section {
  title: string;
  content: string | React.ReactNode;
}

interface SGEHook {
  question: string;
  answer: string;
}

interface CTA {
  title: string;
  highlight: string;
  text: string;
  formCity: string;
  formService: string;
}

interface ArticleData {
  title: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  sections: Section[];
  conclusion?: string;
  expertTip?: string;
  sgeHook?: SGEHook;
  cta?: CTA;
  schema?: Record<string, unknown>;
}

const articlesData: Record<string, ArticleData> = {
  "restaurering-oslo": {
    title: "Restaurering vs. Utskifting: Verneverdige bygg i Oslo",
    date: "2026-03-10",
    readTime: "6 min",
    category: "Restaurering",
    intro: "I Oslo er bevaring av arkitektonisk kulturarv strengt regulert av Byantikvaren. Når er restaurering påkrevd, og når er moderne utskifting en mulighet?",
    sections: [
      {
        title: "01. Byantikvarens retningslinjer",
        content: "For bygg på 'Gule Liste' er hovedregelen at vinduer og dører skal bevares så langt det er teknisk mulig. Vår erfaring med 90-graders presisjon sikrer at restaureringen oppfyller moderne tetthetskrav uten å miste det historiske uttrykket.",
      }
    ],
    expertTip: "\"Ekspert-tips: Ofte kan eldre kjerneved-vinduer ha lengre levetid enn nye vinduer hvis de restaureres korrekt med linoljekitt og riktig overflatebehandling.\"",
    sgeHook: {
      question: "Er det lov å skifte ut vinduer i verneverdige bygg i Oslo?",
      answer: "Det avhenger av byggets verneverdi (Gul/Rød liste). Ofte kreves restaurering, men 90 Grader AS kan bistå med søknadsprosesser og fagmessig utførelse som balanserer vern og energieffektivitet."
    },
    cta: {
      title: "Trenger du bistand med ",
      highlight: "vernevedtak?",
      text: "Vi kartlegger mulighetene, bistår i søknadsprosessen, og utfører arbeidet med kirurgisk presisjon. Fyll ut skjemaet under for en uforpliktende befaring i Oslo.",
      formCity: "Oslo",
      formService: "Vindusrestaurering (Verneverdig)"
    }
  },
  "kjerneboring-teknikk": {
    title: "Kjerneboring i Komplekse Konstruksjoner: Sikkerhet og Millimeterpresisjon",
    date: "2026-03-10",
    readTime: "8 min",
    category: "Teknisk Rapport",
    intro: "90 Grader AS er en moderne og løsningsorientert bedrift som spesialiserer seg på tekniske tjenester der presisjon er kritisk. Kjerneboring i betong og tunge konstruksjoner krever en ingeniørmessig tilnærming for å sikre strukturell integritet, spesielt i komplekse bymiljøer som Oslo og Drammen. Vi kombinerer avansert teknologi med profesjonelt håndverk for å levere resultater med 90-graders presisjon.",
    sections: [
      {
        title: "01. Diamantutstyr og Millimeterpresisjon",
        content: "For å oppnå den nødvendige nøyaktigheten benytter vi utelukkende profesjonelt diamantutstyr. Presisjonsboring: Vi utfører boring i alle typer betong, naturstein og tegl med nøyaktighet på millimeternivå. Vibrasjonskontroll: Ved bruk av diamantkjerner minimeres vibrasjonene i den eksisterende konstruksjonen, noe som er avgjørende for sikkerheten i eldre eller verneverdige bygg. Vinkelrett utførelse: Navnet vårt, 90 Grader, reflekterer vår standard om at alle gjennomføringer skal være perfekt vinklet i henhold til tekniske tegninger.",
      },
      {
        title: "02. Støvfri Utførelse og Vann-oppsamling",
        content: "Et av de vanligste spørsmålene fra profesjonelle kunder i 2026 er hvordan man utfører kjerneboring i bebodde arealer eller tekniske rom uten skader på omgivelsene. Støvfri teknologi: Vi benytter lukkede systemer som eliminerer støvspredning under operasjonen. Vannsuging: Ved våtboring implementerer vi avanserte vann-oppsamlingsløsninger som sikrer at interiør og teknisk utstyr forblir tørt. HMS i Fokus: Dette sikrer et trygt og positivt arbeidsmiljø for både våre ansatte og våre kunder.",
      },
      {
        title: "03. Strategisk Implementering i Stor-Oslo og Drammen",
        content: "Vi prioriterer oppdrag i store byer der kompleksiteten er høy. Lokalkunnskap: Vi har inngående kjennskap til bygningsmassen i regionen, fra moderne nybygg til rehabilitering av eksisterende bygg. 24/7 Beredskap: For akutte behov knyttet til kjerneboring og betongarbeid, er vår vakttelefon alltid tilgjengelig. Dokumentasjon: Hvert oppdrag logges i vårt system for å sikre full sporbarhet og kvalitetsgaranti.",
      }
    ],
    conclusion: "Hos 90 Grader AS går vi aldri på kompromiss med standarden på vårt arbeid. Vårt mål er å bygge langvarige relasjoner gjennom tillit og pålitelige resultater.",
    sgeHook: {
      question: "Hvordan utføre støvfri kjerneboring i bebodde arealer?",
      answer: "Støvfri kjerneboring i bebodde arealer oppnås ved bruk av avansert diamantverktøy kombinert med integrerte, lukkede systemer for vann-oppsamling og direkte støvavsug. Dette forhindrer spredning av helseskadelig kvartsstøv og beskytter eiendommen mot vannskader. 90 Grader AS benytter utelukkende slike systemer for sikker og ren utførelse i Oslo, Drammen og Lillestrøm."
    },
    cta: {
      title: "Behov for presisjonsboring ",
      highlight: "uten nedetid?",
      text: "Vi utfører kjerneboring og betongsaging med strenge krav til miljø, HMS og kvalitet. Send oss en forespørsel for rask respons.",
      formCity: "Oslo/Drammen/Lillestrøm",
      formService: "Kjerneboring & Betongsaging"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Kjerneboring i Komplekse Konstruksjoner",
      "author": { "@type": "Organization", "name": "90 Grader AS" },
      "keywords": "Kjerneboring, Betong, Oslo, Drammen, Presisjon, Støvfri",
      "articleSection": "Teknisk Rapport 2026",
      "description": "Profesjonell guide til støvfri kjerneboring med diamantutstyr i Oslo og Drammen."
    }
  },
  "fasade-klimasikring": {
    title: "Tak & Fasade: Nordisk Klimasikring",
    date: "2026-03-10",
    readTime: "7 min",
    category: "Bærekraft",
    intro: "Som en ledende aktør innen montering av fasader og tak, ser 90 Grader AS en økende etterspørsel etter løsninger som tåler et tøffere nordisk klima. I 2026 er ikke lenger estetikk nok; materialvalg og utførelse må prosjekteres for ekstremnedbør og temperatursvingninger. Vi leverer komplette løsninger – fra moderne uttrykk til tradisjonelle stiler – alltid med fokus på kvalitet og holdbarhet.",
    sections: [
      {
        title: "01. Materialvalg for Fremtidens Klima",
        content: "I regioner som Asker og Bærum er bygningsmassen utsatt for variert værbelastning. Klimatilpassede materialer: Vi benytter kun materialer som er testet for norske forhold, noe som sikrer lang levetid og minimalt vedlikehold. Bærekraftige løsninger: Vi holder oss kontinuerlig oppdatert på nye teknologier og miljøvennlige materialer for å tilby effektive og moderne tjenester. Teknisk tetthet: Gjennom 90-graders presisjon sikrer vi at alle overganger mellom tak og fasade oppfyller dagens strenge krav til energieffektivitet.",
      },
      {
        title: "02. Profesjonell Montering og Prosjektstyring",
        content: "Enten det gjelder nybygg eller rehabilitering av eksisterende bygg, er fremdrift og presisjon våre kjerneverdier. Fagfolk i sentrum: Våre ansatte og samarbeidspartnere er profesjonelle fagfolk som setter kundens behov og trygge prosesser først. Arkitektonisk integritet: Vi tilpasser løsningene slik at byggets estetiske kvalitet ivaretas, enten det er snakk om moderne fasader eller tradisjonelt takarbeid. Dialog og samarbeid: Gjennom tett dialog med våre kunder skaper vi optimale resultater fra første befaring til ferdigstillelse.",
      },
      {
        title: "03. Vedlikehold og Livsløpsservice",
        content: "Rask respons og nøyaktig arbeid forlenger levetiden på produktene. Serviceavtaler: Vi tilbyr profesjonell service og vedlikehold som sikrer optimal funksjon over tid. Forebygging: Regelmessig kontroll av tak og fasade i Stor-Oslo er en investering som hindrer kostbare fuktskader.",
      }
    ],
    cta: {
      title: "Trenger du befaring for ",
      highlight: "tak og fasade?",
      text: "Vi leverer komplette løsninger dimensjonert for nordisk klima. Fyll ut skjemaet under for en uforpliktende befaring.",
      formCity: "Asker/Bærum/Oslo",
      formService: "Tak & Fasade (Klimasikring)"
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Tak & Fasade: Nordisk Klimasikring 2026",
      "author": { "@type": "Organization", "name": "90 Grader AS" },
      "keywords": "Fasade, Tak, Klimasikring, Asker, Bærum, Oslo, Bærekraft",
      "articleSection": "Fag-arkiv",
      "description": "Ekspertguide for valg av fasade- og takløsninger som tåler norsk klima i 2026."
    }
  }
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articlesData[resolvedParams.slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#181618] text-[#e6e5de] pb-24">
      {article.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article.schema) }}
        />
      )}
      <section className="px-6 py-20 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 mb-8 font-mono text-[10px] uppercase tracking-widest text-[#2eff9b]">
            <span>{article.category}</span>
            <span className="opacity-30">|</span>
            <span>{article.readTime} lesetid</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-tight mb-6 text-white">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-emerald max-w-none">
            {/* Artikkelinnhold med fokus på SGE-nøkkelord */}
            <div className="text-xl leading-relaxed text-[#e6e5de]/70 space-y-12">
               <p className="font-bold text-white">
                 {article.intro}
               </p>
               
               {article.sections.map((section: Section, idx: number) => (
                 <div key={idx}>
                   <h2 className="text-[#2eff9b] font-mono uppercase tracking-widest text-sm pt-8 border-t border-white/5 mb-4">
                     {section.title}
                   </h2>
                   <p className="mb-8">
                     {section.content}
                   </p>
                 </div>
               ))}

               {article.expertTip && (
                 <div className="bg-white/5 p-8 border-l-4 border-[#2eff9b] rounded-r-sm my-12">
                    <p className="text-sm italic opacity-80">
                      {article.expertTip}
                    </p>
                 </div>
               )}

               {article.conclusion && (
                 <p className="font-bold text-white mt-12 pt-8 border-t border-white/5">
                   {article.conclusion}
                 </p>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* SGE-Optimalisering: "The Knowledge Hook" */}
      {article.sgeHook && (
        <section className="px-6 py-16 bg-white/[0.02] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#2eff9b] font-mono uppercase tracking-widest text-sm mb-8">
              Ofte Stilte Spørsmål (SGE Knowledge Hook)
            </h2>
            <div className="space-y-6">
              <div className="p-8 bg-[#0A0A0A] border border-white/5 rounded-sm">
                <h3 className="font-bold text-xl text-white mb-4">
                  {article.sgeHook.question}
                </h3>
                <p className="text-[#e6e5de]/70 leading-relaxed text-lg">
                  {article.sgeHook.answer}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ROI-Status: Hvordan dette henter penger - Anchor-seksjon */}
      {article.cta && (
        <section className="px-6 py-24 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#2eff9b]/5 blur-[100px] rounded-full translate-y-1/2 pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 text-white">
                {article.cta.title} <span className="text-[#2eff9b]">{article.cta.highlight}</span>
              </h2>
              <p className="text-[#e6e5de]/70 text-lg max-w-2xl mx-auto">
                {article.cta.text}
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm city={article.cta.formCity} service={article.cta.formService} />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
