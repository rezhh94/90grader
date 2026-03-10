import Link from 'next/link';

export const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#181618]/80 backdrop-blur-xl border-b border-[#e6e5de]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-20 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-[#2eff9b] drop-shadow-sm flex items-center justify-center text-[#181618] font-black text-xs rounded-sm">
                    90
                </div>
                <span className="text-base text-[#e6e5de] font-black tracking-tighter">
                    90 GRADER
                </span>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-8">
                <Link href="/#tjenester" className="text-xs uppercase tracking-widest text-[#e6e5de]/60 hover:text-[#e6e5de] transition-colors font-bold">
                    Tjenester
                </Link>
                <Link href="/#byer" className="text-xs uppercase tracking-widest text-[#e6e5de]/60 hover:text-[#e6e5de] transition-colors font-bold">
                    Områder
                </Link>
            </nav>

            {/* CTA */}
            <Link
                href="tel:+4790000000"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#2eff9b] hover:bg-[#2eff9b]/80 text-[#181618] text-xs font-black tracking-wider shadow-[0_0_15px_rgba(46,255,155,0.2)] rounded-sm transition-colors"
            >
                <span className="w-2 h-2 rounded-full bg-[#181618] animate-pulse" />
                RING NÅ
            </Link>
        </div>
    </header>
);
