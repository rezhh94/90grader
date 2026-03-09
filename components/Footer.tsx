import Link from 'next/link';
import { services, cities, cityNames } from '@/lib/data';

export const Footer = () => (
    <footer className="border-t border-white/10 bg-black/50 mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="md:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-orange-600 flex items-center justify-center text-white font-black text-xs rounded-sm">
                            90
                        </div>
                        <span className="text-base font-black tracking-tighter">90 GRADER</span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">
                        Moderne og løsningsorientert. Presisjon er standard.
                    </p>
                </div>

                {/* Tjenester */}
                <div>
                    <h4 className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-6">Tjenester</h4>
                    <ul className="space-y-3">
                        {services.map((s) => (
                            <li key={s.id}>
                                <Link href={`/oslo/${s.id}`} className="text-sm text-white/40 hover:text-white transition-colors">
                                    {s.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Områder */}
                <div>
                    <h4 className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-6">Områder</h4>
                    <ul className="space-y-3">
                        {cities.map((city) => (
                            <li key={city}>
                                <Link href={`/${city}/${services[0].id}`} className="text-sm text-white/40 hover:text-white transition-colors">
                                    {cityNames[city]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Kontakt */}
                <div>
                    <h4 className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-6">Kontakt</h4>
                    <div className="space-y-4 text-sm">
                        <div>
                            <p className="text-white/40">Telefon</p>
                            <a href="tel:+4790000000" className="text-white hover:text-orange-500 transition-colors font-bold">
                                +47 900 00 000
                            </a>
                        </div>
                        <div>
                            <p className="text-white/40">E-post</p>
                            <a href="mailto:post@90grader.no" className="text-white hover:text-orange-500 transition-colors font-bold">
                                post@90grader.no
                            </a>
                        </div>
                        <div>
                            <p className="text-white/40">Åpningstider</p>
                            <p className="text-white font-medium">Man–Fre: 07:00–16:00</p>
                            <p className="text-orange-500 font-bold">Vakttelefon 24/7</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-white/20">© 2026 90 Grader AS. Alle rettigheter reservert.</p>
                <div className="flex items-center gap-2 text-xs text-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    System Operativt
                </div>
            </div>
        </div>
    </footer>
);
