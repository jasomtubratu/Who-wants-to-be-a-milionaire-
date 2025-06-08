import { Question } from "./types";

export const moneyLadder = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000
];

export const questions: Question[] = [
  {
    id: "q1",
    text: "Ktorý z nasledujúcich orgánov je jedinečný pre stavovce?",
    answers: [
      { text: "Exoskelet", isCorrect: false },
      { text: "Chrbtica zo stavcov", isCorrect: true },
      { text: "Jednoduché očné šošovky", isCorrect: false },
      { text: "Žiabrové vaky", isCorrect: false }
    ],
    value: 100,
    category: "Biológia",
    explanation: "Chrbtica tvorí vnútornú oporu a chráni miechu. Exoskelet majú bezstavovce, žiabrové vaky sú u vtákov a šošovky sa líšia v rôznych skupinách.",
    hostNotes: "A je opačne k bezstavovcom, C a D sa netýkajú. Správna je B."
  },
  {
    id: "q2",
    text: "Prečo majú niektoré drsnokožce namiesto zubov dentikly?",
    answers: [
      { text: "Na zachytávanie potravy", isCorrect: false },
      { text: "Pre zníženie trenia vo vode", isCorrect: true },
      { text: "Lepšie dýchanie", isCorrect: false },
      { text: "Termoreguláciu", isCorrect: false }
    ],
    value: 200,
    category: "Biológia",
    explanation: "Dentikly hladia prúd vody okolo tela, znižujú vibrácie a odpor, čo pomáha rýchlejšiemu plávaniu.",
    hostNotes: "A, C a D nesúvisia s hydrodynamikou."
  },
  {
    id: "q3",
    text: "Ako sa nazýva orgán, ktorý pomáha rybám nadľahčiť sa?",
    answers: [
      { text: "Pečeň", isCorrect: false },
      { text: "Plynový mechúr", isCorrect: true },
      { text: "Praveké kosti", isCorrect: false },
      { text: "Bočná čiara", isCorrect: false }
    ],
    value: 300,
    category: "Biológia",
    explanation: "Plynový mechúr reguluje množstvo plynu, čo umožňuje rybám meniť hĺbku plávania bez väčšej námahy.",
    hostNotes: "A aj C nie sú relevantné orgány, D je senzorický systém."
  },
  {
    id: "q4",
    text: "Ktorá trieda stavovcov je priamym predchodcom vtákov podľa fosílnych nálezov?",
    answers: [
      { text: "Cicavce", isCorrect: false },
      { text: "Drsnokožce", isCorrect: false },
      { text: "Dinosaurovité plazy", isCorrect: true },
      { text: "Žraloky", isCorrect: false }
    ],
    value: 500,
    category: "Evolúcia",
    explanation: "Fosílie ako Archaeopteryx ukazujú plazy s perím, ktoré premostili prechod od dinosaurov k vtákom.",
    hostNotes: "A a B sú nesprávne, D je rybia trieda. C odkazuje na dinosaury podobné vtákom."
  },
  {
    id: "q5",
    text: "Prečo obojživelníky dýchajú čiastočne pokožkou?",
    answers: [
      { text: "Na zvýšenie hydrodynamiky", isCorrect: false },
      { text: "Pre doplnkovú výmenu plynov", isCorrect: true },
      { text: "Na chladenie tela", isCorrect: false },
      { text: "Kvôli odstráneniu škodlivín", isCorrect: false }
    ],
    value: 1000,
    category: "Biológia",
    explanation: "Vlhká pokožka umožňuje difúziu kyslíka a oxidu uhličitého, čím dopĺňa dýchanie pľúcami, najmä v nízkom obsahu O₂.",
    hostNotes: "A, C a D nie sú hlavné dôvody."
  },
  {
    id: "q6",
    text: "Ktorá vlastnosť je necharakteristická pre plazy?",
    answers: [
      { text: "Štyri komory v srdci", isCorrect: true },
      { text: "Ektotermia", isCorrect: false },
      { text: "Šupinatá pokožka", isCorrect: false },
      { text: "Vajcia so škrupinou", isCorrect: false }
    ],
    value: 2000,
    category: "Anatómia",
    explanation: "Plazy majú väčšinou trojkomorové srdce. Štyri komory sú vlastné vtákom a cicavcom.",
    hostNotes: "B, C a D sú typické pre plazy. Štyri komory sa vyskytujú u endothermov."
  },
  {
    id: "q7",
    text: "Čo nie je funkciou vtáčích vzdušných vakov?",
    answers: [
      { text: "Podpora letu", isCorrect: false },
      { text: "Termoregulácia svalov počas letu", isCorrect: true },
      { text: "Znižovanie hmotnosti tela", isCorrect: false },
      { text: "Zabezpečenie nepretržitého toku vzduchu", isCorrect: false }
    ],
    value: 4000,
    category: "Anatómia",
    explanation: "Primárnou funkciou je znižovanie hmotnosti a zabezpečenie prietoku vzduchu. Priame chladenie svalov nie je prvoradé.",
    hostNotes: "A, C a D sú kľúčové úlohy vakov."
  },
  {
    id: "q8",
    text: "Aká je hlavná funkcia medzistavcových platničiek?",
    answers: [
      { text: "Pohyb stavcov pri krútení", isCorrect: false },
      { text: "Výživa miechy", isCorrect: false },
      { text: "Tlmenie nárazov medzi stavcami", isCorrect: true },
      { text: "Lepšia fixácia svalov", isCorrect: false }
    ],
    value: 8000,
    category: "Anatómia",
    explanation: "Tieto platničky pôsobia ako pružné tlmiče, ktoré zabraňujú priamym nárazom kostí pri pohybe tela.",
    hostNotes: "A, B a D nesúvisia s tlmením nárazov."
  },
  {
    id: "q9",
    text: "Ktorý z týchto príkladov NIE JE stavovec napriek podobnému názvu?",
    answers: [
      { text: "Asteroidea (morské hviezdice)", isCorrect: true },
      { text: "Aves (vtáky)", isCorrect: false },
      { text: "Amphibia (obojživelníky)", isCorrect: false },
      { text: "Actinopterygii (kostnaté ryby)", isCorrect: false }
    ],
    value: 16000,
    category: "Taxonómia",
    explanation: "Asteroidea patria medzi ostnokožce a nemajú chrbticu.",
    hostNotes: "Ostatné názvy označujú triedy stavovcov."
  },
  {
    id: "q10",
    text: "Prečo je u niektorých vačkovcov cyklus rozmnožovania rýchlejší?",
    answers: [
      { text: "Vďaka dlhšej gravidite", isCorrect: false },
      { text: "Krátkej periody v matkinom vaku", isCorrect: true },
      { text: "Zmenou počtu stavcov", isCorrect: false },
      { text: "Vplyvom cirkadiánnych rytmov", isCorrect: false }
    ],
    value: 32000,
    category: "Životné cykly",
    explanation: "Mláďatá sa rýchlo vyvíjajú vo vaku a potom sa dojčia, čo umožňuje kratší interval medzi vrhmi.",
    hostNotes: "A, C a D nie sú hlavné faktory."
  },
  {
    id: "q11",
    text: "Koľko komôr má srdce cicavcov?",
    answers: [
      { text: "Dve komory", isCorrect: false },
      { text: "Tri komory", isCorrect: false },
      { text: "Štyri komory", isCorrect: true },
      { text: "Päť komôr", isCorrect: false }
    ],
    value: 64000,
    category: "Anatómia",
    explanation: "Cicavce aj vtáky majú štyri komory (dve predsiene a dve komory) pre efektívnu separáciu kyslíkovanej a odkyslíkovanej krvi.",
    hostNotes: "Dve sú u rýb, tri u plazov, päť sa nevyskytuje."
  },
  {
    id: "q12",
    text: "Čo je typická vlastnosť vačkovcov?",
    answers: [
      { text: "Lezenie po stromoch bez chvosta", isCorrect: false },
      { text: "Prítomnosť vačku (marsupia)", isCorrect: true },
      { text: "Život výlučne vo vode", isCorrect: false },
      { text: "Cirkadiánny spánok", isCorrect: false }
    ],
    value: 125000,
    category: "Životné cykly",
    explanation: "Vačkovce majú vývin mláďat v matkinom vačku, kde sa dokončuje vývin potomka po narodení.",
    hostNotes: "Ostatné možnosti nie sú špecifické pre vačkovce."
  },
  {
    id: "q13",
    text: "Ktoré triedy stavovcov sú endothermné (stále udržiavajú stálu telesnú teplotu)?",
    answers: [
      { text: "Plazy a obojživelníky", isCorrect: false },
      { text: "Cicavce a vtáky", isCorrect: true },
      { text: "Iba cicavce", isCorrect: false },
      { text: "Iba vtáky", isCorrect: false }
    ],
    value: 250000,
    category: "Fysiológia",
    explanation: "Cicavce a vtáky majú vnútornú termoreguláciu, zatiaľ čo plazy a obojživelníky sú ektotermné.",
    hostNotes: "A, C a D nie sú úplné."
  },
  {
    id: "q14",
    text: "Čo zachytáva bočná čiara u rýb?",
    answers: [
      { text: "Chuťové podnety", isCorrect: false },
      { text: "Zmenu tlaku a prúdenie vody", isCorrect: true },
      { text: "Ultrafialové svetlo", isCorrect: false },
      { text: "Vibrácie zraku", isCorrect: false }
    ],
    value: 500000,
    category: "Zmyslové systémy",
    explanation: "Bočná čiara je senzorický orgán, ktorý vníma tlakové zmeny a pohyb vody okolo tela ryby.",
    hostNotes: "A a C nesúvisia, D nie je reálny zmysel."
  },
  {
    id: "q15",
    text: "Čo je unikátne na kostiach vtákov?",
    answers: [
      { text: "Sú plné kostného dreňového tkaniva", isCorrect: false },
      { text: "Sú duté a vyplnené vzduchom", isCorrect: true },
      { text: "Obsahujú chrupku namiesto kostí", isCorrect: false },
      { text: "Majú vonkajšiu kostru ako hmyz", isCorrect: false }
    ],
    value: 1000000,
    category: "Anatómia",
    explanation: "Vtáčie kosti sú duté a spojené so vzdušnými vakmi, čo znižuje hmotnosť a uľahčuje let.",
    hostNotes: "A je pre cicavce, C pre drsnokožce a D pre bezstavovce."
  }
];

export const lifelines = [
  { id: "fifty", name: "50:50", description: "Removes two incorrect answers", icon: "scissors", used: false },
  { id: "phone", name: "Phone a Friend", description: "Call a friend for help", icon: "phone", used: false },
  { id: "audience", name: "Ask the Audience", description: "See what the audience thinks", icon: "users", used: false }
];
