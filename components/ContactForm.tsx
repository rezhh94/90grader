'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
    city: string;
    service: string;
}

export const ContactForm = ({ city, service }: ContactFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            description: formData.get('description'),
            city,
            service,
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative p-1 rounded-sm bg-gradient-to-br from-white/10 to-transparent">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#2eff9b]/10 blur-xl rounded-sm" />

            <div className="relative p-8 bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/5 rounded-sm overflow-hidden">

                {/* Subtle grid background inside form */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="relative z-10 mb-8">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                        <span className="w-6 h-[2px] bg-[#2eff9b]" />
                        Forespørsel for {city}
                    </h3>
                    <p className="text-sm text-[#e6e5de]/50 mt-2">
                        Fyll ut skjemaet under for et uforpliktende tilbud på {service.toLowerCase()}. Vi svarer raskt.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-xs font-mono text-[#2eff9b] uppercase tracking-widest mb-1.5 ml-1">
                                Navn / Firma
                            </label>
                            <input
                                required
                                id="name"
                                name="name"
                                type="text"
                                disabled={isSubmitting}
                                className="w-full bg-[#e6e5de]/5 border border-[#e6e5de]/10 rounded-sm px-4 py-3 text-[#e6e5de] placeholder:text-[#e6e5de]/20 focus:outline-none focus:border-[#2eff9b] focus:bg-white/10 transition-all disabled:opacity-50"
                                placeholder="Ola Nordmann"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="phone" className="block text-xs font-mono text-[#2eff9b] uppercase tracking-widest mb-1.5 ml-1">
                                    Telefon
                                </label>
                                <input
                                    required
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#e6e5de]/5 border border-[#e6e5de]/10 rounded-sm px-4 py-3 text-[#e6e5de] placeholder:text-[#e6e5de]/20 focus:outline-none focus:border-[#2eff9b] focus:bg-white/10 transition-all disabled:opacity-50"
                                    placeholder="+47 000 00 000"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-mono text-[#2eff9b] uppercase tracking-widest mb-1.5 ml-1">
                                    E-post
                                </label>
                                <input
                                    required
                                    id="email"
                                    name="email"
                                    type="email"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#e6e5de]/5 border border-[#e6e5de]/10 rounded-sm px-4 py-3 text-[#e6e5de] placeholder:text-[#e6e5de]/20 focus:outline-none focus:border-[#2eff9b] focus:bg-white/10 transition-all disabled:opacity-50"
                                    placeholder="post@firma.no"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-xs font-mono text-[#2eff9b] uppercase tracking-widest mb-1.5 ml-1">
                                Beskrivelse av behov
                            </label>
                            <textarea
                                required
                                id="description"
                                name="description"
                                rows={4}
                                disabled={isSubmitting}
                                className="w-full bg-[#e6e5de]/5 border border-[#e6e5de]/10 rounded-sm px-4 py-3 text-[#e6e5de] placeholder:text-[#e6e5de]/20 focus:outline-none focus:border-[#2eff9b] focus:bg-white/10 transition-all resize-none disabled:opacity-50"
                                placeholder={`Beskriv hva du trenger hjelp med i ${city}...`}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full flex items-center justify-center gap-3 bg-[#2eff9b] hover:bg-[#2eff9b]/80 disabled:bg-white/10 disabled:text-[#e6e5de]/30 text-[#e6e5de] px-8 py-4 font-black text-sm tracking-wider rounded-sm transition-all overflow-hidden"
                    >
                        {/* Shimmer effect inside button */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                SEND FORESPØRSEL
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                {/* Status Overlays */}
                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="absolute inset-0 z-20 bg-[#0A0A0A]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                        >
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-8 h-8 text-green-500" />
                            </div>
                            <h4 className="text-2xl font-bold mb-2">Forespørsel Sendt</h4>
                            <p className="text-[#e6e5de]/60 mb-8 max-w-sm">
                                Takk for din henvendelse. Vi har mottatt informasjonen og vil ta kontakt med deg svært snart.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="text-sm font-bold text-[#2eff9b] hover:text-orange-400 border-b border-[#2eff9b] pb-1 transition-colors"
                            >
                                Send ny forespørsel
                            </button>
                        </motion.div>
                    )}

                    {status === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-6 left-6 right-6 z-20 bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-sm flex items-start gap-3 backdrop-blur-md"
                        >
                            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            <div className="text-sm">
                                <p className="font-bold">En feil oppstod</p>
                                <p className="text-red-500/70 mt-1">
                                    Systemet kunne ikke behandle din forespørsel akkurat nå. Vennligst prøv igjen, eller ring vakttelefonen.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};
