export const cities = ['oslo', 'drammen', 'asker', 'baerum', 'lillestrom', 'jessheim'];

export const cityNames: Record<string, string> = {
    oslo: 'Oslo',
    drammen: 'Drammen',
    asker: 'Asker',
    baerum: 'Bærum',
    lillestrom: 'Lillestrøm',
    jessheim: 'Jessheim',
};

export const services = [
    {
        id: 'vindusservice',
        title: 'Service på vinduer og dører',
        vakt: true,
        desc: 'Profesjonell service, justering og vedlikehold. Rask respons forlenger levetiden.',
        longDesc:
            'Vi tilbyr profesjonell service, justering og vedlikehold av vinduer og dører. Rask respons og nøyaktig arbeid forlenger levetiden på produktene og sikrer optimal funksjon over tid.',
        color: 'bg-orange-600',
    },
    {
        id: 'kjerneboring',
        title: 'Betongarbeid & Kjerneboring',
        vakt: true,
        desc: 'Presisjonsboring i betong og armering. Støvfritt og effektivt.',
        longDesc:
            'Våre spesialister på betong og kjerneboring leverer millimeterpresisjon i alt fra ventilasjonskanaler til større konstruksjonsendringer.',
        color: 'bg-slate-800',
    },
    {
        id: 'tomrer',
        title: 'Tømrerarbeid',
        vakt: true,
        desc: 'Alt fra bærende konstruksjoner til detaljert finish.',
        longDesc:
            'Våre erfarne tømrere håndterer alt fra bærende konstruksjoner til innvendige detaljer. Vi kombinerer håndverk og moderne metoder.',
        color: 'bg-orange-500',
    },
    {
        id: 'restaurering',
        title: 'Restaurering',
        vakt: false,
        desc: 'Eksperter på verneverdige bygg og historiske detaljer.',
        longDesc:
            'Vi er spesialister på restaurering av verneverdige og historiske bygg. Arbeidet utføres med tradisjonelle metoder kombinert med moderne teknikk for å bevare byggets autentiske karakter.',
        color: 'bg-stone-700',
    },
    {
        id: 'tak-fasade',
        title: 'Tak & Fasade',
        vakt: false,
        desc: 'Solide løsninger bygget for norsk klima.',
        longDesc:
            'Fra komplett takskifte til fasadekledning. Vi leverer solide løsninger designet for å tåle norsk vær, med fokus på holdbarhet og estetikk.',
        color: 'bg-zinc-800',
    },
    {
        id: 'nybygg-rehab',
        title: 'Rehab & Nybygg',
        vakt: false,
        desc: 'Fra plan til ferdigstillelse. Totalentreprise.',
        longDesc:
            'Vi tar prosjekter fra plan til ferdigstillelse. Enten det gjelder rehabilitering av eksisterende bygg eller nybygg, håndterer vi hele prosessen med erfarne prosjektledere.',
        color: 'bg-orange-700',
    },
];

// Final validation completed
