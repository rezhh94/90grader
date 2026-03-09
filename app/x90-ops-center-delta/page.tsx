"use client";
import { useEffect, useState } from 'react';
import { getAdminData, togglePartnerStatus } from './actions';

export default function AdminDashboard() {
    const [leads, setLeads] = useState<any[]>([]);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const { leadsData, settings } = await getAdminData();
        if (leadsData) setLeads(leadsData);
        if (settings) setIsActive(settings.partner_active);
    }

    async function toggleSwitch() {
        const nextState = !isActive;
        const success = await togglePartnerStatus(nextState);
        if (success) setIsActive(nextState);
    }

    return (
        <div className="min-h-screen bg-[#0A0A0B] text-white p-8 pt-24 font-mono">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter">LEAD COMMAND CENTER</h1>
                        <p className="text-white/40">Operatør: Deg | Prosjekt: 90 Grader</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-xs mb-2">PARTNER STATUS: {isActive ? '🟢 AKTIV' : '🔴 DEAKTIVERT'}</span>
                        <button
                            onClick={toggleSwitch}
                            className={`px-6 py-3 font-bold rounded ${isActive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} transition-all`}
                        >
                            {isActive ? 'SKRU AV LEADS' : 'AKTIVER LEADS'}
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 gap-4">
                    <h2 className="text-xl font-bold mb-4 italic">Siste 100 Leads (Ditt fakturagrunnlag)</h2>
                    <table className="w-full text-left glass rounded-lg overflow-hidden">
                        <thead className="bg-white/5 text-brand-orange uppercase text-xs">
                            <tr>
                                <th className="p-4">Dato</th>
                                <th className="p-4">Kunde</th>
                                <th className="p-4">Tjeneste</th>
                                <th className="p-4">By</th>
                                <th className="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {leads.map((lead: any) => (
                                <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-xs opacity-50">{new Date(lead.created_at).toLocaleString('no-NO')}</td>
                                    <td className="p-4 font-bold">{lead.name} <br /><span className="text-xs font-normal opacity-50">{lead.phone}</span></td>
                                    <td className="p-4">{lead.service}</td>
                                    <td className="p-4 capitalize">{lead.city}</td>
                                    <td className="p-4"><span className="px-2 py-1 bg-green-900/30 text-green-400 text-[10px] rounded border border-green-500/20">LOGGET</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
