'use client';

import { useEffect, useState } from 'react';

export const VaktCTA = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <a
            href="tel:+4790000000"
            className={`
        fixed bottom-6 right-6 z-50 flex items-center gap-3
        bg-[#2eff9b] hover:bg-[#2eff9b]/90 text-[#181618]
        px-6 py-4 font-black font-mono text-sm tracking-wider
        rounded-sm shadow-[0_0_40px_rgba(46,255,155,0.3)]
        transition-all duration-500
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
        >
            <span className="w-2.5 h-2.5 rounded-full bg-[#181618] animate-pulse" />
            RING VAKTTELEFON
        </a>
    );
};
