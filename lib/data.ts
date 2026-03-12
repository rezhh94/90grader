export const regions = {
    oslo: ['frogner', 'majorstuen', 'ullern', 'vestre-aker', 'st-hanshaugen', 'grunerlokka', 'sagene', 'nordre-aker', 'nordstrand', 'gamle-oslo', 'alna', 'bjerke', 'grorud', 'stovner', 'ostensjo'],
    baerum_asker: ['bekkestua', 'sandvika', 'hovik', 'stabekk', 'fornebu', 'lysaker', 'rykkinn', 'haslum', 'asker-sentrum', 'slemmestad', 'heggedal', 'holmen', 'vollen', 'dikemark'],
    romerike: ['lillestrom', 'strommen', 'lorenskog', 'fjellhamar', 'skjetten', 'skedsmo', 'jessheim', 'klofta', 'kjeller', 'ralingen'],
    follo: ['ski', 'kolbotn', 'oppegard', 'langhus', 'as', 'drobak', 'nesoddtangen', 'vinterbro', 'vestby', 'son', 'greverud']
};

export const cities = [
    ...regions.oslo,
    ...regions.baerum_asker,
    ...regions.romerike,
    ...regions.follo
];

export const cityNames: Record<string, string> = {
    // Oslo Bydeler
    'frogner': 'Frogner', 'majorstuen': 'Majorstuen', 'ullern': 'Ullern', 'vestre-aker': 'Vestre Aker', 'st-hanshaugen': 'St. Hanshaugen', 'grunerlokka': 'Grünerløkka', 'sagene': 'Sagene', 'nordre-aker': 'Nordre Aker', 'nordstrand': 'Nordstrand', 'gamle-oslo': 'Gamle Oslo', 'alna': 'Alna', 'bjerke': 'Bjerke', 'grorud': 'Grorud', 'stovner': 'Stovner', 'ostensjo': 'Østensjø',
    // Bærum & Asker
    'bekkestua': 'Bekkestua', 'sandvika': 'Sandvika', 'hovik': 'Høvik', 'stabekk': 'Stabekk', 'fornebu': 'Fornebu', 'lysaker': 'Lysaker', 'rykkinn': 'Rykkinn', 'haslum': 'Haslum', 'asker-sentrum': 'Asker sentrum', 'slemmestad': 'Slemmestad', 'heggedal': 'Heggedal', 'holmen': 'Holmen', 'vollen': 'Vollen', 'dikemark': 'Dikemark',
    // Romerike
    'lillestrom': 'Lillestrøm', 'strommen': 'Strømmen', 'lorenskog': 'Lørenskog', 'fjellhamar': 'Fjellhamar', 'skjetten': 'Skjetten', 'skedsmo': 'Skedsmo', 'jessheim': 'Jessheim', 'klofta': 'Kløfta', 'kjeller': 'Kjeller', 'ralingen': 'Rælingen',
    // Follo
    'ski': 'Ski', 'kolbotn': 'Kolbotn', 'oppegard': 'Oppegård', 'langhus': 'Langhus', 'as': 'Ås', 'drobak': 'Drøbak', 'nesoddtangen': 'Nesoddtangen', 'vinterbro': 'Vinterbro', 'vestby': 'Vestby', 'son': 'Son', 'greverud': 'Greverud',
    'oslo': 'Oslo'
};

export type Zone = 'HISTORISK' | 'MODERNE' | 'VEKST';

export interface Project {
    id: string;
    title: string;
    location: string;
    cityId: string;
    service: string;
    zone: Zone;
    tags: string[];
    description: string;
    image?: string;
}

// 1. Definerer sonene for alle 50 nabolag (Arkitektonisk innholds-matrise)
export const neighborhoodMatrix: Record<string, { zone: Zone, coordinates: string }> = {
    // Oslo - Mye historisk
    'frogner': { zone: 'HISTORISK', coordinates: '59.9225, 10.7042' },
    'majorstuen': { zone: 'HISTORISK', coordinates: '59.9298, 10.7145' },
    'ullern': { zone: 'MODERNE', coordinates: '59.9265, 10.6540' },
    'vestre-aker': { zone: 'MODERNE', coordinates: '59.9535, 10.6865' },
    'st-hanshaugen': { zone: 'HISTORISK', coordinates: '59.9272, 10.7410' },
    'grunerlokka': { zone: 'HISTORISK', coordinates: '59.9226, 10.7583' },
    'sagene': { zone: 'HISTORISK', coordinates: '59.9372, 10.7538' },
    'nordre-aker': { zone: 'MODERNE', coordinates: '59.9576, 10.7594' },
    'nordstrand': { zone: 'MODERNE', coordinates: '59.8643, 10.7933' },
    'gamle-oslo': { zone: 'HISTORISK', coordinates: '59.9048, 10.7686' },
    'alna': { zone: 'VEKST', coordinates: '59.9329, 10.8357' },
    'bjerke': { zone: 'VEKST', coordinates: '59.9405, 10.8166' },
    'grorud': { zone: 'VEKST', coordinates: '59.9602, 10.8804' },
    'stovner': { zone: 'VEKST', coordinates: '59.9575, 10.9254' },
    'ostensjo': { zone: 'VEKST', coordinates: '59.8876, 10.8339' },
    // Bærum & Asker - Mye moderne/eneboliger
    'bekkestua': { zone: 'MODERNE', coordinates: '59.9168, 10.5878' },
    'sandvika': { zone: 'VEKST', coordinates: '59.8911, 10.5268' },
    'hovik': { zone: 'MODERNE', coordinates: '59.9009, 10.5786' },
    'stabekk': { zone: 'MODERNE', coordinates: '59.9079, 10.6062' },
    'fornebu': { zone: 'MODERNE', coordinates: '59.8941, 10.6267' },
    'lysaker': { zone: 'VEKST', coordinates: '59.9126, 10.6382' },
    'rykkinn': { zone: 'MODERNE', coordinates: '59.9288, 10.4812' },
    'haslum': { zone: 'MODERNE', coordinates: '59.9205, 10.5645' },
    'asker-sentrum': { zone: 'MODERNE', coordinates: '59.8331, 10.4363' },
    'slemmestad': { zone: 'MODERNE', coordinates: '59.7797, 10.4963' },
    'heggedal': { zone: 'MODERNE', coordinates: '59.7891, 10.4385' },
    'holmen': { zone: 'MODERNE', coordinates: '59.8540, 10.4883' },
    'vollen': { zone: 'MODERNE', coordinates: '59.8091, 10.4828' },
    'dikemark': { zone: 'MODERNE', coordinates: '59.8142, 10.3807' },
    // Romerike
    'lillestrom': { zone: 'VEKST', coordinates: '59.9560, 11.0494' },
    'strommen': { zone: 'VEKST', coordinates: '59.9472, 11.0042' },
    'lorenskog': { zone: 'VEKST', coordinates: '59.9288, 10.9572' },
    'fjellhamar': { zone: 'VEKST', coordinates: '59.9366, 10.9859' },
    'skjetten': { zone: 'VEKST', coordinates: '59.9599, 11.0000' },
    'skedsmo': { zone: 'VEKST', coordinates: '59.9984, 11.0425' },
    'jessheim': { zone: 'VEKST', coordinates: '60.1417, 11.1732' },
    'klofta': { zone: 'VEKST', coordinates: '60.0763, 11.1396' },
    'kjeller': { zone: 'VEKST', coordinates: '59.9774, 11.0416' },
    'ralingen': { zone: 'VEKST', coordinates: '59.9329, 11.0772' },
    // Follo
    'ski': { zone: 'VEKST', coordinates: '59.7196, 10.8357' },
    'kolbotn': { zone: 'MODERNE', coordinates: '59.8115, 10.8037' },
    'oppegard': { zone: 'MODERNE', coordinates: '59.7912, 10.7963' },
    'langhus': { zone: 'MODERNE', coordinates: '59.7483, 10.8358' },
    'as': { zone: 'VEKST', coordinates: '59.6631, 10.7946' },
    'drobak': { zone: 'HISTORISK', coordinates: '59.6618, 10.6300' },
    'nesoddtangen': { zone: 'MODERNE', coordinates: '59.8687, 10.6558' },
    'vinterbro': { zone: 'MODERNE', coordinates: '59.7424, 10.7497' },
    'vestby': { zone: 'VEKST', coordinates: '59.6015, 10.7488' },
    'son': { zone: 'HISTORISK', coordinates: '59.5222, 10.6865' },
    'greverud': { zone: 'MODERNE', coordinates: '59.7937, 10.7936' },
    'oslo': { zone: 'HISTORISK', coordinates: '59.9139, 10.7522' }
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
    },
];

// Mapping av klargjorte hero-bilder til tjenester
const serviceImageMap: Record<string, string> = {
  "vindusservice": "/images/hero/service-vindusservice-vedlikehold-90grader.webp",
  "kjerneboring": "/images/hero/service-kjerneboring-betong-presisjon-90grader.webp",
  "tomrer": "/images/hero/tomrerarbeider-service-tomrerarbeid-konstruksjon-90grader.webp",
  "restaurering": "/images/hero/restaurering-90grader.webp",
  "tak-fasade": "/images/hero/tak-og-fasadearbeid-90grader.webp",
  "nybygg-rehab": "/images/hero/nybygg-rehab-90grader.webp"
};

interface LocalFAQ {
    q: string;
    a: string;
}

interface ServiceZoneData {
    hook: string;
    usp: string;
    faq: LocalFAQ[];
    slug: string;
}

export const zoneServiceData: Record<Zone, Record<string, ServiceZoneData>> = {
  HISTORISK: {
    vindusservice: {
      hook: "Spesialister på vindusrestaurering i Oslos klassiske bygårder. Vi balanserer antikvariske krav med moderne bokomfort.",
      usp: "Eksperter på linoljekitt, originale profiler og lyddemping i tett bybebyggelse.",
      faq: [
        { q: "Kreves det godkjenning fra Byantikvaren for vindusreparasjon?", a: "For bygg på Gule Liste er det ofte krav om antikvarisk korrekt utførelse. Vi håndterer dialogen og sikrer korrekt dokumentasjon." },
        { q: "Kan gamle vinduer gjøres energieffektive?", a: "Ja, ved bruk av tynne isolerglass eller varevinduer kan vi opprettholde det estetiske uttrykket samtidig som vi senker U-verdien betraktelig." },
        { q: "Bruker dere originale materialer?", a: "Vi benytter kjerneved av furu og tradisjonelle materialer som sikrer at vinduene tåler 100 nye år." }
      ],
      slug: "restaurering-oslo"
    },
    kjerneboring: {
      hook: "Vibrasjonsfri kjerneboring for skånsom gjennomføring i historisk mur and sårbare fundamenter.",
      usp: "Presisjonsboring i murgårder uten risiko for sprekkdannelser i original puss.",
      faq: [
        { q: "Er kjerneboring trygt i gamle murgårder?", a: "Ja, vår metode er vibrasjonsfri, noe som er kritisk for å unngå rystelser i eldre teglsteinskonstruksjoner." },
        { q: "Hvordan håndterer dere støv i bebodde leiligheter?", a: "Vi benytter 100% støvfritt utstyr med vannsuging som beskytter både interiør og konstruksjon." },
        { q: "Kan dere bore i tykke grunnmurer av naturstein?", a: "Ja, we have spesialutstyr som takler alt fra granitt til kompakt teglstein i Oslos eldste bygg." }
      ],
      slug: "kjerneboring-teknikk"
    },
    tomrer: {
      hook: "Håndverksmessig nøyaktighet for rehabilitering av klassiske leiligheter og bygårder.",
      usp: "Gjenskaping av originale lister, stukkatur-overganger og historiske tredetaljer.",
      faq: [
        { q: "Kan dere kopiere originale lister and profiler?", a: "Ja, vi spesialbestiller eller freser kopier av eksisterende listverk for et sømløst historisk uttrykk." },
        { q: "Hva er fordelen med å bruke tømrer med restaureringserfaring?", a: "Eldre bygg krever forståelse for skjeve vinkler and pustende konstruksjoner – vi bygger på byggets premisser." },
        { q: "Utfører dere totalrehabilitering av leiligheter?", a: "Ja, vi koordinerer alt tømrerarbeid fra fjerning av stubbloftsleire til ferdigstillelse." }
      ],
      slug: "restaurering-oslo"
    },
    restaurering: {
      hook: "Vi gir verneverdige bygg nytt liv med respekt for tradisjon and arkitektonisk verdi.",
      usp: "Sertifisert utførelse iht. antikvariske retningslinjer and fokus på materialkvalitet.",
      faq: [
        { q: "Hva betyr det at et bygg står på Gule Liste?", a: "Det betyr at bygget har høy kulturminneverdi. Alle endringer skal meldes and ofte utføres med spesifikke metoder vi er eksperter på." },
        { q: "Er restaurering dyrere enn utskifting?", a: "Investering i restaurering bevarer byggets unike verdi and materialkvalitet som ofte er overlegen moderne alternativer." },
        { q: "Samarbeider dere med Byantikvaren?", a: "Ja, vi har tett dialog med relevante instanser for å sikre at alle krav blir tilfredsstilt i prosjektet." }
      ],
      slug: "restaurering-oslo"
    },
    'tak-fasade': {
      hook: "Bevaring av Oslos karakteristiske fasader. Vi utfører alt fra sinkarbeid til pussrehabilitering.",
      usp: "Eksperter på historisk fasadedekor, kobberarbeid and teknisk vedlikehold av bygårder.",
      faq: [
        { q: "Hvordan beskytter dere fasaden mot byforurensning?", a: "Vi benytter pustende puss-systemer and overflatebehandling som er utviklet for å tåle urbane miljøer." },
        { q: "Kan dere reparere skader i murdekor and ornamenter?", a: "Ja, våre murere har spesialkompetanse på å trekke opp originale profiler and støpe kopier av dekor." },
        { q: "Utfører dere taksjekk på eldre bygårder?", a: "Ja, vi utfører tilstandsanalyser and utbedringer av alt fra skifer-tak til takrenner i sink." }
      ],
      slug: "fasade-klimasikring"
    },
    'nybygg-rehab': {
      hook: "Modernisering av klassiske boliger med fokus på teknisk oppgradering and historisk sjel.",
      usp: "Totalintegrering av moderne VVS and EL i eldre, komplekse konstruksjoner.",
      faq: [
        { q: "Hva er de største utfordringene ved rehabilitering av bygårder?", a: "Skjulte feil i gamle konstruksjoner and behovet for brann- and lydisolering mellom etasjer er våre spesialområder." },
        { q: "Kan man flytte vegger i gamle leiligheter?", a: "Det krever teknisk beregning av bæring. Vi utfører statiske vurderinger and sørger for godkjent utførelse." },
        { q: "Hvordan sikrer dere moderne komfort i gamle hus?", a: "Gjennom intelligent isolering, balansert ventilasjon and moderne planløsninger som respekterer det originale." }
      ],
      slug: "restaurering-oslo"
    }
  },
  MODERNE: {
    vindusservice: {
      hook: "Fremtidens vindusløsninger for moderne eneboliger. Vi optimaliserer for lysinnslipp and ENØK.",
      usp: "Spesialister på trelags glass, skjulte karmer and minimalistisk arkitektur.",
      faq: [
        { q: "Hva er fordelen med trelags glass i moderne hus?", a: "Det gir ekstremt lav U-verdi, eliminerer kaldras and reduserer energikostnader til et minimum." },
        { q: "Kan dere levere vinduer med integrert solskjerming?", a: "Ja, vi tilbyr løsninger med innebygde screens eller solreflekterende glass som hindrer overoppheting." },
        { q: "Hvordan vedlikeholdes moderne aluminiumsvinduer?", a: "Disse er praktisk talt vedlikeholdsfrie, and krever kun enkel vask for å beholde sitt estetiske uttrykk." }
      ],
      slug: "fasade-klimasikring"
    },
    kjerneboring: {
      hook: "Støvfri kjerneboring i moderne boliger med fokus på finish and teknisk integrasjon.",
      usp: "Perfekte gjennomføringer for ventilasjon and rør i moderne betong- and trekonstruksjoner.",
      faq: [
        { q: "Can dere bore in vannbåren varme?", a: "Vi benytter termografering for å lokalisere rør før vi borer, slik at vi unngår skader på varmesystemer." },
        { q: "Hvor raskt can dere rykke ut i Asker/Bærum?", a: "Vi har ofte kapasitet for mindre oppdrag innen 24-48 timer for å holde fremdriften i ditt prosjekt." },
        { q: "Blir det mye søl ved boring innendørs?", a: "Nei, vi bruker lukkede vannsystemer som suger opp alt slam umiddelbart, slik at rommet forblir tørt." }
      ],
      slug: "kjerneboring-teknikk"
    },
    tomrer: {
      hook: "Presisjonsarbeid for arkitekttegnede hjem. Vi bygger med millimeterpresisjon.",
      usp: "Høy teknisk standard and fokus på listefrie overganger and moderne detaljering.",
      faq: [
        { q: "Utfører dere listefrie løsninger?", a: "Ja, vi er eksperter på gipslister and skjulte overganger som kjennetegner moderne arkitektur." },
        { q: "Kan dere bygge spesialtilpassede uteplasser and terrasser?", a: "Vi designer and bygger eksklusive uterom som sømløst integreres med boligens arkitektur." },
        { q: "Bruker dere miljøvennlige materialer?", a: "Vi prioriterer alltid bærekraftige materialvalg and dokumentert trevirke i våre prosjekter." }
      ],
      slug: "fasade-klimasikring"
    },
    restaurering: {
      hook: "Vedlikehold and oppgradering av moderne arkitektur. Vi bevarer det minimalistiske uttrykket.",
      usp: "Spesialkompetanse på vedlikeholdsfrie materialer and moderne fasadesystemer.",
      faq: [
        { q: "Kan en moderne bolig restaureres?", a: "Ja, mange moderne materialer krever spesifikk rens and behandling for å opprettholde sin funksjon and estetikk." },
        { q: "Hvordan oppgradere en 80-talls bolig til dagens standard?", a: "Gjennom fasadeisolering, bytte av vinduer and oppgradering av tekniske anlegg skaper vi en 'ny' bolig." },
        { q: "Bruker dere originale systemer ved reparasjon?", a: "Vi samarbeider med ledende systemleverandører for å sikre korrekt deler til fasader and tak." }
      ],
      slug: "fasade-klimasikring"
    },
    'tak-fasade': {
      hook: "Klimasikring av fasader i Asker and Bærum. Vi bygger for å tåle økt nedbør and nordisk kystklima.",
      usp: "Løsninger for flate tak, skjult drenering and vedlikeholdsfrie kledninger.",
      faq: [
        { q: "Hvilken kledning krever minst vedlikehold?", a: "Materialer som Kebony, Termofuru eller fibersement er ideelle for moderne hus med lavt vedlikeholdsbehov." },
        { q: "Hvordan fungerer skjult drenering på flate tak?", a: "Vi bygger opp fall and integrerer sluksystemer som leder vannet trygt bort inne i konstruksjonen." },
        { q: "Tåler moderne fasader ekstremvær?", a: "Våre systemer er testet and montert for å tåle økt vindbelastning and ekstremnedbør i Oslo-regionen." }
      ],
      slug: "fasade-klimasikring"
    },
    'nybygg-rehab': {
      hook: "Totaloppgradering av boliger til moderne standard. Vi øker verdien and bokomforten.",
      usp: "ENØK-fokusert rehabilitering som reduserer strømutgifter and bedrer inneklima.",
      faq: [
        { q: "Hvor mye kan man spare på ENØK-oppgradering?", a: "Ved korrekt etterisolering and vindusbytte kan oppvarmingsbehovet reduseres med inntil 50%." },
        { q: "Hvor lang tid tar en totalrehabilitering?", a: "Det avhenger av omfanget, men vi utarbeider alltid en bindende tidsplan for våre prosjekter." },
        { q: "Kan dere hjelpe med planløsningen?", a: "Ja, våre tømrere har lang erfaring med å åpne opp rom and skape moderne, åpne løsninger." }
      ],
      slug: "fasade-klimasikring"
    }
  },
  VEKST: {
    vindusservice: {
      hook: "Effektiv leveranse and montering av vinduer til nybygg and næringseiendom i vekstområder.",
      usp: "Industriell kapasitet and fokus på HMS and dokumentert kvalitet.",
      faq: [
        { q: "Leverer dere vinduer til store prosjekter?", a: "Ja, vi har logistikk and mannskap til å håndtere alt fra borettslag til kontorbygg." },
        { q: "Hva slags garantier følger med deres vinduer?", a: "Vi følger norske standarder for produktgaranti and utførelse, noe som sikrer et trygt kjøp." },
        { q: "Kan dere bistå ved utskifting i borettslag?", a: "Vi har egne rutiner for effektiv utskifting i bebodde leiligheter med minimal forstyrrelse." }
      ],
      slug: "kjerneboring-teknikk"
    },
    kjerneboring: {
      hook: "Presisjonsboring i betong for nybygg and industri. Vi borer der andre må gi opp.",
      usp: "Høy kapasitet på kort varsel and millimeterpresisjon i herdet betong.",
      faq: [
        { q: "Hvor store hull kan dere bore?", a: "Vi utfører kjerneboring fra Ø10mm til Ø1000mm i alle typer betong and naturstein." },
        { q: "Har dere kapasitet for hasteoppdrag?", a: "Ja, i vekstområder som Lillestrøm and Jessheim har vi ofte team tilgjengelig for rask utrykning." },
        { q: "Borer dere i armert betong?", a: "Våre diamantmaskiner skjærer gjennom alt av armering uten problemer." }
      ],
      slug: "kjerneboring-teknikk"
    },
    tomrer: {
      hook: "Teknisk rammeverk and tømrerarbeid for moderne boligfelt and næringsbygg.",
      usp: "Effektiv fremdrift and teknisk utførelse i henhold til TEK17.",
      faq: [
        { q: "Følger dere TEK17-kravene strengt?", a: "Alltid. Vi dokumenterer alle våre byggemetoder for å sikre full godkjenning ved ferdigstillelse." },
        { q: "Kan dere ta på dere store underentrepriser?", a: "Ja, vi har erfaring som underentreprenør for store utbyggere i regionen." },
        { q: "Leverer dere ferdige moduler?", a: "Vi utfører både plasstøpt arbeid and montering av prefabrikkerte elementer for raskere fremdrift." }
      ],
      slug: "kjerneboring-teknikk"
    },
    restaurering: {
      hook: "Rehabilitering and transformasjon av næringseiendom. Vi skaper moderne verdier i eldre bygg.",
      usp: "Spesialister på teknisk oppgradering av industri- and kontorbygg.",
      faq: [
        { q: "Kan dere transformere lagerbygg til kontorer?", a: "Dette er et av våre satsingsområder. Vi håndterer hele prosessen fra riving til teknisk oppbygging." },
        { q: "Hvordan bevares det industrielle uttrykket?", a: "Vi kombinerer rå betong and stål med moderne overflater for et moderne industridesign." },
        { q: "Hva er kostnaden ved transformasjon?", a: "Ofte er det rimeligere and mer bærekraftig enn å bygge nytt. Vi gir deg et detaljert estimat." }
      ],
      slug: "kjerneboring-teknikk"
    },
    'tak-fasade': {
      hook: "Kostnadseffektive tak- and fasadeløsninger for store bygg. Vi sikrer verdiene dine.",
      usp: "Rask montasje av sandwich-paneler and industritak med lang levetid.",
      faq: [
        { q: "Hvor lang levetid har industritak?", a: "Med riktig materialvalg and vedlikehold kan et moderne industritak vare i 30-50 år." },
        { q: "Utfører dere fasadevask and vedlikehold?", a: "Ja, vi tilbyr serviceavtaler for næringsbygg som sikrer fasadens levetid." },
        { q: "Er deres løsninger brannsikre?", a: "Vi bruker kun godkjente brannhemmende materialer i alle våre fasadesystemer." }
      ],
      slug: "fasade-klimasikring"
    },
    'nybygg-rehab': {
      hook: "Teknisk rehabilitering av infrastruktur and næringsbygg in ekspansjonsområder.",
      usp: "Minimerer nedetid ved rehabilitering av aktive næringslokaler.",
      faq: [
        { q: "Kan dere jobbe utenom kontortid?", a: "Ja, vi tilpasser oss din drift for å minimere forstyrrelser under rehabiliteringsperioden." },
        { q: "Hvilken dokumentasjon leverer dere?", a: "Full FDV-dokumentasjon leveres digitalt ved prosjektslutt for enkel FDV-styring." },
        { q: "Utbedrer dere fuktskader i næringsbygg?", a: "Ja, vi utfører fuktanalyse and full sanering and gjenoppbygging etter lekkasjer." }
      ],
      slug: "kjerneboring-teknikk"
    }
  }
};

// 2. Henter unikt innhold basert på Sone-logikk
export function getServiceContent(serviceId: string, cityId: string) {
    const cityName = cityNames[cityId];
    const neighborhood = neighborhoodMatrix[cityId] || { zone: 'MODERNE' as Zone, coordinates: '59.9139, 10.7522' };
    const baseService = services.find(s => s.id === serviceId);

    if (!baseService) return null;

    const zoneData = zoneServiceData[neighborhood.zone][serviceId];
    
    if (!zoneData) return null;

    return {
        baseService,
        cityName,
        zone: neighborhood.zone,
        hook: zoneData.hook,
        usp: zoneData.usp,
        faq: zoneData.faq,
        slug: zoneData.slug,
        coordinates: neighborhood.coordinates,
        heroImage: serviceImageMap[serviceId] // Dynamisk bilde-ruting
    };
}

export const projects: Project[] = [
  {
    id: "radisson-red-oslo-okern",
    title: "Radisson RED Oslo Økern",
    location: "Økern",
    cityId: "alna", 
    service: "kjerneboring",
    zone: "VEKST",
    tags: ["Hotell", "Teknisk Boring"],
    description: "Kompleks kjerneboring for et av Oslos mest moderne hotellbygg.",
    image: "/images/hero/service-kjerneboring-betong-presisjon-90grader.webp"
  },
  {
    id: "fyrstikkbakken-14-bryn",
    title: "Fyrstikkbakken 14",
    location: "Bryn",
    cityId: "gamle-oslo",
    service: "rehabilitering",
    zone: "VEKST",
    tags: ["Boligutvikling", "Massivtre"],
    description: "Innovative løsninger for et banebrytende boligprosjekt på Bryn."
  },
  {
    id: "sameiet-wilhelms-gate-4",
    title: "Sameiet Wilhelms Gate 4",
    location: "Bislett",
    cityId: "st-hanshaugen",
    service: "restaurering",
    zone: "HISTORISK",
    tags: ["Bygård", "Antikvarisk"],
    description: "Nøyaktig restaurering av historisk fasade og vindusdetaljer."
  },
  {
    id: "construction-city-oslo",
    title: "Construction City",
    location: "Ulven",
    cityId: "bjerke",
    service: "rehabilitering",
    zone: "VEKST",
    tags: ["Næringsbygg", "Infrastruktur"],
    description: "Leveranse av spesialiserte håndverkstjenester til Norges nye kraftsenter for bygg og anlegg.",
    image: "/images/hero/project-construction-city-ulven-90grader.webp"
  },
  {
    id: "det-nye-sykehuset-i-drammen",
    title: "Det nye sykehuset i Drammen",
    location: "Drammen",
    cityId: "drammen",
    service: "kjerneboring",
    zone: "VEKST",
    tags: ["Offentlig", "Helsebygg"],
    description: "Kritiske gjennomføringer og teknisk boring i et av Viken-regionens største offentlige prosjekter.",
    image: "/images/hero/service-kjerneboring-betong-presisjon-90grader.webp"
  },
  {
    id: "majorstuen-residence",
    title: "Majorstuen Residence",
    location: "Majorstuen",
    cityId: "majorstuen",
    service: "vindusservice",
    zone: "HISTORISK",
    tags: ["Luksusbolig", "Restaurering"],
    description: "Oppgradering av vindussystemer i eksklusive bygårdsleiligheter."
  },
  {
    id: "karenslyst-alle-modernisering",
    title: "Karenslyst Allé Modernisering",
    location: "Skøyen",
    cityId: "ullern",
    service: "tak-fasade",
    zone: "MODERNE",
    tags: ["Næring", "Fasade"],
    description: "Klimasikring og fasadeoppgradering av kontorbygg på Skøyen."
  },
  {
    id: "st-hanshaugen-park-apartments",
    title: "St. Hanshaugen Park Apartments",
    location: "St. Hanshaugen",
    cityId: "st-hanshaugen",
    service: "tomrer",
    zone: "HISTORISK",
    tags: ["Bolig", "Detaljarbeid"],
    description: "Innvendig tømrerarbeid med fokus på klassiske detaljer og moderne komfort."
  },
  {
    id: "fornebu-brygge-teknisk",
    title: "Fornebu Brygge Teknisk",
    location: "Fornebu",
    cityId: "fornebu",
    service: "kjerneboring",
    zone: "MODERNE",
    tags: ["Infrastruktur", "Teknisk"],
    description: "Presisjonsboring for tekniske anlegg i nytt næringskompleks."
  },
  {
    id: "lillestrom-stasjon-rehab",
    title: "Lillestrøm Stasjon Rehab",
    location: "Lillestrøm",
    cityId: "lillestrom",
    service: "restaurering",
    zone: "VEKST",
    tags: ["Knutepunkt", "Vedlikehold"],
    description: "Spesialisert vedlikehold og restaurering av betongkonstruksjoner."
  },
  {
    id: "sandvika-elv-terrasse",
    title: "Sandvika Elv Terrasse",
    location: "Sandvika",
    cityId: "sandvika",
    service: "nybygg-rehab",
    zone: "VEKST",
    tags: ["Bolig", "Totalentreprise"],
    description: "Totalrehabilitering av leilighetsbygg med fokus på ENØK."
  },
  {
    id: "ski-storsenter-utvidelse",
    title: "Ski Storsenter Utvidelse",
    location: "Ski",
    cityId: "ski",
    service: "kjerneboring",
    zone: "VEKST",
    tags: ["Handel", "Teknisk"],
    description: "Kjerneboring for nye tekniske føringer under utvidelsen."
  },
  {
    id: "drobak-havnegata-tre",
    title: "Drøbak Havnegata Tre",
    location: "Drøbak",
    cityId: "drobak",
    service: "tomrer",
    zone: "HISTORISK",
    tags: ["Trehus", "Tradisjon"],
    description: "Håndverksmessig reparasjon av historisk trehusbebyggelse."
  },
  {
    id: "lysaker-park-fasade",
    title: "Lysaker Park Fasade",
    location: "Lysaker",
    cityId: "lysaker",
    service: "tak-fasade",
    zone: "VEKST",
    tags: ["Næring", "Klimasikring"],
    description: "Montering av moderne fasadesystemer på kontorbygg."
  },
  {
    id: "jessheim-hageby",
    title: "Jessheim Hageby",
    location: "Jessheim",
    cityId: "jessheim",
    service: "nybygg-rehab",
    zone: "VEKST",
    tags: ["Boligfelt", "Modernisering"],
    description: "Bistand med teknisk tømrerarbeid i nytt boligfelt."
  },
  {
    id: "kolbotn-torg-service",
    title: "Kolbotn Torg Service",
    location: "Kolbotn",
    cityId: "kolbotn",
    service: "vindusservice",
    zone: "MODERNE",
    tags: ["Næring", "Vedlikehold"],
    description: "Rutineservice og justering av alle inngangspartier og vinduer."
  },
  {
    id: "bekkestua-villa-moderne",
    title: "Bekkestua Villa Moderne",
    location: "Bekkestua",
    cityId: "bekkestua",
    service: "tomrer",
    zone: "MODERNE",
    tags: ["Enebolig", "Arkitektur"],
    description: "Tømrerarbeid for arkitekttegnet bolig med listefrie løsninger."
  },
  {
    id: "grunerlokka-loft-transform",
    title: "Grünerløkka Loft Transform",
    location: "Grünerløkka",
    cityId: "grunerlokka",
    service: "nybygg-rehab",
    zone: "HISTORISK",
    tags: ["Loft", "Bygård"],
    description: "Kompleks loftutbygging i klassisk bygård."
  },
  {
    id: "stabekk-torg-fasade",
    title: "Stabekk Torg Fasade",
    location: "Stabekk",
    cityId: "stabekk",
    service: "tak-fasade",
    zone: "MODERNE",
    tags: ["Torg", "Fasade"],
    description: "Rehabilitering av fasader mot torget i Stabekk."
  },
  {
    id: "ullern-utsikt-vindu",
    title: "Ullern Utsikt Vindu",
    location: "Ullern",
    cityId: "ullern",
    service: "vindusservice",
    zone: "MODERNE",
    tags: ["Bolig", "Utsikt"],
    description: "Service på store panaromavinduer og skyvedører."
  },
  {
    id: "asker-panorama-nybygg",
    title: "Asker Panorama Nybygg",
    location: "Asker",
    cityId: "asker-sentrum",
    service: "nybygg-rehab",
    zone: "MODERNE",
    tags: ["Næring", "Totalentreprise"],
    description: "Teknisk rehabilitering av fellesarealer."
  },
  {
    id: "sagene-moll-restaurering",
    title: "Sagene Mølle Restaurering",
    location: "Sagene",
    cityId: "sagene",
    service: "restaurering",
    zone: "HISTORISK",
    tags: ["Industriarv", "Teglstein"],
    description: "Skånsom restaurering av historiske industrifasader."
  }
];
// Final validation completed

