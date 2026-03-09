import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const leadData = await req.json();

        // 1. LOGGFØRING (Ditt bevis for fakturering)
        // Simulated database save - replace with actual Supabase/Firebase call later
        const leadLogId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        console.log(`[LEAD SYSTEM] Saved lead to database:`, { id: leadLogId, ...leadData });

        // 2. THE MASTER SWITCH (Din kontroll)
        // In production, these should be in .env.local
        // Using fallbacks here for the demo/build to work out of the box
        const targetEmail = process.env.CLIENT_LEAD_EMAIL || 'post@90grader.no';

        // Default to true for the demo so the form successfully submits
        const isAccountActiveStr = process.env.PARTNER_ACTIVE ?? 'true';
        const isAccountActive = isAccountActiveStr === 'true';

        if (!isAccountActive) {
            // Om de ikke betaler, ruter vi leadet til din "Reserve-pool" eller en konkurrent
            console.log(`[MASTER SWITCH] Partner inactive! Routing lead ${leadLogId} to backup pool.`);
            return NextResponse.json({ status: 'routed_to_alt' });
        }

        // 3. LEVERANSE TIL KUNDEN (90 Grader)
        console.log(`[MASTER SWITCH] Partner active. Sending lead ${leadLogId} to ${targetEmail}`);

        // Simulate email delivery delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        return NextResponse.json({
            success: true,
            id: leadLogId,
            message: 'Lead processed and tracked.',
        });
    } catch (error) {
        console.error('[LEAD SYSTEM ERROR]', error);
        return NextResponse.json({ error: 'Lead processing failed' }, { status: 500 });
    }
}
