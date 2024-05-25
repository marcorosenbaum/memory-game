// const cards = [
//   {
//     id: "1",
//     text: {
//       english: "Excuse me, can you help me please?",
//       swedish: "Ursäkta mig, kan du hjälpa mig snälla?",
//       german: "Entschuldigen Sie, können Sie mir bitte helfen?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "2",
//     text: {
//       english: "Yes, how can I help?",
//       swedish: "Ja, hur kan jag hjälpa till?",
//       german: "Ja, wie kann ich helfen?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "3",
//     text: {
//       english: "When do you close today?",
//       swedish: "När stänger ni idag?",
//       german: "Wann schließen Sie heute?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "4",
//     text: {
//       english: "We close at eight",
//       swedish: "Vi stänger klockan åtta",
//       german: "Wir schließen um acht",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "5",
//     text: {
//       english: "When do you open?",
//       swedish: "När öppnar ni?",
//       german: "Wann öffnen Sie?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "6",
//     text: {
//       english: "We open at nine",
//       swedish: "Vi öppnar klockan nio",
//       german: "Wir öffnen um neun",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "7",
//     text: {
//       english: "Where can I find the post?",
//       swedish: "Var kan jag hitta posten?",
//       german: "Wo finde ich die Post?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "8",
//     text: {
//       english: "The post is at the end of the shop",
//       swedish: "Posten är i slutet av butiken",
//       german: "Die Post ist am Ende des Ladens",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "9",
//     text: {
//       english: "I am looking for work",
//       swedish: "Jag letar efter arbete",
//       german: "Ich suche Arbeit",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "10",
//     text: {
//       english: "What do you need?",
//       swedish: "Vad behöver du?",
//       german: "Was brauchst du?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "11",
//     text: {
//       english: "Can I get a coffee please?",
//       swedish: "Kan jag få en kaffe, tack?",
//       german: "Kann ich bitte einen Kaffee bekommen?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "12",
//     text: {
//       english: "How much does it cost?",
//       swedish: "Hur mycket kostar det?",
//       german: "Wie viel kostet das?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "13",
//     text: {
//       english: "Can you repeat that, please?",
//       swedish: "Kan du upprepa det, tack?",
//       german: "Kannst du das bitte wiederholen?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "14",
//     text: {
//       english: "Can you speak a bit slower, please?",
//       swedish: "Kan du tala lite långsammare, tack?",
//       german: "Kannst du bitte etwas langsamer sprechen?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "15",
//     text: {
//       english: "Yes, I understand",
//       swedish: "Ja, jag förstår",
//       german: "Ja, ich habe verstanden",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "16",
//     text: {
//       english: "No, I did not understand that",
//       swedish: "Nej, jag förstod inte det",
//       german: "Nein, ich habe das nicht verstanden",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "17",
//     text: {
//       english: "Do you know where the nearest pharmacy is?",
//       swedish: "Vet du var närmaste apotek ligger?",
//       german: "Weißt du wo die nächste Apotheke ist?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "18",
//     text: {
//       english: "Sorry, I don't know",
//       swedish: "Förlåt, jag vet inte",
//       german: "Tut mir leid, ich weiß es nicht",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "19",
//     text: {
//       english: "I learn a bit of Swedish every day",
//       swedish: "Jag lär mig lite svenska varje dag",
//       german: "Ich lerne jeden Tag etwas Schwedisch",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "20",
//     text: {
//       english: "I did not find it",
//       swedish: "Jag hittade det inte",
//       german: "Ich habe es nicht gefunden",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "21",
//     text: {
//       english: "I don't feel well",
//       swedish: "Jag mår inte bra",
//       german: "Ich fühle mich nicht gut",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "22",
//     text: {
//       english: "I like to drink coffee",
//       swedish: "Jag gillar att dricka kaffe",
//       german: "Ich trinke gerne Kaffee",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "23",
//     text: {
//       english: "I don’t know where it is because I just moved here",
//       swedish: "Jag vet inte var det är eftersom jag just flyttat hit",
//       german: "Ich weiß nicht wo es ist, weil ich gerade hierher gezogen bin",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "24",
//     text: {
//       english: "I need a doctor",
//       swedish: "Jag behöver en läkare",
//       german: "Ich brauche einen Arzt",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "25",
//     text: {
//       english: "Where is the nearest doctor?",
//       swedish: "Var är närmaste läkare?",
//       german: "Wo ist der nächste Arzt?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "26",
//     text: {
//       english: "Anything else?",
//       swedish: "Något annat?",
//       german: "Noch etwas?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "27",
//     text: {
//       english: "Is that all?",
//       swedish: "Är det allt?",
//       german: "Ist das alles?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "28",
//     text: {
//       english: "Are you a member?",
//       swedish: "Är du medlem?",
//       german: "Bist du Mitglied?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "29",
//     text: {
//       english: "How many times did you go climbing?",
//       swedish: "Hur många gånger har du klättrat?",
//       german: "Wie oft bist du klettern gegangen?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "30",
//     text: {
//       english: "Do you prefer climbing or bouldering?",
//       swedish: "Föredrar du klättring eller bouldering?",
//       german: "Gehst du lieber klettern oder bouldern?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "31",
//     text: {
//       english: "Can I drink the tap water here?",
//       swedish: "Kan jag dricka kranvattnet här?",
//       german: "Kann ich hier das Leitungswasser trinken?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "32",
//     text: {
//       english: "I think the meat is on discount, can you check that please?",
//       swedish: "Jag tror att köttet är på rea, kan du kolla det tack?",
//       german:
//         "Ich glaube, das Fleisch ist im Angebot, kannst du das bitte überprüfen?",
//     },
//     flipped: false,
//     matched: false,
//   },
//   {
//     id: "33",
//     text: {
//       english: "I love you",
//       swedish: "Jag älskar dig",
//       german: "Ich liebe dich",
//     },
//     flipped: false,
//     matched: false,
//   },
// ];

const cards = [
  {
    id: "1000",
    text: {
      english: "We have just moved to Stockholm.",
      swedish: "Vi har precis flyttat till Stockholm.",
      german: "Wir sind gerade nach Stockholm gezogen.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1001",
    text: {
      english: "We are now looking for jobs.",
      swedish: "Vi letar nu efter jobb.",
      german: "Wir suchen jetzt nach Jobs.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1002",
    text: {
      english:
        "We have enough savings to support ourselves for at least six months.",
      swedish:
        "Vi har tillräckligt med besparingar för att försörja oss i minst ett halvår.",
      german:
        "Wir haben genug Ersparnisse, um uns mindestens ein halbes Jahr zu unterstützen.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1003",
    text: {
      english: "I believe we will definitely find jobs within six months.",
      swedish:
        "Jag tror att vi definitivt kommer att hitta jobb inom ett halvår.",
      german:
        "Ich glaube, wir werden definitiv innerhalb von sechs Monaten Jobs finden.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1004",
    text: {
      english: "But I am very nervous.",
      swedish: "Men jag är väldigt nervös.",
      german: "Aber ich bin sehr nervös.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1005",
    text: {
      english: "I want to find a job as a web developer.",
      swedish: "Jag vill hitta ett jobb som webbutvecklare.",
      german: "Ich möchte einen Job als Webentwickler finden.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1006",
    text: {
      english:
        "If I make a plan for how to get a job, I am sure I will get one.",
      swedish:
        "Om jag gör en plan för hur jag ska få ett jobb är jag säker på att jag kommer att få ett.",
      german:
        "Wenn ich einen Plan mache, wie ich einen Job bekomme, bin ich sicher, dass ich einen bekommen werde.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1007",
    text: {
      english: "I just need to be patient.",
      swedish: "Jag behöver bara vara tålmodig.",
      german: "Ich muss nur geduldig sein.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1008",
    text: {
      english:
        "If I learn Swedish every day and work on my developer skills, I will succeed.",
      swedish:
        "Om jag lär mig svenska varje dag och jobbar på mina utvecklarkunskaper så kommer jag att lyckas.",
      german:
        "Wenn ich jeden Tag Schwedisch lerne und an meinen Entwicklerfähigkeiten arbeite, werde ich Erfolg haben.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1009",
    text: {
      english: "I just need to trust the process.",
      swedish: "Jag behöver bara lita på processen.",
      german: "Ich muss nur dem Prozess vertrauen.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1010",
    text: {
      english: "I believe that over time I will get a job.",
      swedish: "Jag tror att med tiden kommer jag att få ett jobb.",
      german: "Ich glaube, dass ich mit der Zeit einen Job bekommen werde.",
    },
    flipped: false,
    matched: false,
  },
  {
    id: "1011",
    text: {
      english: "My chances of getting a job will increase every day.",
      swedish: "Mina chanser att få ett jobb kommer att öka varje dag.",
      german: "Meine Chancen, einen Job zu bekommen, werden jeden Tag steigen.",
    },
    flipped: false,
    matched: false,
  },
];

export default cards;
