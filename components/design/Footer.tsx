import Link from 'next/link';
import { services, cities, cityNames } from '@/lib/data';

export const Footer = () => {
  return (
    <footer className="bg-[#2eff9b] text-[#181618] font-mono px-6 py-16 md:py-24 mt-20">
      
      {/* Top right cut corner mimicking Component_12 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative">
          
        <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#181618] flex items-center justify-center text-[#2eff9b] font-black text-sm rounded-sm shrink-0">
                    90
                </div>
                <span className="text-xl font-black font-sans tracking-tighter">90 GRADER</span>
            </div>
            <p className="text-sm opacity-80 max-w-sm">
                Vi er en moderne og løsningsorientert bedrift som spesialiserer oss på montering, service og rehabilitering. 
            </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#181618] text-[#2eff9b] px-3 py-1 font-bold uppercase text-xs inline-block w-fit mb-2">
            Tjenester
          </div>
          {services.slice(0,5).map((s) => (
            <Link key={s.id} href={`/oslo/${s.id}`} className="hover:opacity-60 transition-opacity text-sm uppercase flex items-center gap-2">
               <span>{s.title}</span>
               {s.vakt && <span className="text-[8px] bg-[#2eff9b]/20 text-[#2eff9b] px-1 py-0.5 rounded-sm border border-[#2eff9b]/30">VAKT</span>}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#181618] text-[#2eff9b] px-3 py-1 font-bold uppercase text-xs inline-block w-fit mb-2">
            Områder
          </div>
          {cities.slice(0,5).map((city) => (
            <Link key={city} href={`/${city}/${services[0].id}`} className="hover:opacity-60 transition-opacity text-sm uppercase">
               {cityNames[city]}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#181618] text-[#2eff9b] px-3 py-1 font-bold uppercase text-xs inline-block w-fit mb-2">
            Kontakt
          </div>
          <a href="tel:+4790000000" className="hover:opacity-60 drop-shadow-sm font-bold text-sm uppercase">
             +47 900 00 000
          </a>
          <a href="mailto:post@90grader.no" className="hover:opacity-60 text-sm uppercase">
             post@90grader.no
          </a>
          <div className="mt-4 pt-4 border-t border-[#181618]/20">
              <div className="font-bold text-sm uppercase mb-1">Vakttelefon 24/7</div>
              <div className="text-sm">Man-Fre: 07:00-16:00</div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t py-6 border-[#181618]/20 flex flex-col sm:flex-row justify-between items-center gap-6">
          
        <div className="flex items-center gap-6 opacity-60">
           {/* Socials minimal SVG */}
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="w-5 h-5"><path d="M19 3.592H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2m-10 14H6.477v-7H9zM7.694 9.309c-.771 0-1.286-.514-1.286-1.2s.514-1.2 1.371-1.2c.771 0 1.286.514 1.286 1.2s-.514 1.2-1.371 1.2M18 17.592h-2.442v-3.826c0-1.058-.651-1.302-.895-1.302s-1.058.163-1.058 1.302v3.826h-2.523v-7h2.523v.977c.325-.57.976-.977 2.197-.977S18 11.569 18 13.766z"/></svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="w-5 h-5"><path d="m3.322 2.88 6.824 9.949L2.99 21.12h1.525l6.307-7.307 5.011 7.307h4.807L13.5 10.71l6.758-7.83h-1.525l-5.909 6.846L8.128 2.88z"/></svg>
        </div>

        <div className="text-xs uppercase opacity-80 tracking-wider">
           © 2026 90 Grader AS
        </div>
      </div>

    </footer>
  );
};
