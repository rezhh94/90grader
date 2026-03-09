import Link from 'next/link';

export const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-20 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-orange-600 flex items-center justify-center text-white font-black text-xs rounded-sm">
                    90
                </div>
                <span className="text-base font-black tracking-tighter">
                    90 GRADER
                </span>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-8">
                <Link href="/#tjenester" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors font-bold">
                    Tjenester
                </Link>
                <Link href="/#byer" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors font-bold">
                    Områder
                </Link>
            </nav>

            {/* CTA */}
            <Link
                href="tel:+4790000000"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black tracking-wider rounded-sm transition-colors"
            >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                RING NÅ
            </Link>
        </div>
    </header>
);
