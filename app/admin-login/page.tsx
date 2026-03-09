"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Vi setter en cookie som varer i 24 timer
        document.cookie = `admin_session=${password}; path=/; max-age=86400; SameSite=Strict`;
        router.push('/x90-ops-center-delta');
    };

    return (
        <main className="min-h-screen bg-[#0A0A0B] flex items-center justify-center font-mono p-6">
            <div className="glass p-12 rounded-2xl w-full max-w-md border border-white/10">
                <div className="mb-8 text-center">
                    <div className="inline-block p-4 rounded-full bg-brand-orange/10 mb-4">
                        <span className="text-brand-orange text-2xl">🔒</span>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tighter">SECURE ACCESS</h1>
                    <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">90 Grader Command Center</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="text-[10px] text-white/40 uppercase mb-2 block">Enter Master Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-brand-orange outline-none transition-all text-center tracking-[1em]"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-brand-orange hover:bg-orange-600 p-4 font-bold rounded-lg transition-all btn-glow uppercase text-sm">
                        Authorize Session
                    </button>
                </form>
            </div>
        </main>
    );
}
