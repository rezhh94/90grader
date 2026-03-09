"use server";

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function getAdminData() {
    if (!supabase) return { leadsData: [], settings: null };
    try {
        const { data: leadsData } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
        const { data: settings } = await supabase.from('project_settings').select('partner_active').single();
        return { leadsData, settings };
    } catch (e) {
        console.error("Error fetching admin data", e);
        return { leadsData: [], settings: null };
    }
}

export async function togglePartnerStatus(nextState: boolean) {
    if (!supabase) return false;
    try {
        const { error } = await supabase.from('project_settings').update({ partner_active: nextState }).eq('id', 'global');
        if (error) {
            console.error("Error updating status", error.message);
            return false;
        }
        return true;
    } catch (e) {
        console.error("Error updating status", e);
        return false;
    }
}
