// Atlas Genealógico Bíblico — base v0.3
// Expansão: Gênesis 1–46, com controle em 1 Crônicas 1–2 nos pontos de sobreposição.
const PEOPLE = [
  {
    "id": "adam",
    "name": "Adão",
    "aliases": [
      "Adam"
    ],
    "entityType": "person",
    "summary": "Primeiro homem na narrativa bíblica; ponto inicial do atlas genealógico.",
    "refs": [
      "Gênesis 1–5",
      "1 Crônicas 1:1",
      "Lucas 3:38"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "cain",
    "name": "Caim",
    "aliases": [
      "Cain"
    ],
    "entityType": "person",
    "summary": "Filho de Adão e Eva; sua linhagem é registrada em Gênesis 4.",
    "refs": [
      "Gênesis 4:1,17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "abel",
    "name": "Abel",
    "entityType": "person",
    "summary": "Filho de Adão e Eva. A Bíblia não registra descendentes de Abel.",
    "refs": [
      "Gênesis 4:2,8"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "seth",
    "name": "Sete",
    "aliases": [
      "Seth"
    ],
    "entityType": "person",
    "summary": "Filho de Adão e Eva; a linhagem de Gênesis 5 segue por ele.",
    "refs": [
      "Gênesis 4:25; 5:3",
      "1 Crônicas 1:1",
      "Lucas 3:38"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "enoch_cain",
    "name": "Enoque",
    "aliases": [
      "Enoch"
    ],
    "entityType": "person",
    "summary": "Filho de Caim; não confundir com Enoque da linhagem de Sete.",
    "refs": [
      "Gênesis 4:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "irad",
    "name": "Irade",
    "aliases": [
      "Irad"
    ],
    "entityType": "person",
    "summary": "Descendente de Caim.",
    "refs": [
      "Gênesis 4:18"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "mehujael",
    "name": "Meujael",
    "aliases": [
      "Mehujael"
    ],
    "entityType": "person",
    "summary": "Descendente de Caim.",
    "refs": [
      "Gênesis 4:18"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "methushael",
    "name": "Metusael",
    "aliases": [
      "Methushael"
    ],
    "entityType": "person",
    "summary": "Descendente de Caim.",
    "refs": [
      "Gênesis 4:18"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "lamech_cain",
    "name": "Lameque",
    "aliases": [
      "Lamech"
    ],
    "entityType": "person",
    "summary": "Lameque da linhagem de Caim; não confundir com o pai de Noé.",
    "refs": [
      "Gênesis 4:18–24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "jabal",
    "name": "Jabal",
    "entityType": "person",
    "summary": "Filho de Lameque e Ada; associado aos que vivem em tendas e criam rebanhos.",
    "refs": [
      "Gênesis 4:20"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "jubal",
    "name": "Jubal",
    "entityType": "person",
    "summary": "Filho de Lameque e Ada; associado aos músicos na narrativa.",
    "refs": [
      "Gênesis 4:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "tubalcain",
    "name": "Tubalcaim",
    "aliases": [
      "Tubal-Caim",
      "Tubal-Cain"
    ],
    "entityType": "person",
    "summary": "Filho de Lameque e Zilá; associado ao trabalho com bronze e ferro.",
    "refs": [
      "Gênesis 4:22"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "naamah",
    "name": "Naamá",
    "aliases": [
      "Naamah"
    ],
    "entityType": "person",
    "summary": "Filha de Lameque e Zilá; irmã de Tubalcaim.",
    "refs": [
      "Gênesis 4:22"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "enosh",
    "name": "Enos",
    "aliases": [
      "Enosh"
    ],
    "entityType": "person",
    "summary": "Integrante da linhagem principal de Gênesis 5.",
    "refs": [
      "Gênesis 4:26; 5:6–8",
      "1 Crônicas 1:1",
      "Lucas 3:38"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "kenan",
    "name": "Cainã",
    "aliases": [
      "Kenan",
      "Cainan"
    ],
    "entityType": "person",
    "summary": "Integrante da linhagem principal de Gênesis 5.",
    "refs": [
      "Gênesis 5:9–14",
      "1 Crônicas 1:2",
      "Lucas 3:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "mahalalel",
    "name": "Maalaleel",
    "aliases": [
      "Mahalalel"
    ],
    "entityType": "person",
    "summary": "Integrante da linhagem principal de Gênesis 5.",
    "refs": [
      "Gênesis 5:12–17",
      "1 Crônicas 1:2",
      "Lucas 3:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "jared",
    "name": "Jarede",
    "aliases": [
      "Jared"
    ],
    "entityType": "person",
    "summary": "Integrante da linhagem principal de Gênesis 5.",
    "refs": [
      "Gênesis 5:15–20",
      "1 Crônicas 1:2",
      "Lucas 3:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "enoch_seth",
    "name": "Enoque",
    "aliases": [
      "Enoch"
    ],
    "entityType": "person",
    "summary": "Integrante da linhagem principal de Gênesis 5.",
    "refs": [
      "Gênesis 5:18–24",
      "1 Crônicas 1:3",
      "Lucas 3:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "note": "Enoque da linhagem de Sete; distinto do filho de Caim em Gênesis 4.",
    "unnamedChildrenMentioned": true
  },
  {
    "id": "methuselah",
    "name": "Matusalém",
    "aliases": [
      "Methuselah"
    ],
    "entityType": "person",
    "summary": "Integrante da linhagem principal de Gênesis 5.",
    "refs": [
      "Gênesis 5:21–27",
      "1 Crônicas 1:3",
      "Lucas 3:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "lamech_seth",
    "name": "Lameque",
    "aliases": [
      "Lamech"
    ],
    "entityType": "person",
    "summary": "Integrante da linhagem principal de Gênesis 5.",
    "refs": [
      "Gênesis 5:25–31",
      "1 Crônicas 1:3",
      "Lucas 3:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "note": "Lameque, pai de Noé; distinto do Lameque da linhagem de Caim.",
    "unnamedChildrenMentioned": true
  },
  {
    "id": "noah",
    "name": "Noé",
    "aliases": [
      "Noah"
    ],
    "entityType": "person",
    "summary": "Integrante da linhagem principal de Gênesis 5.",
    "refs": [
      "Gênesis 5:28–32; 6–10",
      "1 Crônicas 1:4",
      "Lucas 3:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "id": "shem",
    "name": "Sem",
    "aliases": [
      "Shem"
    ],
    "entityType": "person",
    "summary": "Filho de Noé e origem de um dos grandes ramos de Gênesis 10.",
    "refs": [
      "Gênesis 5:32; 10:21–31; 11:10–11",
      "1 Crônicas 1:4,17,24",
      "Lucas 3:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "ham",
    "name": "Cam",
    "aliases": [
      "Ham"
    ],
    "entityType": "person",
    "summary": "Filho de Noé e origem de um dos grandes ramos de Gênesis 10.",
    "refs": [
      "Gênesis 5:32; 10:6–20",
      "1 Crônicas 1:4,8"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "japheth",
    "name": "Jafé",
    "aliases": [
      "Japheth"
    ],
    "entityType": "person",
    "summary": "Filho de Noé e origem de um dos grandes ramos de Gênesis 10.",
    "refs": [
      "Gênesis 5:32; 10:2–5",
      "1 Crônicas 1:4–7"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "gomer",
    "name": "Gômer",
    "aliases": [
      "Gomer"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "magog",
    "name": "Magogue",
    "aliases": [
      "Magog"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "madai",
    "name": "Madai",
    "entityType": "person",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "javan",
    "name": "Javã",
    "aliases": [
      "Javan"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "tubal",
    "name": "Tubal",
    "entityType": "person",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "meshech",
    "name": "Meseque",
    "aliases": [
      "Meshech"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "tiras",
    "name": "Tirás",
    "aliases": [
      "Tiras"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "ashkenaz",
    "name": "Asquenaz",
    "aliases": [
      "Ashkenaz"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:3",
      "1 Crônicas 1:6"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "riphath",
    "name": "Rifate",
    "aliases": [
      "Riphath",
      "Diphath"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:3",
      "1 Crônicas 1:6"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Gênesis 10 traz Rifate; 1 Crônicas 1:6 registra a variante Diphath em algumas tradições/traduções."
  },
  {
    "id": "togarmah",
    "name": "Togarma",
    "aliases": [
      "Togarmah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:3",
      "1 Crônicas 1:6"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "elishah",
    "name": "Elisá",
    "aliases": [
      "Elishah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:4",
      "1 Crônicas 1:7"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "tarshish",
    "name": "Társis",
    "aliases": [
      "Tarshish"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:4",
      "1 Crônicas 1:7"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "kittim",
    "name": "Quitim",
    "aliases": [
      "Kittim"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:4",
      "1 Crônicas 1:7"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "rodanim",
    "name": "Rodanim",
    "aliases": [
      "Dodanim"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:4",
      "1 Crônicas 1:7"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "A tradição textual apresenta Rodanim/Dodanim; Gênesis 10:4 e 1 Crônicas 1:7 preservam formas diferentes em manuscritos/traduções."
  },
  {
    "id": "cush",
    "name": "Cuxe",
    "aliases": [
      "Cush"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:6",
      "1 Crônicas 1:8"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "miz",
    "name": "Mizraim",
    "aliases": [
      "Egito",
      "Mizraim"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:6",
      "1 Crônicas 1:8"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Mizraim é associado ao Egito; algumas traduções usam “Egito”."
  },
  {
    "id": "put",
    "name": "Fute",
    "aliases": [
      "Put",
      "Pute"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:6",
      "1 Crônicas 1:8"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "canaan",
    "name": "Canaã",
    "aliases": [
      "Canaan"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:6",
      "1 Crônicas 1:8"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "seba",
    "name": "Sebá",
    "aliases": [
      "Seba"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:7–12",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "havilah_cush",
    "name": "Havilá",
    "aliases": [
      "Havilah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:7–12",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "sabtah",
    "name": "Sabtá",
    "aliases": [
      "Sabtah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:7–12",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "raamah",
    "name": "Raamá",
    "aliases": [
      "Raamah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:7–12",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "sabtecha",
    "name": "Sabtecá",
    "aliases": [
      "Sabtechah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:7–12",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "nimrod",
    "name": "Ninrode",
    "aliases": [
      "Nimrod"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:7–12",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Ninrode recebe uma nota narrativa ampliada em Gênesis 10:8–12."
  },
  {
    "id": "sheba_raamah",
    "name": "Sabá",
    "aliases": [
      "Sheba"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:7",
      "1 Crônicas 1:9"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "dedan",
    "name": "Dedã",
    "aliases": [
      "Dedan"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:7",
      "1 Crônicas 1:9"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "ludim",
    "name": "Luditas",
    "aliases": [
      "Ludim"
    ],
    "entityType": "people",
    "summary": "Grupo/povo apresentado genealogicamente como descendência de Mizraim.",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "anamim",
    "name": "Anamitas",
    "aliases": [
      "Anamim"
    ],
    "entityType": "people",
    "summary": "Grupo/povo apresentado genealogicamente como descendência de Mizraim.",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "lehabim",
    "name": "Leabitas",
    "aliases": [
      "Lehabim"
    ],
    "entityType": "people",
    "summary": "Grupo/povo apresentado genealogicamente como descendência de Mizraim.",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "naphtuhim",
    "name": "Naftuítas",
    "aliases": [
      "Naphtuhim"
    ],
    "entityType": "people",
    "summary": "Grupo/povo apresentado genealogicamente como descendência de Mizraim.",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "pathrusim",
    "name": "Patrusitas",
    "aliases": [
      "Pathrusim"
    ],
    "entityType": "people",
    "summary": "Grupo/povo apresentado genealogicamente como descendência de Mizraim.",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "casluhim",
    "name": "Casluítas",
    "aliases": [
      "Casluhim"
    ],
    "entityType": "people",
    "summary": "Grupo/povo apresentado genealogicamente como descendência de Mizraim.",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "caphtorim",
    "name": "Caftoritas",
    "aliases": [
      "Caphtorim"
    ],
    "entityType": "people",
    "summary": "Grupo/povo apresentado genealogicamente como descendência de Mizraim.",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "philistines",
    "name": "Filisteus",
    "aliases": [
      "Philistines"
    ],
    "entityType": "people",
    "summary": "Povo cuja origem é ligada aos casluítas em Gênesis 10:14.",
    "refs": [
      "Gênesis 10:14",
      "1 Crônicas 1:12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "A formulação textual relaciona a origem dos filisteus aos casluítas; o atlas representa isso como relação de origem, não como filiação individual simples."
  },
  {
    "id": "sidon",
    "name": "Sidom",
    "aliases": [
      "Sidon"
    ],
    "entityType": "person",
    "summary": "Descendente de Canaã registrado em Gênesis 10.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "heth",
    "name": "Hete",
    "aliases": [
      "Heth"
    ],
    "entityType": "person",
    "summary": "Descendente de Canaã registrado em Gênesis 10.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "jebusites",
    "name": "Jebuseus",
    "aliases": [
      "Jebusite"
    ],
    "entityType": "people",
    "summary": "Povo/clã cananeu apresentado em forma genealógica.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "amorites",
    "name": "Amorreus",
    "aliases": [
      "Amorite"
    ],
    "entityType": "people",
    "summary": "Povo/clã cananeu apresentado em forma genealógica.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "girgashites",
    "name": "Girgaseus",
    "aliases": [
      "Girgashite"
    ],
    "entityType": "people",
    "summary": "Povo/clã cananeu apresentado em forma genealógica.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "hivites",
    "name": "Heveus",
    "aliases": [
      "Hivite"
    ],
    "entityType": "people",
    "summary": "Povo/clã cananeu apresentado em forma genealógica.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "arkites",
    "name": "Arqueus",
    "aliases": [
      "Arkite"
    ],
    "entityType": "people",
    "summary": "Povo/clã cananeu apresentado em forma genealógica.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "sinites",
    "name": "Sineus",
    "aliases": [
      "Sinite"
    ],
    "entityType": "people",
    "summary": "Povo/clã cananeu apresentado em forma genealógica.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "arvadites",
    "name": "Arvadeus",
    "aliases": [
      "Arvadite"
    ],
    "entityType": "people",
    "summary": "Povo/clã cananeu apresentado em forma genealógica.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "zemarites",
    "name": "Zemareus",
    "aliases": [
      "Zemarite"
    ],
    "entityType": "people",
    "summary": "Povo/clã cananeu apresentado em forma genealógica.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "hamathites",
    "name": "Hamateus",
    "aliases": [
      "Hamathite"
    ],
    "entityType": "people",
    "summary": "Povo/clã cananeu apresentado em forma genealógica.",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "elam",
    "name": "Elão",
    "aliases": [
      "Elam"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:22",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "asshur",
    "name": "Assur",
    "aliases": [
      "Asshur"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:22",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "arphaxad",
    "name": "Arfaxade",
    "aliases": [
      "Arpachshad"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:22",
      "1 Crônicas 1:17",
      "Lucas 3:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "id": "lud",
    "name": "Lude",
    "aliases": [
      "Lud"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:22",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "aram",
    "name": "Arã",
    "aliases": [
      "Aram"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:22",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "uz",
    "name": "Uz",
    "entityType": "person",
    "refs": [
      "Gênesis 10:23",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "hul",
    "name": "Hul",
    "entityType": "person",
    "refs": [
      "Gênesis 10:23",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "gether",
    "name": "Géter",
    "aliases": [
      "Gether"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:23",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "mash",
    "name": "Más",
    "aliases": [
      "Mash",
      "Meseque",
      "Meshech"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:23",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Gênesis 10:23 apresenta uma variante textual entre Más/Meseque em manuscritos e traduções; 1 Crônicas 1:17 também preserva variação correspondente."
  },
  {
    "id": "cainan2",
    "name": "Cainã",
    "aliases": [
      "Cainan"
    ],
    "entityType": "person",
    "summary": "Cainã adicional entre Arfaxade e Salá em Lucas 3 e na tradição da Septuaginta.",
    "refs": [
      "Lucas 3:36",
      "Nota textual de Gênesis 10:24 e 11:12–13 (LXX)"
    ],
    "sourceTags": [
      "luke",
      "septuagint"
    ],
    "note": "Não aparece nessa posição no texto massorético de Gênesis 10–11 nem em 1 Crônicas 1; deve ser exibido como variante textual/genealógica."
  },
  {
    "id": "shelah",
    "name": "Salá",
    "aliases": [
      "Shelah",
      "Salah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:24; 11:12–15",
      "1 Crônicas 1:18,24",
      "Lucas 3:35–36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "note": "Gênesis/Crônicas ligam Arfaxade diretamente a Salá; Lucas/LXX inserem Cainã entre eles.",
    "unnamedChildrenMentioned": true
  },
  {
    "id": "eber",
    "name": "Héber",
    "aliases": [
      "Eber",
      "Éber"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:24–25; 11:14–17",
      "1 Crônicas 1:18–19,25",
      "Lucas 3:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "peleg",
    "name": "Pelegue",
    "aliases": [
      "Peleg"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:25; 11:16–19",
      "1 Crônicas 1:19,25",
      "Lucas 3:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "joktan",
    "name": "Joctã",
    "aliases": [
      "Joktan"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:25–29",
      "1 Crônicas 1:19–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "almodad",
    "name": "Almodá",
    "aliases": [
      "Almodad"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "sheleph",
    "name": "Salefe",
    "aliases": [
      "Sheleph"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "hazarmaveth",
    "name": "Hazarmavé",
    "aliases": [
      "Hazarmaveth"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "jerah",
    "name": "Jerá",
    "aliases": [
      "Jerah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "hadoram",
    "name": "Adorão",
    "aliases": [
      "Hadoram"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "uzal",
    "name": "Uzal",
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "diklah",
    "name": "Dicla",
    "aliases": [
      "Diklah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "obal",
    "name": "Obal",
    "aliases": [
      "Ebal"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Gênesis 10:28 traz Obal; 1 Crônicas 1:22 registra Ebal em algumas tradições/traduções."
  },
  {
    "id": "abimael",
    "name": "Abimael",
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "sheba_joktan",
    "name": "Sabá",
    "aliases": [
      "Sheba"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "ophir",
    "name": "Ofir",
    "aliases": [
      "Ophir"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "havilah_joktan",
    "name": "Havilá",
    "aliases": [
      "Havilah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "jobab_joktan",
    "name": "Jobabe",
    "aliases": [
      "Jobab"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "reu",
    "name": "Reú",
    "aliases": [
      "Reu"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 11:18–21",
      "1 Crônicas 1:25",
      "Lucas 3:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "serug",
    "name": "Serugue",
    "aliases": [
      "Serug"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 11:20–23",
      "1 Crônicas 1:26",
      "Lucas 3:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "nahor1",
    "name": "Naor",
    "aliases": [
      "Nahor"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 11:22–25",
      "1 Crônicas 1:26",
      "Lucas 3:34"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ],
    "unnamedChildrenMentioned": true
  },
  {
    "id": "terah",
    "name": "Terá",
    "aliases": [
      "Terah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 11:24–32",
      "1 Crônicas 1:26",
      "Lucas 3:34"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "id": "abraham",
    "name": "Abrão / Abraão",
    "aliases": [
      "Abrão",
      "Abraão",
      "Abram",
      "Abraham"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 11:26 em diante",
      "1 Crônicas 1:27",
      "Mateus 1:2",
      "Lucas 3:34"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "matthew",
      "luke"
    ],
    "note": "O nome Abrão é mudado para Abraão em Gênesis 17:5; o atlas preserva as duas formas para a mesma pessoa."
  },
  {
    "id": "nahor2",
    "name": "Naor",
    "aliases": [
      "Nahor"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 11:26–29"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "Não confundir com Naor, pai de Terá."
  },
  {
    "id": "haran",
    "name": "Harã",
    "aliases": [
      "Haran"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 11:26–31"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "lot",
    "name": "Ló",
    "aliases": [
      "Lot"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 11:27,31"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "milcah",
    "name": "Milca",
    "aliases": [
      "Milcah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 11:29"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "iscah",
    "name": "Iscá",
    "aliases": [
      "Iscah"
    ],
    "entityType": "person",
    "refs": [
      "Gênesis 11:29"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "eve",
    "name": "Eva",
    "aliases": [
      "Eve"
    ],
    "entityType": "person",
    "summary": "Esposa de Adão e mãe de Caim, Abel e Sete na narrativa.",
    "refs": [
      "Gênesis 2:22–25; 4:1–2,25"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "Nó contextual; não é descendente de Adão no sentido genealógico do mapa."
  },
  {
    "id": "adah",
    "name": "Ada",
    "aliases": [
      "Adah"
    ],
    "entityType": "person",
    "summary": "Uma das esposas de Lameque da linhagem de Caim; mãe de Jabal e Jubal.",
    "refs": [
      "Gênesis 4:19–21"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "Nó contextual de casamento/maternidade."
  },
  {
    "id": "zillah",
    "name": "Zilá",
    "aliases": [
      "Zillah"
    ],
    "entityType": "person",
    "summary": "Uma das esposas de Lameque da linhagem de Caim; mãe de Tubalcaim e Naamá.",
    "refs": [
      "Gênesis 4:19,22"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "Nó contextual de casamento/maternidade."
  },
  {
    "id": "sarai",
    "name": "Sarai / Sara",
    "aliases": [
      "Sarai",
      "Sara",
      "Sarah"
    ],
    "entityType": "person",
    "summary": "Esposa de Abraão; seu nome é mudado de Sarai para Sara em Gênesis 17:15; mãe de Isaque.",
    "refs": [
      "Gênesis 11:29–31; 17:15; 21:1–3; 23:1–2"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "O atlas trata Sarai e Sara como a mesma pessoa, preservando a mudança de nome."
  },
  {
    "id": "reumah",
    "name": "Reumá",
    "entityType": "person",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Concubina de Naor; mãe de Tebá, Gaã, Taás e Maaca."
  },
  {
    "id": "uz_nahor",
    "name": "Uz",
    "entityType": "person",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "Pertence ao ramo de Naor e Milca."
  },
  {
    "id": "buz",
    "name": "Buz",
    "entityType": "person",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "kemuel",
    "name": "Quemuel",
    "entityType": "person",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "chesed",
    "name": "Quésede",
    "entityType": "person",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "hazo",
    "name": "Hazo",
    "entityType": "person",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "pildash",
    "name": "Pildas",
    "entityType": "person",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "jidlaph",
    "name": "Jidlaque",
    "entityType": "person",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "bethuel",
    "name": "Betuel",
    "entityType": "person",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "aram_kemuel",
    "name": "Arã",
    "entityType": "person",
    "refs": [
      "Gênesis 22:21"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "Não confundir com Arã, filho de Sem, em Gênesis 10."
  },
  {
    "id": "tebah",
    "name": "Tebá",
    "entityType": "person",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "gaham",
    "name": "Gaã",
    "entityType": "person",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "tahash",
    "name": "Taás",
    "entityType": "person",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "maacah_nahor",
    "name": "Maaca",
    "entityType": "person",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "rebekah",
    "name": "Rebeca",
    "entityType": "person",
    "refs": [
      "Gênesis 22:23; 24:15,24; 25:20"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Filha de Betuel, irmã de Labão e esposa de Isaque."
  },
  {
    "id": "laban",
    "name": "Labão",
    "entityType": "person",
    "refs": [
      "Gênesis 24:29; 28:5; 29:16"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Filho de Betuel; irmão de Rebeca; pai de Lia e Raquel."
  },
  {
    "id": "leah",
    "name": "Lia",
    "entityType": "person",
    "refs": [
      "Gênesis 29:16–35; 35:23"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Filha mais velha de Labão; esposa de Jacó."
  },
  {
    "id": "rachel",
    "name": "Raquel",
    "entityType": "person",
    "refs": [
      "Gênesis 29:16–30; 35:16–24"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Filha mais nova de Labão; esposa de Jacó; mãe de José e Benjamim."
  },
  {
    "id": "moab",
    "name": "Moabe",
    "entityType": "person",
    "refs": [
      "Gênesis 19:37"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Filho de Ló e de sua filha mais velha; ancestral epônimo dos moabitas."
  },
  {
    "id": "ben_ammi",
    "name": "Ben-Ami",
    "entityType": "person",
    "refs": [
      "Gênesis 19:38"
    ],
    "sourceTags": [
      "genesis"
    ],
    "aliases": [
      "Ben-Ammi"
    ],
    "summary": "Filho de Ló e de sua filha mais nova; ancestral epônimo dos amonitas."
  },
  {
    "id": "moabites",
    "name": "Moabitas",
    "entityType": "people",
    "refs": [
      "Gênesis 19:37"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Povo apresentado como descendente de Moabe."
  },
  {
    "id": "ammonites",
    "name": "Amonitas",
    "entityType": "people",
    "refs": [
      "Gênesis 19:38"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Povo apresentado como descendente de Ben-Ami."
  },
  {
    "id": "hagar",
    "name": "Hagar",
    "entityType": "person",
    "refs": [
      "Gênesis 16:1–16; 21:9–21; 25:12"
    ],
    "sourceTags": [
      "genesis"
    ],
    "aliases": [
      "Agar"
    ],
    "summary": "Serva egípcia de Sara; mãe de Ismael com Abraão."
  },
  {
    "id": "keturah",
    "name": "Quetura",
    "entityType": "person",
    "refs": [
      "Gênesis 25:1–4",
      "1 Crônicas 1:32–33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "summary": "Mulher/concubina de Abraão em tradições textuais; mãe de seis filhos listados em Gênesis 25."
  },
  {
    "id": "ishmael",
    "name": "Ismael",
    "entityType": "person",
    "refs": [
      "Gênesis 16:15–16; 25:12–18",
      "1 Crônicas 1:28–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "summary": "Filho de Abraão e Hagar; pai de doze filhos chefes de tribos."
  },
  {
    "id": "isaac",
    "name": "Isaque",
    "entityType": "person",
    "refs": [
      "Gênesis 21:1–3; 25:19–26",
      "1 Crônicas 1:28,34"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "summary": "Filho de Abraão e Sara; pai de Esaú e Jacó/Israel."
  },
  {
    "id": "nebaioth",
    "name": "Nebaiote",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Nebajote"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "kedar_ishmael",
    "name": "Quedar",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Kedar"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "adbeel",
    "name": "Adbeel",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "mibsam",
    "name": "Mibsão",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Mibsam"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "mishma",
    "name": "Misma",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Mishma"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "dumah_ishmael",
    "name": "Dumá",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Dumah"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "massa_ishmael",
    "name": "Massá",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Massa"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "hadad_ishmael",
    "name": "Hadade",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Hadad"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "tema_ishmael",
    "name": "Temá",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Tema"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "jetur",
    "name": "Jetur",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "naphish",
    "name": "Nafis",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Naphish"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "kedemah",
    "name": "Quedemá",
    "entityType": "person",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Kedemah"
    ],
    "summary": "Um dos doze filhos de Ismael, associado a chefia tribal na narrativa."
  },
  {
    "id": "zimran",
    "name": "Zinrã",
    "entityType": "person",
    "refs": [
      "Gênesis 25:1–4",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "jokshan",
    "name": "Jocsã",
    "entityType": "person",
    "refs": [
      "Gênesis 25:1–4",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "medan",
    "name": "Medã",
    "entityType": "person",
    "refs": [
      "Gênesis 25:1–4",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "midian",
    "name": "Midiã",
    "entityType": "person",
    "refs": [
      "Gênesis 25:1–4",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "ishbak",
    "name": "Isbaque",
    "entityType": "person",
    "refs": [
      "Gênesis 25:1–4",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "shuah_keturah",
    "name": "Suá",
    "entityType": "person",
    "refs": [
      "Gênesis 25:1–4",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "sheba_jokshan",
    "name": "Sabá",
    "entityType": "person",
    "refs": [
      "Gênesis 25:3",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Não confundir com homônimos de Gênesis 10."
  },
  {
    "id": "dedan_jokshan",
    "name": "Dedã",
    "entityType": "person",
    "refs": [
      "Gênesis 25:3",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Não confundir com homônimos de Gênesis 10."
  },
  {
    "id": "asshurim",
    "name": "Assuritas",
    "entityType": "people",
    "refs": [
      "Gênesis 25:3"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Grupo/povo listado como descendência de Dedã, filho de Jocsã."
  },
  {
    "id": "letushim",
    "name": "Letusitas",
    "entityType": "people",
    "refs": [
      "Gênesis 25:3"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Grupo/povo listado como descendência de Dedã, filho de Jocsã."
  },
  {
    "id": "leummim",
    "name": "Leumitas",
    "entityType": "people",
    "refs": [
      "Gênesis 25:3"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Grupo/povo listado como descendência de Dedã, filho de Jocsã."
  },
  {
    "id": "ephah_midian",
    "name": "Efá",
    "entityType": "person",
    "refs": [
      "Gênesis 25:4",
      "1 Crônicas 1:33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Não confundir com homônimos em outros ramos."
  },
  {
    "id": "epher_midian",
    "name": "Éfer",
    "entityType": "person",
    "refs": [
      "Gênesis 25:4",
      "1 Crônicas 1:33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "hanoch_midian",
    "name": "Enoque",
    "entityType": "person",
    "refs": [
      "Gênesis 25:4",
      "1 Crônicas 1:33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Não confundir com homônimos em outros ramos."
  },
  {
    "id": "abida",
    "name": "Abida",
    "entityType": "person",
    "refs": [
      "Gênesis 25:4",
      "1 Crônicas 1:33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "eldaah",
    "name": "Elda",
    "entityType": "person",
    "refs": [
      "Gênesis 25:4",
      "1 Crônicas 1:33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "esau",
    "name": "Esaú / Edom",
    "entityType": "person",
    "refs": [
      "Gênesis 25:24–34; 36:1–9",
      "1 Crônicas 1:34–35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Esaú",
      "Edom",
      "Esau"
    ],
    "summary": "Filho de Isaque e Rebeca; também chamado Edom; ancestral dos edomitas."
  },
  {
    "id": "jacob",
    "name": "Jacó / Israel",
    "entityType": "person",
    "refs": [
      "Gênesis 25:24–26; 32:28; 35:10,22–26",
      "1 Crônicas 1:34; 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Jacó",
      "Israel",
      "Jacob"
    ],
    "summary": "Filho de Isaque e Rebeca; recebe o nome Israel; pai dos doze filhos que dão origem às tribos de Israel.",
    "note": "O atlas trata Jacó e Israel como a mesma pessoa, preservando a mudança de nome."
  },
  {
    "id": "adah_esau",
    "name": "Ada",
    "entityType": "person",
    "refs": [
      "Gênesis 36:2–4"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Esposa de Esaú; filha de Elom, o hitita. Não confundir com Ada, esposa de Lameque em Gênesis 4."
  },
  {
    "id": "oholibamah",
    "name": "Oolibama",
    "entityType": "person",
    "refs": [
      "Gênesis 36:2,5"
    ],
    "sourceTags": [
      "genesis"
    ],
    "aliases": [
      "Aolibama",
      "Oholibamah"
    ],
    "summary": "Esposa de Esaú; apresentada como filha de Aná e neta de Zibeão."
  },
  {
    "id": "basemath_esau",
    "name": "Basemate",
    "entityType": "person",
    "refs": [
      "Gênesis 36:3–4"
    ],
    "sourceTags": [
      "genesis"
    ],
    "aliases": [
      "Basemath"
    ],
    "summary": "Esposa de Esaú; filha de Ismael e irmã de Nebaiote."
  },
  {
    "id": "eliphaz_esau",
    "name": "Elifaz",
    "entityType": "person",
    "refs": [
      "Gênesis 36:4–5,10",
      "1 Crônicas 1:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Não confundir com homônimos em outros ramos."
  },
  {
    "id": "reuel_esau",
    "name": "Reuel",
    "entityType": "person",
    "refs": [
      "Gênesis 36:4–5,10",
      "1 Crônicas 1:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Não confundir com homônimos em outros ramos."
  },
  {
    "id": "jeush_esau",
    "name": "Jeús",
    "entityType": "person",
    "refs": [
      "Gênesis 36:4–5,10",
      "1 Crônicas 1:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "jalam_esau",
    "name": "Jalão",
    "entityType": "person",
    "refs": [
      "Gênesis 36:4–5,10",
      "1 Crônicas 1:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "korah_esau",
    "name": "Corá",
    "entityType": "person",
    "refs": [
      "Gênesis 36:4–5,10",
      "1 Crônicas 1:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Não confundir com homônimos em outros ramos."
  },
  {
    "id": "timna_esau",
    "name": "Timna",
    "entityType": "person",
    "refs": [
      "Gênesis 36:12"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Concubina de Elifaz; mãe de Amaleque."
  },
  {
    "id": "teman_esau",
    "name": "Temã",
    "entityType": "person",
    "refs": [
      "Gênesis 36:11",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "omar_esau",
    "name": "Omar",
    "entityType": "person",
    "refs": [
      "Gênesis 36:11",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "zepho_esau",
    "name": "Zefô",
    "entityType": "person",
    "refs": [
      "Gênesis 36:11",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "gatam_esau",
    "name": "Gaetã",
    "entityType": "person",
    "refs": [
      "Gênesis 36:11",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "kenaz_esau",
    "name": "Quenaz",
    "entityType": "person",
    "refs": [
      "Gênesis 36:11",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "amalek",
    "name": "Amaleque",
    "entityType": "person",
    "refs": [
      "Gênesis 36:12",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "summary": "Filho de Elifaz e Timna; nome associado posteriormente aos amalequitas."
  },
  {
    "id": "nahath_reuel",
    "name": "Naate",
    "entityType": "person",
    "refs": [
      "Gênesis 36:13",
      "1 Crônicas 1:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "zerah_reuel",
    "name": "Zerá",
    "entityType": "person",
    "refs": [
      "Gênesis 36:13",
      "1 Crônicas 1:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "shammah_reuel",
    "name": "Samá",
    "entityType": "person",
    "refs": [
      "Gênesis 36:13",
      "1 Crônicas 1:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "mizzah",
    "name": "Mizá",
    "entityType": "person",
    "refs": [
      "Gênesis 36:13",
      "1 Crônicas 1:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "edomites",
    "name": "Edomitas",
    "entityType": "people",
    "refs": [
      "Gênesis 36:1,8–9"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Povo associado à descendência de Esaú/Edom."
  },
  {
    "id": "bilhah",
    "name": "Bila",
    "entityType": "person",
    "refs": [
      "Gênesis 29:29; 30:3–8; 35:25"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Serva de Raquel e concubina de Jacó; mãe de Dã e Naftali."
  },
  {
    "id": "zilpah",
    "name": "Zilpa",
    "entityType": "person",
    "refs": [
      "Gênesis 29:24; 30:9–13; 35:26"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Serva de Lia e concubina de Jacó; mãe de Gade e Aser."
  },
  {
    "id": "reuben",
    "name": "Rúben",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "simeon",
    "name": "Simeão",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "levi",
    "name": "Levi",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "judah",
    "name": "Judá",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "issachar",
    "name": "Issacar",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "zebulun",
    "name": "Zebulom",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "dinah",
    "name": "Diná",
    "entityType": "person",
    "refs": [
      "Gênesis 30:21; 34:1"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "joseph",
    "name": "José",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "benjamin",
    "name": "Benjamim",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "aliases": [
      "Benoni"
    ],
    "note": "Raquel inicialmente o chamou Benoni; Jacó lhe deu o nome Benjamim (Gênesis 35:18)."
  },
  {
    "id": "dan",
    "name": "Dã",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "naphtali",
    "name": "Naftali",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "gad",
    "name": "Gade",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "asher",
    "name": "Aser",
    "entityType": "person",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "hanoch_reuben",
    "name": "Enoque",
    "entityType": "person",
    "refs": [
      "Gênesis 46:9"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "pallu",
    "name": "Palu",
    "entityType": "person",
    "refs": [
      "Gênesis 46:9"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "hezron_reuben",
    "name": "Hezrom",
    "entityType": "person",
    "refs": [
      "Gênesis 46:9"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "carmi_reuben",
    "name": "Carmi",
    "entityType": "person",
    "refs": [
      "Gênesis 46:9"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "jemuel",
    "name": "Jemuel",
    "entityType": "person",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "Números 26:12 e 1 Crônicas 4:24 usam a forma Nemuel em tradições/traduções."
  },
  {
    "id": "jamin",
    "name": "Jamim",
    "entityType": "person",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "ohad",
    "name": "Oade",
    "entityType": "person",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "jachin_simeon",
    "name": "Jaquim",
    "entityType": "person",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ],
    "aliases": [
      "Jakin",
      "Jachin"
    ],
    "note": "Há variações de transliteração do nome."
  },
  {
    "id": "zohar_simeon",
    "name": "Zoar",
    "entityType": "person",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ],
    "aliases": [
      "Zoar",
      "Zohar",
      "Zerá"
    ],
    "note": "Números 26:13 e 1 Crônicas 4:24 preservam forma correspondente a Zerá."
  },
  {
    "id": "shaul_simeon",
    "name": "Saul",
    "entityType": "person",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "gershon",
    "name": "Gérson",
    "entityType": "person",
    "refs": [
      "Gênesis 46:11"
    ],
    "sourceTags": [
      "genesis"
    ],
    "aliases": [
      "Gérson",
      "Gersom"
    ],
    "note": "Há variação de forma em passagens paralelas, incluindo 1 Crônicas 6."
  },
  {
    "id": "kohath",
    "name": "Coate",
    "entityType": "person",
    "refs": [
      "Gênesis 46:11"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "merari",
    "name": "Merari",
    "entityType": "person",
    "refs": [
      "Gênesis 46:11"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "er_judah",
    "name": "Er",
    "entityType": "person",
    "refs": [
      "Gênesis 46:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "onan_judah",
    "name": "Onã",
    "entityType": "person",
    "refs": [
      "Gênesis 46:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "shelah_judah",
    "name": "Selá",
    "entityType": "person",
    "refs": [
      "Gênesis 46:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "perez",
    "name": "Perez",
    "entityType": "person",
    "refs": [
      "Gênesis 46:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "zerah_judah",
    "name": "Zerá",
    "entityType": "person",
    "refs": [
      "Gênesis 46:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "tola",
    "name": "Tolá",
    "entityType": "person",
    "refs": [
      "Gênesis 46:13"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "puah",
    "name": "Puá",
    "entityType": "person",
    "refs": [
      "Gênesis 46:13"
    ],
    "sourceTags": [
      "genesis"
    ],
    "aliases": [
      "Puá",
      "Puvá"
    ],
    "note": "Gênesis 46:13 possui variantes de forma em tradições textuais e passagens paralelas."
  },
  {
    "id": "jashub",
    "name": "Jasube",
    "entityType": "person",
    "refs": [
      "Gênesis 46:13"
    ],
    "sourceTags": [
      "genesis"
    ],
    "aliases": [
      "Jasube",
      "Jó/Iob"
    ],
    "note": "O texto massorético de Gênesis 46:13 preserva forma equivalente a Iob; outras tradições e passagens paralelas trazem Jasube."
  },
  {
    "id": "shimron",
    "name": "Sinrom",
    "entityType": "person",
    "refs": [
      "Gênesis 46:13"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "sered",
    "name": "Serede",
    "entityType": "person",
    "refs": [
      "Gênesis 46:14"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "elon_zebulun",
    "name": "Elom",
    "entityType": "person",
    "refs": [
      "Gênesis 46:14"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "jahleel",
    "name": "Jaleel",
    "entityType": "person",
    "refs": [
      "Gênesis 46:14"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "zephon",
    "name": "Zefom",
    "entityType": "person",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ],
    "aliases": [
      "Zefom",
      "Zifiom"
    ],
    "note": "Há variante textual em Gênesis 46:16; Números 26:15 tem forma equivalente a Zefom."
  },
  {
    "id": "haggi",
    "name": "Hagi",
    "entityType": "person",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "shuni",
    "name": "Suni",
    "entityType": "person",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "ezbon",
    "name": "Esbom",
    "entityType": "person",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "eri",
    "name": "Eri",
    "entityType": "person",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "arodi",
    "name": "Arodi",
    "entityType": "person",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "areli",
    "name": "Areli",
    "entityType": "person",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "imnah",
    "name": "Imna",
    "entityType": "person",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "ishvah",
    "name": "Isvá",
    "entityType": "person",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "ishvi",
    "name": "Isvi",
    "entityType": "person",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "beriah",
    "name": "Berias",
    "entityType": "person",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "serah",
    "name": "Será",
    "entityType": "person",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "bela",
    "name": "Belá",
    "entityType": "person",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "beker",
    "name": "Bequer",
    "entityType": "person",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "ashbel",
    "name": "Asbel",
    "entityType": "person",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "gera_benjamin",
    "name": "Gera",
    "entityType": "person",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "naaman_benjamin",
    "name": "Naamã",
    "entityType": "person",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "ehi",
    "name": "Eí",
    "entityType": "person",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "rosh",
    "name": "Rôs",
    "entityType": "person",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "muppim",
    "name": "Mupim",
    "entityType": "person",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "huppim",
    "name": "Hupim",
    "entityType": "person",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "ard",
    "name": "Arde",
    "entityType": "person",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "hushim",
    "name": "Husim",
    "entityType": "person",
    "refs": [
      "Gênesis 46:23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "jahziel",
    "name": "Jazeel",
    "entityType": "person",
    "refs": [
      "Gênesis 46:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "guni",
    "name": "Guni",
    "entityType": "person",
    "refs": [
      "Gênesis 46:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "jezer",
    "name": "Jezer",
    "entityType": "person",
    "refs": [
      "Gênesis 46:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "shillem",
    "name": "Silém",
    "entityType": "person",
    "refs": [
      "Gênesis 46:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "hezron_perez",
    "name": "Hezrom",
    "entityType": "person",
    "refs": [
      "Gênesis 46:12",
      "1 Crônicas 2:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "hamul",
    "name": "Hamul",
    "entityType": "person",
    "refs": [
      "Gênesis 46:12",
      "1 Crônicas 2:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "id": "heber_beriah",
    "name": "Héber",
    "entityType": "person",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "malkiel",
    "name": "Malquiel",
    "entityType": "person",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "tamar",
    "name": "Tamar",
    "entityType": "person",
    "refs": [
      "Gênesis 38:6–30",
      "1 Crônicas 2:4"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "summary": "Nora de Judá; mãe de Perez e Zerá com Judá."
  },
  {
    "id": "asenath",
    "name": "Asenate",
    "entityType": "person",
    "refs": [
      "Gênesis 41:45,50–52; 46:20"
    ],
    "sourceTags": [
      "genesis"
    ],
    "summary": "Esposa de José; filha de Potífera, sacerdote de Om; mãe de Manassés e Efraim."
  },
  {
    "id": "manasseh",
    "name": "Manassés",
    "entityType": "person",
    "refs": [
      "Gênesis 41:50–52; 46:20; 48:1–20"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "id": "ephraim",
    "name": "Efraim",
    "entityType": "person",
    "refs": [
      "Gênesis 41:50–52; 46:20; 48:1–20"
    ],
    "sourceTags": [
      "genesis"
    ]
  }
];

const RELATIONSHIPS = [
  {
    "from": "adam",
    "to": "cain",
    "relation": "parent",
    "refs": [
      "Gênesis 4:1"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "adam",
    "to": "abel",
    "relation": "parent",
    "refs": [
      "Gênesis 4:2"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "adam",
    "to": "seth",
    "relation": "parent",
    "refs": [
      "Gênesis 4:25; 5:3"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "cain",
    "to": "enoch_cain",
    "relation": "parent",
    "refs": [
      "Gênesis 4:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "enoch_cain",
    "to": "irad",
    "relation": "parent",
    "refs": [
      "Gênesis 4:18"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "irad",
    "to": "mehujael",
    "relation": "parent",
    "refs": [
      "Gênesis 4:18"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "mehujael",
    "to": "methushael",
    "relation": "parent",
    "refs": [
      "Gênesis 4:18"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "methushael",
    "to": "lamech_cain",
    "relation": "parent",
    "refs": [
      "Gênesis 4:18"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "lamech_cain",
    "to": "jabal",
    "relation": "parent",
    "refs": [
      "Gênesis 4:20"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "lamech_cain",
    "to": "jubal",
    "relation": "parent",
    "refs": [
      "Gênesis 4:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "lamech_cain",
    "to": "tubalcain",
    "relation": "parent",
    "refs": [
      "Gênesis 4:22"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "lamech_cain",
    "to": "naamah",
    "relation": "parent",
    "refs": [
      "Gênesis 4:22"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "seth",
    "to": "enosh",
    "relation": "parent",
    "refs": [
      "Gênesis 4:26; 5:6–8"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "enosh",
    "to": "kenan",
    "relation": "parent",
    "refs": [
      "Gênesis 5:9–14"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "kenan",
    "to": "mahalalel",
    "relation": "parent",
    "refs": [
      "Gênesis 5:12–17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "mahalalel",
    "to": "jared",
    "relation": "parent",
    "refs": [
      "Gênesis 5:15–20"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "jared",
    "to": "enoch_seth",
    "relation": "parent",
    "refs": [
      "Gênesis 5:18–24"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "enoch_seth",
    "to": "methuselah",
    "relation": "parent",
    "refs": [
      "Gênesis 5:21–27"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "methuselah",
    "to": "lamech_seth",
    "relation": "parent",
    "refs": [
      "Gênesis 5:25–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "lamech_seth",
    "to": "noah",
    "relation": "parent",
    "refs": [
      "Gênesis 5:28–32; 6–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "noah",
    "to": "shem",
    "relation": "parent",
    "refs": [
      "Gênesis 5:32; 10:1",
      "1 Crônicas 1:4"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "noah",
    "to": "ham",
    "relation": "parent",
    "refs": [
      "Gênesis 5:32; 10:1",
      "1 Crônicas 1:4"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "noah",
    "to": "japheth",
    "relation": "parent",
    "refs": [
      "Gênesis 5:32; 10:1",
      "1 Crônicas 1:4"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "japheth",
    "to": "gomer",
    "relation": "parent",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "japheth",
    "to": "magog",
    "relation": "parent",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "japheth",
    "to": "madai",
    "relation": "parent",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "japheth",
    "to": "javan",
    "relation": "parent",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "japheth",
    "to": "tubal",
    "relation": "parent",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "japheth",
    "to": "meshech",
    "relation": "parent",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "japheth",
    "to": "tiras",
    "relation": "parent",
    "refs": [
      "Gênesis 10:2",
      "1 Crônicas 1:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "gomer",
    "to": "ashkenaz",
    "relation": "parent",
    "refs": [
      "Gênesis 10:3",
      "1 Crônicas 1:6"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "gomer",
    "to": "riphath",
    "relation": "parent",
    "refs": [
      "Gênesis 10:3",
      "1 Crônicas 1:6"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "gomer",
    "to": "togarmah",
    "relation": "parent",
    "refs": [
      "Gênesis 10:3",
      "1 Crônicas 1:6"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "javan",
    "to": "elishah",
    "relation": "parent",
    "refs": [
      "Gênesis 10:4",
      "1 Crônicas 1:7"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "javan",
    "to": "tarshish",
    "relation": "parent",
    "refs": [
      "Gênesis 10:4",
      "1 Crônicas 1:7"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "javan",
    "to": "kittim",
    "relation": "parent",
    "refs": [
      "Gênesis 10:4",
      "1 Crônicas 1:7"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "javan",
    "to": "rodanim",
    "relation": "parent",
    "refs": [
      "Gênesis 10:4",
      "1 Crônicas 1:7"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ham",
    "to": "cush",
    "relation": "parent",
    "refs": [
      "Gênesis 10:6",
      "1 Crônicas 1:8"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ham",
    "to": "miz",
    "relation": "parent",
    "refs": [
      "Gênesis 10:6",
      "1 Crônicas 1:8"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ham",
    "to": "put",
    "relation": "parent",
    "refs": [
      "Gênesis 10:6",
      "1 Crônicas 1:8"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ham",
    "to": "canaan",
    "relation": "parent",
    "refs": [
      "Gênesis 10:6",
      "1 Crônicas 1:8"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "cush",
    "to": "seba",
    "relation": "parent",
    "refs": [
      "Gênesis 10:7–8",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "cush",
    "to": "havilah_cush",
    "relation": "parent",
    "refs": [
      "Gênesis 10:7–8",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "cush",
    "to": "sabtah",
    "relation": "parent",
    "refs": [
      "Gênesis 10:7–8",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "cush",
    "to": "raamah",
    "relation": "parent",
    "refs": [
      "Gênesis 10:7–8",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "cush",
    "to": "sabtecha",
    "relation": "parent",
    "refs": [
      "Gênesis 10:7–8",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "cush",
    "to": "nimrod",
    "relation": "parent",
    "refs": [
      "Gênesis 10:7–8",
      "1 Crônicas 1:9–10"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "raamah",
    "to": "sheba_raamah",
    "relation": "parent",
    "refs": [
      "Gênesis 10:7",
      "1 Crônicas 1:9"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "raamah",
    "to": "dedan",
    "relation": "parent",
    "refs": [
      "Gênesis 10:7",
      "1 Crônicas 1:9"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "miz",
    "to": "ludim",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "miz",
    "to": "anamim",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "miz",
    "to": "lehabim",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "miz",
    "to": "naphtuhim",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "miz",
    "to": "pathrusim",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "miz",
    "to": "casluhim",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "miz",
    "to": "caphtorim",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:13–14",
      "1 Crônicas 1:11–12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "casluhim",
    "to": "philistines",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:14",
      "1 Crônicas 1:12"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ],
    "note": "Origem dos filisteus associada aos casluítas na passagem."
  },
  {
    "from": "canaan",
    "to": "sidon",
    "relation": "parent",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "canaan",
    "to": "heth",
    "relation": "parent",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "canaan",
    "to": "jebusites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "canaan",
    "to": "amorites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "canaan",
    "to": "girgashites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "canaan",
    "to": "hivites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "canaan",
    "to": "arkites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "canaan",
    "to": "sinites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "canaan",
    "to": "arvadites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "canaan",
    "to": "zemarites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "canaan",
    "to": "hamathites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 10:15–18",
      "1 Crônicas 1:13–16"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "shem",
    "to": "elam",
    "relation": "parent",
    "refs": [
      "Gênesis 10:22",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "shem",
    "to": "asshur",
    "relation": "parent",
    "refs": [
      "Gênesis 10:22",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "shem",
    "to": "arphaxad",
    "relation": "parent",
    "refs": [
      "Gênesis 10:22",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "shem",
    "to": "lud",
    "relation": "parent",
    "refs": [
      "Gênesis 10:22",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "shem",
    "to": "aram",
    "relation": "parent",
    "refs": [
      "Gênesis 10:22",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "aram",
    "to": "uz",
    "relation": "parent",
    "refs": [
      "Gênesis 10:23",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "aram",
    "to": "hul",
    "relation": "parent",
    "refs": [
      "Gênesis 10:23",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "aram",
    "to": "gether",
    "relation": "parent",
    "refs": [
      "Gênesis 10:23",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "aram",
    "to": "mash",
    "relation": "parent",
    "refs": [
      "Gênesis 10:23",
      "1 Crônicas 1:17"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "arphaxad",
    "to": "shelah",
    "relation": "parent",
    "refs": [
      "Gênesis 10:24; 11:12",
      "1 Crônicas 1:18,24"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "arphaxad",
    "to": "cainan2",
    "relation": "parent",
    "refs": [
      "Lucas 3:36",
      "LXX de Gênesis 10:24; 11:12–13"
    ],
    "sourceTags": [
      "luke",
      "septuagint"
    ],
    "variant": true,
    "note": "Ligação presente em Lucas e na tradição da Septuaginta, mas não no MT de Gênesis/1 Crônicas."
  },
  {
    "from": "cainan2",
    "to": "shelah",
    "relation": "parent",
    "refs": [
      "Lucas 3:35–36",
      "LXX de Gênesis 10:24; 11:12–13"
    ],
    "sourceTags": [
      "luke",
      "septuagint"
    ],
    "variant": true,
    "note": "Variante textual/genealógica."
  },
  {
    "from": "shelah",
    "to": "eber",
    "relation": "parent",
    "refs": [
      "Gênesis 10:24; 11:14",
      "1 Crônicas 1:18,24–25",
      "Lucas 3:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "eber",
    "to": "peleg",
    "relation": "parent",
    "refs": [
      "Gênesis 10:25; 11:16",
      "1 Crônicas 1:19,25",
      "Lucas 3:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "eber",
    "to": "joktan",
    "relation": "parent",
    "refs": [
      "Gênesis 10:25",
      "1 Crônicas 1:19"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "almodad",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "sheleph",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "hazarmaveth",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "jerah",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "hadoram",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "uzal",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "diklah",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "obal",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "abimael",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "sheba_joktan",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "ophir",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "havilah_joktan",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joktan",
    "to": "jobab_joktan",
    "relation": "parent",
    "refs": [
      "Gênesis 10:26–29",
      "1 Crônicas 1:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "peleg",
    "to": "reu",
    "relation": "parent",
    "refs": [
      "Gênesis 11:18–21"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "reu",
    "to": "serug",
    "relation": "parent",
    "refs": [
      "Gênesis 11:20–23"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "serug",
    "to": "nahor1",
    "relation": "parent",
    "refs": [
      "Gênesis 11:22–25"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "nahor1",
    "to": "terah",
    "relation": "parent",
    "refs": [
      "Gênesis 11:24–32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "luke"
    ]
  },
  {
    "from": "terah",
    "to": "abraham",
    "relation": "parent",
    "refs": [
      "Gênesis 11:26–27"
    ],
    "sourceTags": [
      "genesis",
      "chronicles",
      "matthew",
      "luke"
    ]
  },
  {
    "from": "terah",
    "to": "nahor2",
    "relation": "parent",
    "refs": [
      "Gênesis 11:26–27"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "terah",
    "to": "haran",
    "relation": "parent",
    "refs": [
      "Gênesis 11:26–27"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "haran",
    "to": "lot",
    "relation": "parent",
    "refs": [
      "Gênesis 11:27,29"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "haran",
    "to": "milcah",
    "relation": "parent",
    "refs": [
      "Gênesis 11:27,29"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "haran",
    "to": "iscah",
    "relation": "parent",
    "refs": [
      "Gênesis 11:27,29"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "adam",
    "to": "eve",
    "relation": "spouse",
    "refs": [
      "Gênesis 2:22–25"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "lamech_cain",
    "to": "adah",
    "relation": "spouse",
    "refs": [
      "Gênesis 4:19"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "lamech_cain",
    "to": "zillah",
    "relation": "spouse",
    "refs": [
      "Gênesis 4:19"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "abraham",
    "to": "sarai",
    "relation": "spouse",
    "refs": [
      "Gênesis 11:29"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "milcah",
    "relation": "spouse",
    "refs": [
      "Gênesis 11:29"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "adah",
    "to": "jabal",
    "relation": "mother",
    "refs": [
      "Gênesis 4:20–22"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "adah",
    "to": "jubal",
    "relation": "mother",
    "refs": [
      "Gênesis 4:20–22"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "zillah",
    "to": "tubalcain",
    "relation": "mother",
    "refs": [
      "Gênesis 4:20–22"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "zillah",
    "to": "naamah",
    "relation": "mother",
    "refs": [
      "Gênesis 4:20–22"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "reumah",
    "relation": "spouse",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "uz_nahor",
    "relation": "parent",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "milcah",
    "to": "uz_nahor",
    "relation": "mother",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "buz",
    "relation": "parent",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "milcah",
    "to": "buz",
    "relation": "mother",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "kemuel",
    "relation": "parent",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "milcah",
    "to": "kemuel",
    "relation": "mother",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "chesed",
    "relation": "parent",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "milcah",
    "to": "chesed",
    "relation": "mother",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "hazo",
    "relation": "parent",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "milcah",
    "to": "hazo",
    "relation": "mother",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "pildash",
    "relation": "parent",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "milcah",
    "to": "pildash",
    "relation": "mother",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "jidlaph",
    "relation": "parent",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "milcah",
    "to": "jidlaph",
    "relation": "mother",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "bethuel",
    "relation": "parent",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "milcah",
    "to": "bethuel",
    "relation": "mother",
    "refs": [
      "Gênesis 22:20–23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "kemuel",
    "to": "aram_kemuel",
    "relation": "parent",
    "refs": [
      "Gênesis 22:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "tebah",
    "relation": "parent",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "reumah",
    "to": "tebah",
    "relation": "mother",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "gaham",
    "relation": "parent",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "reumah",
    "to": "gaham",
    "relation": "mother",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "tahash",
    "relation": "parent",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "reumah",
    "to": "tahash",
    "relation": "mother",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "nahor2",
    "to": "maacah_nahor",
    "relation": "parent",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "reumah",
    "to": "maacah_nahor",
    "relation": "mother",
    "refs": [
      "Gênesis 22:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "bethuel",
    "to": "rebekah",
    "relation": "parent",
    "refs": [
      "Gênesis 22:23; 24:15"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "bethuel",
    "to": "laban",
    "relation": "parent",
    "refs": [
      "Gênesis 28:5"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "laban",
    "to": "leah",
    "relation": "parent",
    "refs": [
      "Gênesis 29:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "laban",
    "to": "rachel",
    "relation": "parent",
    "refs": [
      "Gênesis 29:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "lot",
    "to": "moab",
    "relation": "parent",
    "refs": [
      "Gênesis 19:36–37"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "A narrativa registra que a mãe foi a filha mais velha de Ló."
  },
  {
    "from": "lot",
    "to": "ben_ammi",
    "relation": "parent",
    "refs": [
      "Gênesis 19:36,38"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "A narrativa registra que a mãe foi a filha mais nova de Ló."
  },
  {
    "from": "moab",
    "to": "moabites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 19:37"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "ben_ammi",
    "to": "ammonites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 19:38"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "abraham",
    "to": "hagar",
    "relation": "spouse",
    "refs": [
      "Gênesis 16:3"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "Relação apresentada no contexto de Hagar como serva de Sarai; o atlas usa “cônjuge/contexto” apenas para visualização familiar."
  },
  {
    "from": "abraham",
    "to": "keturah",
    "relation": "spouse",
    "refs": [
      "Gênesis 25:1",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "abraham",
    "to": "ishmael",
    "relation": "parent",
    "refs": [
      "Gênesis 16:15; 25:12",
      "1 Crônicas 1:28"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "hagar",
    "to": "ishmael",
    "relation": "mother",
    "refs": [
      "Gênesis 16:15; 25:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "abraham",
    "to": "isaac",
    "relation": "parent",
    "refs": [
      "Gênesis 21:2–3; 25:19",
      "1 Crônicas 1:28,34"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "sarai",
    "to": "isaac",
    "relation": "mother",
    "refs": [
      "Gênesis 21:1–3"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "isaac",
    "to": "rebekah",
    "relation": "spouse",
    "refs": [
      "Gênesis 24:67; 25:20"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "ishmael",
    "to": "nebaioth",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "kedar_ishmael",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "adbeel",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "mibsam",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "mishma",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "dumah_ishmael",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "massa_ishmael",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "hadad_ishmael",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "tema_ishmael",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "jetur",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "naphish",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "ishmael",
    "to": "kedemah",
    "relation": "parent",
    "refs": [
      "Gênesis 25:13–16",
      "1 Crônicas 1:29–31"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "abraham",
    "to": "zimran",
    "relation": "parent",
    "refs": [
      "Gênesis 25:1–2",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "keturah",
    "to": "zimran",
    "relation": "mother",
    "refs": [
      "Gênesis 25:1–2"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "abraham",
    "to": "jokshan",
    "relation": "parent",
    "refs": [
      "Gênesis 25:1–2",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "keturah",
    "to": "jokshan",
    "relation": "mother",
    "refs": [
      "Gênesis 25:1–2"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "abraham",
    "to": "medan",
    "relation": "parent",
    "refs": [
      "Gênesis 25:1–2",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "keturah",
    "to": "medan",
    "relation": "mother",
    "refs": [
      "Gênesis 25:1–2"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "abraham",
    "to": "midian",
    "relation": "parent",
    "refs": [
      "Gênesis 25:1–2",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "keturah",
    "to": "midian",
    "relation": "mother",
    "refs": [
      "Gênesis 25:1–2"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "abraham",
    "to": "ishbak",
    "relation": "parent",
    "refs": [
      "Gênesis 25:1–2",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "keturah",
    "to": "ishbak",
    "relation": "mother",
    "refs": [
      "Gênesis 25:1–2"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "abraham",
    "to": "shuah_keturah",
    "relation": "parent",
    "refs": [
      "Gênesis 25:1–2",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "keturah",
    "to": "shuah_keturah",
    "relation": "mother",
    "refs": [
      "Gênesis 25:1–2"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jokshan",
    "to": "sheba_jokshan",
    "relation": "parent",
    "refs": [
      "Gênesis 25:3",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "jokshan",
    "to": "dedan_jokshan",
    "relation": "parent",
    "refs": [
      "Gênesis 25:3",
      "1 Crônicas 1:32"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "dedan_jokshan",
    "to": "asshurim",
    "relation": "ancestor",
    "refs": [
      "Gênesis 25:3"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "dedan_jokshan",
    "to": "letushim",
    "relation": "ancestor",
    "refs": [
      "Gênesis 25:3"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "dedan_jokshan",
    "to": "leummim",
    "relation": "ancestor",
    "refs": [
      "Gênesis 25:3"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "midian",
    "to": "ephah_midian",
    "relation": "parent",
    "refs": [
      "Gênesis 25:4",
      "1 Crônicas 1:33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "midian",
    "to": "epher_midian",
    "relation": "parent",
    "refs": [
      "Gênesis 25:4",
      "1 Crônicas 1:33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "midian",
    "to": "hanoch_midian",
    "relation": "parent",
    "refs": [
      "Gênesis 25:4",
      "1 Crônicas 1:33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "midian",
    "to": "abida",
    "relation": "parent",
    "refs": [
      "Gênesis 25:4",
      "1 Crônicas 1:33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "midian",
    "to": "eldaah",
    "relation": "parent",
    "refs": [
      "Gênesis 25:4",
      "1 Crônicas 1:33"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "isaac",
    "to": "esau",
    "relation": "parent",
    "refs": [
      "Gênesis 25:24–26",
      "1 Crônicas 1:34"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "rebekah",
    "to": "esau",
    "relation": "mother",
    "refs": [
      "Gênesis 25:24–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "isaac",
    "to": "jacob",
    "relation": "parent",
    "refs": [
      "Gênesis 25:24–26",
      "1 Crônicas 1:34"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "rebekah",
    "to": "jacob",
    "relation": "mother",
    "refs": [
      "Gênesis 25:24–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "esau",
    "to": "adah_esau",
    "relation": "spouse",
    "refs": [
      "Gênesis 36:2–4"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "esau",
    "to": "oholibamah",
    "relation": "spouse",
    "refs": [
      "Gênesis 36:2,5"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "esau",
    "to": "basemath_esau",
    "relation": "spouse",
    "refs": [
      "Gênesis 36:3–4"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "ishmael",
    "to": "basemath_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:3"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "esau",
    "to": "eliphaz_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:4–5,10",
      "1 Crônicas 1:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "adah_esau",
    "to": "eliphaz_esau",
    "relation": "mother",
    "refs": [
      "Gênesis 36:4–5"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "esau",
    "to": "reuel_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:4–5,10",
      "1 Crônicas 1:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "basemath_esau",
    "to": "reuel_esau",
    "relation": "mother",
    "refs": [
      "Gênesis 36:4–5"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "esau",
    "to": "jeush_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:4–5,10",
      "1 Crônicas 1:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "oholibamah",
    "to": "jeush_esau",
    "relation": "mother",
    "refs": [
      "Gênesis 36:4–5"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "esau",
    "to": "jalam_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:4–5,10",
      "1 Crônicas 1:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "oholibamah",
    "to": "jalam_esau",
    "relation": "mother",
    "refs": [
      "Gênesis 36:4–5"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "esau",
    "to": "korah_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:4–5,10",
      "1 Crônicas 1:35"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "oholibamah",
    "to": "korah_esau",
    "relation": "mother",
    "refs": [
      "Gênesis 36:4–5"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "eliphaz_esau",
    "to": "timna_esau",
    "relation": "spouse",
    "refs": [
      "Gênesis 36:12"
    ],
    "sourceTags": [
      "genesis"
    ],
    "note": "Representação visual de concubinato."
  },
  {
    "from": "eliphaz_esau",
    "to": "teman_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:11",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "eliphaz_esau",
    "to": "omar_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:11",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "eliphaz_esau",
    "to": "zepho_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:11",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "eliphaz_esau",
    "to": "gatam_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:11",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "eliphaz_esau",
    "to": "kenaz_esau",
    "relation": "parent",
    "refs": [
      "Gênesis 36:11",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "eliphaz_esau",
    "to": "amalek",
    "relation": "parent",
    "refs": [
      "Gênesis 36:12",
      "1 Crônicas 1:36"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "timna_esau",
    "to": "amalek",
    "relation": "mother",
    "refs": [
      "Gênesis 36:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "reuel_esau",
    "to": "nahath_reuel",
    "relation": "parent",
    "refs": [
      "Gênesis 36:13",
      "1 Crônicas 1:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "reuel_esau",
    "to": "zerah_reuel",
    "relation": "parent",
    "refs": [
      "Gênesis 36:13",
      "1 Crônicas 1:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "reuel_esau",
    "to": "shammah_reuel",
    "relation": "parent",
    "refs": [
      "Gênesis 36:13",
      "1 Crônicas 1:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "reuel_esau",
    "to": "mizzah",
    "relation": "parent",
    "refs": [
      "Gênesis 36:13",
      "1 Crônicas 1:37"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "esau",
    "to": "edomites",
    "relation": "ancestor",
    "refs": [
      "Gênesis 36:1,8–9"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "leah",
    "relation": "spouse",
    "refs": [
      "Gênesis 29:23–25"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "rachel",
    "relation": "spouse",
    "refs": [
      "Gênesis 29:28–30"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "bilhah",
    "relation": "spouse",
    "refs": [
      "Gênesis 30:3–4"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "zilpah",
    "relation": "spouse",
    "refs": [
      "Gênesis 30:9"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "reuben",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "leah",
    "to": "reuben",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "simeon",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "leah",
    "to": "simeon",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "levi",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "leah",
    "to": "levi",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "judah",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "leah",
    "to": "judah",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "issachar",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "leah",
    "to": "issachar",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "zebulun",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "leah",
    "to": "zebulun",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "dinah",
    "relation": "parent",
    "refs": [
      "Gênesis 30:21; 34:1"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "leah",
    "to": "dinah",
    "relation": "mother",
    "refs": [
      "Gênesis 30:21; 34:1"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "joseph",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "rachel",
    "to": "joseph",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "benjamin",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "rachel",
    "to": "benjamin",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "dan",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "bilhah",
    "to": "dan",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "naphtali",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "bilhah",
    "to": "naphtali",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "gad",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "zilpah",
    "to": "gad",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "jacob",
    "to": "asher",
    "relation": "parent",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26; 1 Crônicas 2:1–2"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "zilpah",
    "to": "asher",
    "relation": "mother",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "reuben",
    "to": "hanoch_reuben",
    "relation": "parent",
    "refs": [
      "Gênesis 46:9"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "reuben",
    "to": "pallu",
    "relation": "parent",
    "refs": [
      "Gênesis 46:9"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "reuben",
    "to": "hezron_reuben",
    "relation": "parent",
    "refs": [
      "Gênesis 46:9"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "reuben",
    "to": "carmi_reuben",
    "relation": "parent",
    "refs": [
      "Gênesis 46:9"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "simeon",
    "to": "jemuel",
    "relation": "parent",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "simeon",
    "to": "jamin",
    "relation": "parent",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "simeon",
    "to": "ohad",
    "relation": "parent",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "simeon",
    "to": "jachin_simeon",
    "relation": "parent",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "simeon",
    "to": "zohar_simeon",
    "relation": "parent",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "simeon",
    "to": "shaul_simeon",
    "relation": "parent",
    "refs": [
      "Gênesis 46:10"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "levi",
    "to": "gershon",
    "relation": "parent",
    "refs": [
      "Gênesis 46:11"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "levi",
    "to": "kohath",
    "relation": "parent",
    "refs": [
      "Gênesis 46:11"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "levi",
    "to": "merari",
    "relation": "parent",
    "refs": [
      "Gênesis 46:11"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "judah",
    "to": "er_judah",
    "relation": "parent",
    "refs": [
      "Gênesis 46:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "judah",
    "to": "onan_judah",
    "relation": "parent",
    "refs": [
      "Gênesis 46:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "judah",
    "to": "shelah_judah",
    "relation": "parent",
    "refs": [
      "Gênesis 46:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "judah",
    "to": "perez",
    "relation": "parent",
    "refs": [
      "Gênesis 46:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "judah",
    "to": "zerah_judah",
    "relation": "parent",
    "refs": [
      "Gênesis 46:12"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "issachar",
    "to": "tola",
    "relation": "parent",
    "refs": [
      "Gênesis 46:13"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "issachar",
    "to": "puah",
    "relation": "parent",
    "refs": [
      "Gênesis 46:13"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "issachar",
    "to": "jashub",
    "relation": "parent",
    "refs": [
      "Gênesis 46:13"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "issachar",
    "to": "shimron",
    "relation": "parent",
    "refs": [
      "Gênesis 46:13"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "zebulun",
    "to": "sered",
    "relation": "parent",
    "refs": [
      "Gênesis 46:14"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "zebulun",
    "to": "elon_zebulun",
    "relation": "parent",
    "refs": [
      "Gênesis 46:14"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "zebulun",
    "to": "jahleel",
    "relation": "parent",
    "refs": [
      "Gênesis 46:14"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "gad",
    "to": "zephon",
    "relation": "parent",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "gad",
    "to": "haggi",
    "relation": "parent",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "gad",
    "to": "shuni",
    "relation": "parent",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "gad",
    "to": "ezbon",
    "relation": "parent",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "gad",
    "to": "eri",
    "relation": "parent",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "gad",
    "to": "arodi",
    "relation": "parent",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "gad",
    "to": "areli",
    "relation": "parent",
    "refs": [
      "Gênesis 46:16"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "asher",
    "to": "imnah",
    "relation": "parent",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "asher",
    "to": "ishvah",
    "relation": "parent",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "asher",
    "to": "ishvi",
    "relation": "parent",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "asher",
    "to": "beriah",
    "relation": "parent",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "asher",
    "to": "serah",
    "relation": "parent",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "benjamin",
    "to": "bela",
    "relation": "parent",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "benjamin",
    "to": "beker",
    "relation": "parent",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "benjamin",
    "to": "ashbel",
    "relation": "parent",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "benjamin",
    "to": "gera_benjamin",
    "relation": "parent",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "benjamin",
    "to": "naaman_benjamin",
    "relation": "parent",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "benjamin",
    "to": "ehi",
    "relation": "parent",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "benjamin",
    "to": "rosh",
    "relation": "parent",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "benjamin",
    "to": "muppim",
    "relation": "parent",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "benjamin",
    "to": "huppim",
    "relation": "parent",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "benjamin",
    "to": "ard",
    "relation": "parent",
    "refs": [
      "Gênesis 46:21"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "dan",
    "to": "hushim",
    "relation": "parent",
    "refs": [
      "Gênesis 46:23"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "naphtali",
    "to": "jahziel",
    "relation": "parent",
    "refs": [
      "Gênesis 46:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "naphtali",
    "to": "guni",
    "relation": "parent",
    "refs": [
      "Gênesis 46:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "naphtali",
    "to": "jezer",
    "relation": "parent",
    "refs": [
      "Gênesis 46:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "naphtali",
    "to": "shillem",
    "relation": "parent",
    "refs": [
      "Gênesis 46:24"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "perez",
    "to": "hezron_perez",
    "relation": "parent",
    "refs": [
      "Gênesis 46:12",
      "1 Crônicas 2:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "perez",
    "to": "hamul",
    "relation": "parent",
    "refs": [
      "Gênesis 46:12",
      "1 Crônicas 2:5"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "beriah",
    "to": "heber_beriah",
    "relation": "parent",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "beriah",
    "to": "malkiel",
    "relation": "parent",
    "refs": [
      "Gênesis 46:17"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "er_judah",
    "to": "tamar",
    "relation": "spouse",
    "refs": [
      "Gênesis 38:6"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "tamar",
    "to": "perez",
    "relation": "mother",
    "refs": [
      "Gênesis 38:27–30",
      "1 Crônicas 2:4"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "tamar",
    "to": "zerah_judah",
    "relation": "mother",
    "refs": [
      "Gênesis 38:27–30",
      "1 Crônicas 2:4"
    ],
    "sourceTags": [
      "genesis",
      "chronicles"
    ]
  },
  {
    "from": "joseph",
    "to": "asenath",
    "relation": "spouse",
    "refs": [
      "Gênesis 41:45"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "joseph",
    "to": "manasseh",
    "relation": "parent",
    "refs": [
      "Gênesis 41:50–52; 46:20"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "asenath",
    "to": "manasseh",
    "relation": "mother",
    "refs": [
      "Gênesis 41:50–52; 46:20"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "joseph",
    "to": "ephraim",
    "relation": "parent",
    "refs": [
      "Gênesis 41:50–52; 46:20"
    ],
    "sourceTags": [
      "genesis"
    ]
  },
  {
    "from": "asenath",
    "to": "ephraim",
    "relation": "mother",
    "refs": [
      "Gênesis 41:50–52; 46:20"
    ],
    "sourceTags": [
      "genesis"
    ]
  }
];

const AGES = {
  "adam": {
    "ageAtNamedDescendant": 130,
    "lifespan": 930,
    "ref": "Gênesis 5:3–5"
  },
  "seth": {
    "ageAtNamedDescendant": 105,
    "lifespan": 912,
    "ref": "Gênesis 5:6–8"
  },
  "enosh": {
    "ageAtNamedDescendant": 90,
    "lifespan": 905,
    "ref": "Gênesis 5:9–11"
  },
  "kenan": {
    "ageAtNamedDescendant": 70,
    "lifespan": 910,
    "ref": "Gênesis 5:12–14"
  },
  "mahalalel": {
    "ageAtNamedDescendant": 65,
    "lifespan": 895,
    "ref": "Gênesis 5:15–17"
  },
  "jared": {
    "ageAtNamedDescendant": 162,
    "lifespan": 962,
    "ref": "Gênesis 5:18–20"
  },
  "enoch_seth": {
    "ageAtNamedDescendant": 65,
    "lifespan": 365,
    "ref": "Gênesis 5:21–24"
  },
  "methuselah": {
    "ageAtNamedDescendant": 187,
    "lifespan": 969,
    "ref": "Gênesis 5:25–27"
  },
  "lamech_seth": {
    "ageAtNamedDescendant": 182,
    "lifespan": 777,
    "ref": "Gênesis 5:28–31"
  },
  "shem": {
    "ageAtNamedDescendant": 100,
    "lifespan": 600,
    "ref": "Gênesis 11:10–11",
    "note": "Arfaxade nasce dois anos depois do Dilúvio."
  },
  "arphaxad": {
    "ageAtNamedDescendant": 35,
    "lifespan": 438,
    "ref": "Gênesis 11:12–13",
    "note": "Valores do texto base NVI/MT; a Septuaginta difere e inclui Cainã."
  },
  "shelah": {
    "ageAtNamedDescendant": 30,
    "lifespan": 433,
    "ref": "Gênesis 11:14–15"
  },
  "eber": {
    "ageAtNamedDescendant": 34,
    "lifespan": 464,
    "ref": "Gênesis 11:16–17"
  },
  "peleg": {
    "ageAtNamedDescendant": 30,
    "lifespan": 239,
    "ref": "Gênesis 11:18–19"
  },
  "reu": {
    "ageAtNamedDescendant": 32,
    "lifespan": 239,
    "ref": "Gênesis 11:20–21"
  },
  "serug": {
    "ageAtNamedDescendant": 30,
    "lifespan": 230,
    "ref": "Gênesis 11:22–23"
  },
  "nahor1": {
    "ageAtNamedDescendant": 29,
    "lifespan": 148,
    "ref": "Gênesis 11:24–25"
  },
  "terah": {
    "lifespan": 205,
    "ref": "Gênesis 11:26,32",
    "note": "Gênesis 11:26 diz que aos 70 Terá havia gerado Abrão, Naor e Harã; não define a idade exata ao nascimento de cada um."
  },
  "sarai": {
    "lifespan": 127,
    "ref": "Gênesis 23:1"
  },
  "abraham": {
    "ageAtNamedDescendant": 100,
    "lifespan": 175,
    "ref": "Gênesis 21:5; 25:7",
    "note": "Abraão tinha 86 anos quando Ismael nasceu (Gênesis 16:16); 100 quando Isaque nasceu."
  },
  "ishmael": {
    "lifespan": 137,
    "ref": "Gênesis 25:17"
  },
  "isaac": {
    "ageAtNamedDescendant": 60,
    "lifespan": 180,
    "ref": "Gênesis 25:26; 35:28",
    "note": "Tinha 60 anos quando nasceram Esaú e Jacó."
  },
  "jacob": {
    "lifespan": 147,
    "ref": "Gênesis 47:28"
  },
  "joseph": {
    "lifespan": 110,
    "ref": "Gênesis 50:26"
  }
};

const EVENTS = [
  {
    "id": "creation",
    "title": "Criação do homem",
    "stage": "Narrativa primeva",
    "order": 0,
    "refs": [
      "Gênesis 1–2"
    ],
    "summary": "Ponto inicial narrativo do atlas; a genealogia nomeada começa com Adão."
  },
  {
    "id": "cainabel",
    "title": "Caim e Abel",
    "stage": "Narrativa primeva",
    "order": 1,
    "refs": [
      "Gênesis 4:1–16"
    ],
    "summary": "A narrativa de Caim e Abel antecede o registro da linhagem de Caim e o nascimento de Sete."
  },
  {
    "id": "cainline",
    "title": "Linhagem de Caim",
    "stage": "Antes do Dilúvio",
    "order": 2,
    "refs": [
      "Gênesis 4:17–24"
    ],
    "summary": "Enoque, Irade, Meujael, Metusael, Lameque e seus filhos."
  },
  {
    "id": "sethline",
    "title": "Linhagem de Sete",
    "stage": "Antes do Dilúvio",
    "order": 3,
    "refs": [
      "Gênesis 4:25–26; 5"
    ],
    "summary": "A sequência genealógica de Adão até Noé, com idades e longevidades."
  },
  {
    "id": "flood",
    "title": "Dilúvio",
    "stage": "Noé",
    "order": 4,
    "refs": [
      "Gênesis 6–9"
    ],
    "summary": "Depois do Dilúvio, Gênesis reorganiza a narrativa a partir de Sem, Cam e Jafé."
  },
  {
    "id": "nations",
    "title": "Tabela das Nações",
    "stage": "Pós-Dilúvio",
    "order": 5,
    "refs": [
      "Gênesis 10",
      "1 Crônicas 1:5–23"
    ],
    "summary": "Povos, clãs e linhagens associados aos três filhos de Noé."
  },
  {
    "id": "babel",
    "title": "Babel",
    "stage": "Pós-Dilúvio",
    "order": 6,
    "refs": [
      "Gênesis 11:1–9"
    ],
    "summary": "A narrativa da dispersão e confusão das línguas precede a retomada da linhagem de Sem."
  },
  {
    "id": "shemline",
    "title": "Sem até Terá",
    "stage": "Pós-Dilúvio",
    "order": 7,
    "refs": [
      "Gênesis 11:10–26",
      "1 Crônicas 1:24–27"
    ],
    "summary": "A genealogia volta a estreitar o foco de Sem até a família de Terá."
  },
  {
    "id": "urharan",
    "title": "Ur → Harã",
    "stage": "Patriarcas",
    "order": 8,
    "refs": [
      "Gênesis 11:27–32"
    ],
    "summary": "Terá parte de Ur com Abrão, Sarai e Ló rumo a Canaã, estabelecendo-se em Harã."
  },
  {
    "id": "abram",
    "title": "Chamado de Abrão",
    "stage": "Patriarcas",
    "order": 9,
    "refs": [
      "Gênesis 12:1–9"
    ],
    "summary": "Próxima etapa do projeto: expansão da família de Abraão e das linhas patriarcais."
  },
  {
    "order": 12,
    "stage": "Patriarcas",
    "title": "Sodoma e a linhagem de Ló",
    "summary": "Após a destruição de Sodoma e Gomorra, a narrativa registra Moabe e Ben-Ami como filhos de Ló e ancestrais de moabitas e amonitas.",
    "refs": [
      "Gênesis 19:1–38"
    ],
    "people": [
      "lot",
      "moab",
      "ben_ammi"
    ]
  },
  {
    "order": 13,
    "stage": "Patriarcas",
    "title": "Abraão e Sara: novos nomes",
    "summary": "Abrão e Sarai recebem os nomes Abraão e Sara no contexto da aliança.",
    "refs": [
      "Gênesis 17:1–16"
    ],
    "people": [
      "abraham",
      "sarai"
    ]
  },
  {
    "order": 14,
    "stage": "Patriarcas",
    "title": "Nascimento de Isaque",
    "summary": "Sara dá à luz Isaque; a linha narrativa prossegue por ele.",
    "refs": [
      "Gênesis 21:1–7"
    ],
    "people": [
      "isaac",
      "sarai",
      "abraham"
    ]
  },
  {
    "order": 15,
    "stage": "Patriarcas",
    "title": "Família de Ismael e Quetura",
    "summary": "Gênesis 25 registra os doze filhos de Ismael e os descendentes de Abraão por Quetura.",
    "refs": [
      "Gênesis 25:1–18"
    ],
    "people": [
      "ishmael",
      "keturah"
    ]
  },
  {
    "order": 16,
    "stage": "Patriarcas",
    "title": "Esaú e Jacó",
    "summary": "Isaque e Rebeca têm os gêmeos Esaú e Jacó; Jacó será chamado Israel.",
    "refs": [
      "Gênesis 25:19–34; 32:28; 35:10"
    ],
    "people": [
      "isaac",
      "rebekah",
      "esau",
      "jacob"
    ]
  },
  {
    "order": 17,
    "stage": "Israel",
    "title": "Doze filhos de Jacó",
    "summary": "Lia, Raquel, Bila e Zilpa aparecem como mães dos doze filhos de Jacó; Diná também é nomeada.",
    "refs": [
      "Gênesis 29:31–35; 30:1–24; 35:22–26"
    ],
    "people": [
      "jacob"
    ]
  },
  {
    "order": 18,
    "stage": "José",
    "title": "José no Egito",
    "summary": "José é vendido por seus irmãos, chega ao Egito e posteriormente se torna autoridade durante a crise de fome.",
    "refs": [
      "Gênesis 37; 39–41"
    ],
    "people": [
      "joseph"
    ]
  },
  {
    "order": 19,
    "stage": "Egito",
    "title": "Família de Israel desce ao Egito",
    "summary": "Gênesis 46 lista os filhos, netos e bisnetos associados à ida da família de Jacó para o Egito.",
    "refs": [
      "Gênesis 46:5–27"
    ],
    "people": [
      "jacob",
      "joseph"
    ]
  }
];

const VIEW_PRESETS = {
  "all": {
    "label": "Tudo: Gênesis 1–11"
  },
  "mainline": {
    "label": "Linha principal: Adão → Israel",
    "ids": [
      "adam",
      "seth",
      "enosh",
      "kenan",
      "mahalalel",
      "jared",
      "enoch_seth",
      "methuselah",
      "lamech_seth",
      "noah",
      "shem",
      "arphaxad",
      "cainan2",
      "shelah",
      "eber",
      "peleg",
      "reu",
      "serug",
      "nahor1",
      "terah",
      "abraham",
      "isaac",
      "jacob"
    ]
  },
  "cain": {
    "label": "Ramo de Caim",
    "ids": [
      "adam",
      "cain",
      "enoch_cain",
      "irad",
      "mehujael",
      "methushael",
      "lamech_cain",
      "jabal",
      "jubal",
      "tubalcain",
      "naamah",
      "adah",
      "zillah"
    ]
  },
  "nations": {
    "label": "Tabela das Nações",
    "root": "noah",
    "depthStart": 0
  },
  "terah": {
    "label": "Família de Terá",
    "ids": [
      "abida",
      "abraham",
      "adah_esau",
      "adbeel",
      "amalek",
      "ammonites",
      "aram_kemuel",
      "ard",
      "areli",
      "arodi",
      "asenath",
      "ashbel",
      "asher",
      "asshurim",
      "basemath_esau",
      "beker",
      "bela",
      "ben_ammi",
      "benjamin",
      "beriah",
      "bethuel",
      "bilhah",
      "buz",
      "carmi_reuben",
      "chesed",
      "dan",
      "dedan_jokshan",
      "dinah",
      "dumah_ishmael",
      "edomites",
      "ehi",
      "eldaah",
      "eliphaz_esau",
      "elon_zebulun",
      "ephah_midian",
      "epher_midian",
      "ephraim",
      "er_judah",
      "eri",
      "esau",
      "ezbon",
      "gad",
      "gaham",
      "gatam_esau",
      "gera_benjamin",
      "gershon",
      "guni",
      "hadad_ishmael",
      "hagar",
      "haggi",
      "hamul",
      "hanoch_midian",
      "hanoch_reuben",
      "haran",
      "hazo",
      "heber_beriah",
      "hezron_perez",
      "hezron_reuben",
      "huppim",
      "hushim",
      "imnah",
      "isaac",
      "iscah",
      "ishbak",
      "ishmael",
      "ishvah",
      "ishvi",
      "issachar",
      "jachin_simeon",
      "jacob",
      "jahleel",
      "jahziel",
      "jalam_esau",
      "jamin",
      "jashub",
      "jemuel",
      "jetur",
      "jeush_esau",
      "jezer",
      "jidlaph",
      "jokshan",
      "joseph",
      "judah",
      "kedar_ishmael",
      "kedemah",
      "kemuel",
      "kenaz_esau",
      "keturah",
      "kohath",
      "korah_esau",
      "laban",
      "leah",
      "letushim",
      "leummim",
      "levi",
      "lot",
      "maacah_nahor",
      "malkiel",
      "manasseh",
      "massa_ishmael",
      "medan",
      "merari",
      "mibsam",
      "midian",
      "milcah",
      "mishma",
      "mizzah",
      "moab",
      "moabites",
      "muppim",
      "naaman_benjamin",
      "nahath_reuel",
      "nahor2",
      "naphish",
      "naphtali",
      "nebaioth",
      "ohad",
      "oholibamah",
      "omar_esau",
      "onan_judah",
      "pallu",
      "perez",
      "pildash",
      "puah",
      "rachel",
      "rebekah",
      "reuben",
      "reuel_esau",
      "reumah",
      "rosh",
      "sarai",
      "serah",
      "sered",
      "shammah_reuel",
      "shaul_simeon",
      "sheba_jokshan",
      "shelah_judah",
      "shillem",
      "shimron",
      "shuah_keturah",
      "shuni",
      "simeon",
      "tahash",
      "tamar",
      "tebah",
      "tema_ishmael",
      "teman_esau",
      "terah",
      "timna_esau",
      "tola",
      "uz_nahor",
      "zebulun",
      "zepho_esau",
      "zephon",
      "zerah_judah",
      "zerah_reuel",
      "zilpah",
      "zimran",
      "zohar_simeon"
    ]
  },
  "abraham": {
    "label": "Família de Abraão",
    "ids": [
      "abida",
      "abraham",
      "adah_esau",
      "adbeel",
      "amalek",
      "ard",
      "areli",
      "arodi",
      "asenath",
      "ashbel",
      "asher",
      "asshurim",
      "basemath_esau",
      "beker",
      "bela",
      "benjamin",
      "beriah",
      "bilhah",
      "carmi_reuben",
      "dan",
      "dedan_jokshan",
      "dinah",
      "dumah_ishmael",
      "edomites",
      "ehi",
      "eldaah",
      "eliphaz_esau",
      "elon_zebulun",
      "ephah_midian",
      "epher_midian",
      "ephraim",
      "er_judah",
      "eri",
      "esau",
      "ezbon",
      "gad",
      "gatam_esau",
      "gera_benjamin",
      "gershon",
      "guni",
      "hadad_ishmael",
      "hagar",
      "haggi",
      "hamul",
      "hanoch_midian",
      "hanoch_reuben",
      "heber_beriah",
      "hezron_perez",
      "hezron_reuben",
      "huppim",
      "hushim",
      "imnah",
      "isaac",
      "ishbak",
      "ishmael",
      "ishvah",
      "ishvi",
      "issachar",
      "jachin_simeon",
      "jacob",
      "jahleel",
      "jahziel",
      "jalam_esau",
      "jamin",
      "jashub",
      "jemuel",
      "jetur",
      "jeush_esau",
      "jezer",
      "jokshan",
      "joseph",
      "judah",
      "kedar_ishmael",
      "kedemah",
      "kenaz_esau",
      "keturah",
      "kohath",
      "korah_esau",
      "leah",
      "letushim",
      "leummim",
      "levi",
      "malkiel",
      "manasseh",
      "massa_ishmael",
      "medan",
      "merari",
      "mibsam",
      "midian",
      "mishma",
      "mizzah",
      "muppim",
      "naaman_benjamin",
      "nahath_reuel",
      "naphish",
      "naphtali",
      "nebaioth",
      "ohad",
      "oholibamah",
      "omar_esau",
      "onan_judah",
      "pallu",
      "perez",
      "puah",
      "rachel",
      "rebekah",
      "reuben",
      "reuel_esau",
      "rosh",
      "sarai",
      "serah",
      "sered",
      "shammah_reuel",
      "shaul_simeon",
      "sheba_jokshan",
      "shelah_judah",
      "shillem",
      "shimron",
      "shuah_keturah",
      "shuni",
      "simeon",
      "tamar",
      "tema_ishmael",
      "teman_esau",
      "timna_esau",
      "tola",
      "zebulun",
      "zepho_esau",
      "zephon",
      "zerah_judah",
      "zerah_reuel",
      "zilpah",
      "zimran",
      "zohar_simeon"
    ]
  },
  "ishmael": {
    "label": "Ramo de Ismael",
    "ids": [
      "abraham",
      "adbeel",
      "basemath_esau",
      "dumah_ishmael",
      "hadad_ishmael",
      "hagar",
      "ishmael",
      "jetur",
      "kedar_ishmael",
      "kedemah",
      "massa_ishmael",
      "mibsam",
      "mishma",
      "naphish",
      "nebaioth",
      "tema_ishmael"
    ]
  },
  "esau": {
    "label": "Esaú / Edom",
    "ids": [
      "adah_esau",
      "amalek",
      "basemath_esau",
      "edomites",
      "eliphaz_esau",
      "esau",
      "gatam_esau",
      "isaac",
      "ishmael",
      "jalam_esau",
      "jeush_esau",
      "kenaz_esau",
      "korah_esau",
      "mizzah",
      "nahath_reuel",
      "oholibamah",
      "omar_esau",
      "rebekah",
      "reuel_esau",
      "shammah_reuel",
      "teman_esau",
      "timna_esau",
      "zepho_esau",
      "zerah_reuel"
    ]
  },
  "israel": {
    "label": "Jacó / Israel e os doze filhos",
    "ids": [
      "asher",
      "benjamin",
      "bilhah",
      "dan",
      "dinah",
      "gad",
      "isaac",
      "issachar",
      "jacob",
      "joseph",
      "judah",
      "leah",
      "levi",
      "naphtali",
      "rachel",
      "rebekah",
      "reuben",
      "simeon",
      "zebulun",
      "zilpah"
    ]
  },
  "egypt": {
    "label": "Família que entra no Egito",
    "ids": [
      "ard",
      "areli",
      "arodi",
      "asenath",
      "ashbel",
      "asher",
      "beker",
      "bela",
      "benjamin",
      "beriah",
      "bilhah",
      "carmi_reuben",
      "dan",
      "dinah",
      "ehi",
      "elon_zebulun",
      "ephraim",
      "er_judah",
      "eri",
      "ezbon",
      "gad",
      "gera_benjamin",
      "gershon",
      "guni",
      "haggi",
      "hamul",
      "hanoch_reuben",
      "heber_beriah",
      "hezron_perez",
      "hezron_reuben",
      "huppim",
      "hushim",
      "imnah",
      "ishvah",
      "ishvi",
      "issachar",
      "jachin_simeon",
      "jacob",
      "jahleel",
      "jahziel",
      "jamin",
      "jashub",
      "jemuel",
      "jezer",
      "joseph",
      "judah",
      "kohath",
      "leah",
      "levi",
      "malkiel",
      "manasseh",
      "merari",
      "muppim",
      "naaman_benjamin",
      "naphtali",
      "ohad",
      "onan_judah",
      "pallu",
      "perez",
      "puah",
      "rachel",
      "reuben",
      "rosh",
      "serah",
      "sered",
      "shaul_simeon",
      "shelah_judah",
      "shillem",
      "shimron",
      "shuni",
      "simeon",
      "tamar",
      "tola",
      "zebulun",
      "zephon",
      "zerah_judah",
      "zilpah",
      "zohar_simeon"
    ]
  }
};

