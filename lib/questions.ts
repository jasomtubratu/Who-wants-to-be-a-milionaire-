import { Question } from "./types";

export const questions: Question[] = [
  {
    id: "q1",
    text: "Čo označuje pojem 'stavovce'?",
    answers: [
      { text: "Živočíchy bez chrbtice", isCorrect: false },
      { text: "Živočíchy bez hlavy", isCorrect: false },
      { text: "Živočíchy s chrbticou", isCorrect: true },
      { text: "Živočíchy bez končatín", isCorrect: false }
    ],
    value: 100,
    category: "Biológia",
    explanation: 
      "Stavovce sú živočíchy, ktoré majú chrbticu – teda kostru v chrbte zloženú z malých častí nazývaných stavce. Chrbtica chráni miechu, ktorá vedie signály z mozgu do zvyšku tela, a zároveň poskytuje oporu, aby sa svaly mohli prichytiť a zviera sa mohlo hýbať. Príklady stavovcov sú ryby (žijú vo vode), obojživelníky (ako žaby – začínajú v vode ako žubrienky a potom žijú na súši), plazy (had, korytnačka), vtáky (sokoly, husi) a cicavce (pes, mačka, človek). Bez chrbtice by telo nemalo vnútornú kostru, iba vonkajšiu (ako u hmyzu), a to už nie je stavovec. Stavovce sú veľmi rozmanité, žijú vo vode, na súši aj vo vzduchu. ",
    hostNotes: 
      "Ľudia, ktorí nikdy nepočuli o stavovcoch, si môžu pomýliť výraz s bezstavovcami (živočíchy bez chrbtice). Možnosť A – 'živočíchy bez chrbtice' je pravý opak. B a D hovoria o chýbaní iných častí tela (hlava, končatiny), čo nesúvisí s definíciou stavovcov. C – 'živočíchy s chrbticou' je správna odpoveď, pretože hovoríme o zvieratách, ktoré majú vnútornú kostru v chrbte."
  },
  {
    id: "q2",
    text: "Ktorá z nasledujúcich tried patrí medzi stavovce?",
    answers: [
      { text: "Motýle", isCorrect: false },
      { text: "Pavúky", isCorrect: false },
      { text: "Ryby", isCorrect: true },
      { text: "Hmyz", isCorrect: false }
    ],
    value: 200,
    category: "Biológia",
    explanation: 
      "Ryby sú stavovce, pretože majú chrbticu zloženú z chrupkových alebo kostnatých stavcov. Žijú vo vode a dýchajú pomocou žiabier, ktoré prenikajú kyslík z vody do krvi. Ich telo je často pokryté šupinami. Existujú dva hlavné typy rýb: kostnaté (mačka, kapor) a chrupkovité (napr. žraloky a raje). Motýle, pavúky aj hmyz patria medzi bezstavovce – nemajú chrbticu, ale majú vonkajšiu kostru (exoskelet).",
    hostNotes:
      "Ak si niekto myslí, že stavovce sú napríklad hmyz alebo pavúky, je to nesprávne, lebo tieto skupiny nemajú vnútornú chrbticu. Motýle a hmyz majú vonkajšiu kostru z chitínu. Pavúky tiež. Ryby majú vnútornú kostru, a preto sú správnou odpoveďou."
  },
  {
    id: "q3",
    text: "Čo je základnou charakteristikou drsnokožcov?",
    answers: [
      { text: "Majú krídla", isCorrect: false },
      { text: "Ich telo je pokryté srsťou", isCorrect: false },
      { text: "Ich telesná kostra je chrupkovitá", isCorrect: true },
      { text: "Majú úplnú srdcovú prepážku", isCorrect: false }
    ],
    value: 300,
    category: "Biológia",
    explanation: 
      "Drsnokožce sú ryby, ktorých kostra nie je z kostného tkaniva, ale z pružnej chrupky. Medzi ne patria napríklad žraloky a raje. Táto chrupkovitá kostra je ľahšia a pružnejšia, čo im pomáha pohybovať sa rýchlejšie a obratnejšie vo vode. Ich koža je pokrytá malými zrnami zvanými dentikly, ktoré vyzerajú ako veľmi malé zuby a znižujú odpor vody. Krídla a srsť nemajú nič spoločné so základnou vlastnosťou drsnokožcov. Úplná srdcová prepážka je skôr u cicavcov; drsnokožce majú srdce so dvomi komorami a jednou predsieňou.",
    hostNotes:
      "A – krídla – charakteristika vtákov, nie drsnokožcov. B – srsť – znak cicavcov. D – úplná srdcová prepážka – cicavce majú srdce so štyrmi komorami. C – chrupkovitá kostra – správna odpoveď."
  },
  {
    id: "q4",
    text: "Aký typ dýchacej sústavy majú ryby?",
    answers: [
      { text: "Pľúca", isCorrect: false },
      { text: "Respirátor v pokožke", isCorrect: false },
      { text: "Žiabre", isCorrect: true },
      { text: "Vzduchové vaky", isCorrect: false }
    ],
    value: 500,
    category: "Biológia",
    explanation: 
      "Ryby dýchajú pomocou žiabier – štruktúr bohatých na cievy, kde prebieha výmena kyslíka a oxidu uhličitého medzi vodou a krvou. Voda vteká ústami ryby, prechádza žiabrami a odchádza von. Niektoré ryby, ako bahníky, majú aj prídavné vzduchové vaky, vďaka ktorým vedia dýchať vzduch zo vzduchu, keď je voda chudobná na kyslík. Pľúca majú cicavce a vtáky, respirácia pokožkou je u obojživelníkov a vzduchové vaky sú skôr rezervoáre vzduchu u vtákov. ",
    hostNotes:
      "Pľúca – nie pre ryby; to majú plazy, vtáky, cicavce. Respirácia pokožkou je u obojživelníkov, nie u rýb. Vzduchové vaky sú u vtákov ako pomôcka pri lete, nie pri klasickom dýchaní rýb. Žiabre – správna odpoveď."
  },
  {
    id: "q5",
    text: "Ktorá z nasledujúcich skupín patrí medzi obojživelníky?",
    answers: [
      { text: "Had", isCorrect: false },
      { text: "Korytnačka", isCorrect: false },
      { text: "Žaba", isCorrect: true },
      { text: "Sýkorka", isCorrect: false }
    ],
    value: 1000,
    category: "Biológia",
    explanation: 
      "Obojživelníky sú živočíchy, ktoré väčšinu života trávia čiastočne vo vode a čiastočne na súši. Žaby začínajú život ako larvy (žubrienky) plávajúce vo vode, dýchajú žiabrami, a neskôr prechádzajú metamorfózou na dospelé žaby, ktoré dýchajú pľúcami a pokožkou. Ich pokožka je vlhká, aby mohli prijímať kyslík aj cez ňu. Hady a korytnačky sú plazy, sýkorka je vták. ",
    hostNotes:
      "Had a korytnačka – obe sú plazy, nie obojživelníky. Sýkorka – vták. Žaba – typický príklad obojživelníka, žije vo vode aj na suchu a má metamorfózu."
  },
  {
    id: "q6",
    text: "Ktorá črta neplatí pre plazy?",
    answers: [
      { text: "Sú ektotermné", isCorrect: false },
      { text: "Majú šupiny", isCorrect: false },
      { text: "Majú krídla", isCorrect: true },
      { text: "Rozmnožovanie prebieha priamym vývinom", isCorrect: false }
    ],
    value: 2000,
    category: "Biológia",
    explanation: 
      "Plazy sú ektotermné (ich telesná teplota závisí od okolia), majú telo pokryté šupinami, ktoré chránia ich kožu a znižujú odpar vody. Vajcia sa zväčša vyvíjajú priamo v škrupine a po vyliahnutí sa rodí malý plaz, bez larválneho štádia. Krídla sú špecifické pre vtáky, nie pre plazy. Plazy nikdy nelietajú – namiesto toho sa často plazia alebo liezu.",
    hostNotes:
      "A, B a D – všetky tieto vlastnosti platia pre plazy. Krídla – platia len pre vtáky, nie pre plazy. Preto je C správna odpoveď."
  },
  {
    id: "q7",
    text: "Aký význam majú vzdušné vaky u vtákov?",
    answers: [
      { text: "Slúžia na plávanie", isCorrect: false },
      { text: "Produkujú perie", isCorrect: false },
      { text: "Pomáhajú pri dýchaní a znižujú hmotnosť", isCorrect: true },
      { text: "Umožňujú termoreguláciu krvi", isCorrect: false }
    ],
    value: 4000,
    category: "Biológia",
    explanation: 
      "Vzdušné vaky sú tenkostenné vzduchom naplnené priestory spojené s pľúcami, ktoré zabezpečujú neustály prietok vzduchu cez pľúca aj počas výdychu. Vďaka tomu vtáka dýchanie vyjde účinnejšie, keď lieta alebo keď sa rýchlo hýbe. Navyše znižujú celkovú hmotnosť vtáka, pretože v kostiach a tele majú viac vzduchu než tkaniva, čo uľahčuje vzlietnutie. Produkovanie peria zabezpečujú iné žľazy a termoregulácia krvi funguje vďaka prekrveniu. Vzdušné vaky teda neslúžia priamo na plávanie ani na produkciu peria.",
    hostNotes:
      "A – plávanie je u vtákov zaobstarané iným spôsobom; B – perie vyrábajú mazové žľazy, nie vzduchové vaky; D – termoregulácia krvi súvisí skôr s prítokom krvi do rôznych častí tela, nie so vzdušnými vakmi. C – správna odpoveď, lebo vzdušné vaky uľahčujú dýchanie a letu znižujú hmotnosť."
  },
  {
    id: "q8",
    text: "Čo je charakteristické pre cicavce?",
    answers: [
      { text: "Kladú vajcia", isCorrect: false },
      { text: "Majú šupiny", isCorrect: false },
      { text: "Kŕmia mláďatá mliekom", isCorrect: true },
      { text: "Majú lareválne štádiá", isCorrect: false }
    ],
    value: 8000,
    category: "Biológia",
    explanation: 
      "Cicavce majú mliečne žľazy, ktoré produkujú mlieko pre mláďatá. Mláďatá cicajú mlieko priamo od matky. Väčšina cicavcov má tiež srsť na tele a vyvíja plod v maternici (vyskytujú sa placentálne cicavce), hoci niektoré vajcorodé cicavce (napr. klokanec) kladú vajíčka, potom sa mláďatá líhnú a cicajú mlieko. Šupiny majú plazy a ryby, larvy sú u obojživelníkov. ",
    hostNotes:
      "A – platí len pre vajcorodce (napr. klokanec), ale u väčšiny cicavcov sa to nedeje; B – šupiny majú plazy a niektoré ryby; D – larvy sú charakteristické pre obojživelníky. C – správna odpoveď, pretože aj vajcorodce aj placentálne cicavce kŕmia mláďatá mliekom."
  },
  {
    id: "q9",
    text: "Ktorá stavovcová trieda zahŕňa žraloky a raje?",
    answers: [
      { text: "Ryby kostnaté", isCorrect: false },
      { text: "Obojživelníky", isCorrect: false },
      { text: "Drsnokožce", isCorrect: true },
      { text: "Plazy", isCorrect: false }
    ],
    value: 16000,
    category: "Biológia",
    explanation: 
      "Drsnokožce (Chondrichthyes) sú zvláštna skupina stavovcov, ktorej kostra je tvorená chrupkou namiesto kostného tkaniva. Medzi ne patria žraloky, raje a chiméry. Ich telo je pokryté drobnými šupinami zvanými dentikly, ktoré vyzerajú ako malé zuby a pomáhajú im voľne plávať. Ryby kostnaté majú kostnú kostru, obojživelníky žijú časť života vo vode aj na zemi, a plazy sú suchozemské bez chrupkovitej kostry. ",
    hostNotes:
      "A – ryby kostnaté majú kostru z kosti, nie z chrupky; B – obojživelníky zahŕňajú žaby, mloky, nie žraloky; D – plazy sú napríklad hady či korytnačky, nie raje. C – drsnokožce – správne, pretože žraloky a raje majú chrupkovú kostru."
  },
  {
    id: "q10",
    text: "Ktorý orgán zabezpečuje výmenu plynov u plazov?",
    answers: [
      { text: "Žiabrové vaky", isCorrect: false },
      { text: "Kožné póry", isCorrect: false },
      { text: "Pľúca", isCorrect: true },
      { text: "Plynový mechúr", isCorrect: false }
    ],
    value: 32000,
    category: "Biológia",
    explanation: 
      "Plazy dýchajú pomocou pľúc. Ich pľúca majú väčší povrch, aby dokázali absorbovať dostatok kyslíka z ovzdušia. Nepoužívajú žiabre – tie sú u rýb a lariev obojživelníkov. Niektoré žaby (obojživelníky) dokážu dýchať aj pokožkou, ale plazy majú suchú šupinatú pokožku a dýchajú len pľúcami. Plynový mechúr sa nachádza u rýb ako pomoc pri plávaní, nie je to dýchací orgán pre plazy.",
    hostNotes:
      "A – žiabrové vaky – ryby; B – kožná difúzia je typická pre obojživelníky, nie pre plazy; D – plynový mechúr je u rýb kostnatých. C – pľúca – správna odpoveď, pretože plazy dýchajú vzduchom cez pľúca."
  },
  {
    id: "q11",
    text: "Čo zachytáva bočná čiara u rýb?",
    answers: [
      { text: "Chuťové bunky", isCorrect: false },
      { text: "Slepota v tme", isCorrect: false },
      { text: "Zmenu tlaku a prúdenie vody", isCorrect: true },
      { text: "Ultrafialové svetlo", isCorrect: false }
    ],
    value: 64000,
    category: "Biológia",
    explanation: 
      "Bočná čiara je dlhý rad malých otvorov vedúcich do kanálikov naplnených tekutinou, kde sú špeciálne bunky. Tieto bunky dokážu vnímať zmeny tlaku a pohyb vody okolo ryby. Vďaka tomu ryba dokáže spoľahlivo zistiť, kde sa nachádza korisť alebo prekážka, aj keď je voda kalná alebo je noc. Nie je to o chuti, slepote alebo UV svetle – slúži čisto na hmatový pocit vibrácií vo vode.",
    hostNotes:
      "Chuťové bunky – zmysel pre chuť, nie bočná čiara. Slepota v tme – bočná čiara zlepšuje orientáciu v tme, ale neznamená slepotu. Ultrafialové svetlo – nemá to nič spoločné. C – zmenu tlaku a prúdenie vody – správna odpoveď."
  },
  {
    id: "q12",
    text: "Ako sa nazýva vnútorný orgán, ktorý rybám kostnatým pomáha pri nadľahčovaní?",
    answers: [
      { text: "Žiabre", isCorrect: false },
      { text: "Pečeň", isCorrect: false },
      { text: "Plynový mechúr", isCorrect: true },
      { text: "Svalová hmota", isCorrect: false }
    ],
    value: 125000,
    category: "Biológia",
    explanation: 
      "Plynový mechúr je vnútorný vzduchom naplnený vak, ktorý sa nachádza v brušnej oblasti tela kostnatých rýb. Reguluje množstvo plynu (dusíka a kyslíka) vo svojom vnútri, aby ryba mohla stúpať alebo klesať vo vode bez väčšej námahy. Keď chce ryba stúpnuť, viac plynu pridá, a keď chce klesnúť, časť plynu vypustí. Pečeň a svaly na to nemajú mechanizmus, žiabre slúžia len na dýchanie.",
    hostNotes:
      "Žiabre – dýchací orgán, nie nadľahčovací. Pečeň a svalová hmota – sú dôležité pre metabolizmus a pohyb, ale nedokážu nadľahčovať. Plynový mechúr – presne orgán, ktorý pomáha pri nadľahčovaní, preto C."
  },
  {
    id: "q13",
    text: "Ktorá podtrieda vtákov zahŕňa dravce ako sokoly a jastraby?",
    answers: [
      { text: "Bežce", isCorrect: false },
      { text: "Plavce", isCorrect: false },
      { text: "Letce", isCorrect: true },
      { text: "Kŕmidlá", isCorrect: false }
    ],
    value: 250000,
    category: "Biológia",
    explanation: 
      "Letce sú vtáky, ktoré sú schopné letu vďaka dobre vyvinutému dýchaciemu a svalovému systému. Dravce, ako sokoly a jastraby, majú silné hrudné svaly a aerodynamické telo, ktoré im umožňujú loviť korisť za letu. Bežce (napr. pštros) nelietajú, plavce (napr. tučniaky) lietajú pod vodou, a kŕmidlá (napr. vrabec) majú prispôsobený zobák na zbieranie semien alebo hmyzu, ale nie sú typické dravé vtáky.",
    hostNotes:
      "Bežce – nelietajú; plavce – plávajú; kŕmidlá – hľadajú potravu na zemi. C – Letce – správna odpoveď, lebo dravce lietajú a patria do tejto podtriedy."
  },
  {
    id: "q14",
    text: "Čo znamená pohlavný dimorfizmus u žiab?",
    answers: [
      { text: "Samičky sú menšie ako samce", isCorrect: false },
      { text: "Samci majú ostrejšie zuby", isCorrect: false },
      { text: "Samička je väčšia ako samec", isCorrect: true },
      { text: "Neexistuje rozdiel medzi pohlaviami", isCorrect: false }
    ],
    value: 500000,
    category: "Biológia",
    explanation: 
      "Pohlavný dimorfizmus je rozdiel medzi samcami a samicami toho istého druhu. U väčšiny druhov žiab sú samice väčšie, pretože potrebujú priestor na produkciu a uloženie vajíčok. Samce často majú iné znaky, napríklad slabú rukoväť na predných končatinách, ktorá pomáha pri párení, alebo farebné vzory, aby prilákali samice. Povedať, že samičky sú menšie (A) je opak pravdy. Samci nemajú ostrejšie zuby – to nie je typické. Tvrdím, že neexistuje žiadny rozdiel (D), ale v skutočnosti rozdiel je.",
    hostNotes:
      "A – nesprávne, lebo samičky sú zvyčajne väčšie. B – žiabám ostrejšie zuby nerastú; D – dimorfizmus znamená, že rozdiel existuje. C – správna odpoveď."
  },
  {
    id: "q15",
    text: "Ktoré tvrdenie o evolučných vzťahoch medzi stavovcami je správne?",
    answers: [
      { text: "Vtáky sú priamymi potomkami cicavcov", isCorrect: false },
      { text: "Obojživelníky sa vyvinuli z plazov", isCorrect: false },
      { text: "Plazy sa vyvinuli z obojživelníkov", isCorrect: true },
      { text: "Ryby sa vyvinuli z vtákov", isCorrect: false }
    ],
    value: 1000000,
    category: "Biológia",
    explanation: 
      "Evolúcia stavovcov prebiehala prechodom z jednoduchších foriem na zložitejšie. Najprv sa objavili ryby vo vode, potom z nich vzišli obojživelníky, ktoré mohli žiť čiastočne vo vode a čiastočne na súši. Z obojživelníkov sa neskôr vyvinuli plazy, ktoré lepšie zvládli suché prostredie. Plazy následne dali vznik vtákom (napr. Archaeopteryx ukazuje prechod medzi plazmi a vtákmi) a cicavcom. Preto plazy pochádzajú z obojživelníkov. Tvrdenie, že vtáky pochádzajú od cicavcov, je nesprávne – pochádzajú od plazov. Obojživelníky nevznikli z plazov, ale naopak. Ryby nevznikli z vtákov, ale naopak, vtáky majú predchodcov vo forme dinosaurov. ",
    hostNotes:
      "A – vtáky nie sú potomkami cicavcov; B – obojživelníky sa vyvinuli z rýb, nie z plazov; D – ryby existovali dávno pred vtákmi. C – plazy sa vyvinuli z obojživelníkov – správne."
  }
];
