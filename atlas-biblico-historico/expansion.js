// Atlas Bíblico-Histórico — expansão v0.4
// Mantém a base v0.3 e acrescenta Judá → Davi → linhas de Mateus/Lucas,
// linha real de 1 Crônicas 3, além de história da Igreja e tradições.

const EXTRA_PEOPLE = [
  {
    "id": "ram",
    "name": "Rão",
    "entityType": "person",
    "refs": [
      "Rute 4:19",
      "1 Crônicas 2:9-10",
      "Mateus 1:3-4",
      "Lucas 3:33"
    ],
    "sourceTags": [
      "ruth",
      "chronicles",
      "matthew",
      "luke"
    ],
    "aliases": [
      "Ram",
      "Arão"
    ],
    "summary": "Descendente de Hezrom e ancestral de Davi; a forma do nome varia entre traduções e tradições textuais."
  },
  {
    "id": "amminadab",
    "name": "Aminadabe",
    "entityType": "person",
    "refs": [
      "Rute 4:19-20",
      "1 Crônicas 2:10",
      "Mateus 1:4",
      "Lucas 3:33"
    ],
    "sourceTags": [
      "ruth",
      "chronicles",
      "matthew",
      "luke"
    ]
  },
  {
    "id": "nahshon",
    "name": "Naassom",
    "entityType": "person",
    "refs": [
      "Rute 4:20",
      "1 Crônicas 2:10",
      "Mateus 1:4",
      "Lucas 3:32-33"
    ],
    "sourceTags": [
      "ruth",
      "chronicles",
      "matthew",
      "luke"
    ]
  },
  {
    "id": "salmon",
    "name": "Salmom",
    "entityType": "person",
    "refs": [
      "Rute 4:20-21",
      "1 Crônicas 2:11",
      "Mateus 1:4-5",
      "Lucas 3:32"
    ],
    "sourceTags": [
      "ruth",
      "chronicles",
      "matthew",
      "luke"
    ],
    "aliases": [
      "Salmon",
      "Salá (alguns mss. de Lucas 3:32)"
    ],
    "note": "Lucas 3:32 possui variante manuscrita em alguns testemunhos."
  },
  {
    "id": "rahab",
    "name": "Raabe",
    "entityType": "person",
    "refs": [
      "Mateus 1:5"
    ],
    "sourceTags": [
      "matthew"
    ],
    "summary": "Mencionada em Mateus como mãe de Boaz."
  },
  {
    "id": "boaz",
    "name": "Boaz",
    "entityType": "person",
    "refs": [
      "Rute 4:21",
      "1 Crônicas 2:11-12",
      "Mateus 1:5",
      "Lucas 3:32"
    ],
    "sourceTags": [
      "ruth",
      "chronicles",
      "matthew",
      "luke"
    ]
  },
  {
    "id": "ruth",
    "name": "Rute",
    "entityType": "person",
    "refs": [
      "Rute 4:13,17",
      "Mateus 1:5"
    ],
    "sourceTags": [
      "ruth",
      "matthew"
    ],
    "summary": "Moabita; mãe de Obede e figura central do livro de Rute."
  },
  {
    "id": "obed",
    "name": "Obede",
    "entityType": "person",
    "refs": [
      "Rute 4:17,21-22",
      "1 Crônicas 2:12",
      "Mateus 1:5",
      "Lucas 3:32"
    ],
    "sourceTags": [
      "ruth",
      "chronicles",
      "matthew",
      "luke"
    ]
  },
  {
    "id": "jesse",
    "name": "Jessé",
    "entityType": "person",
    "refs": [
      "Rute 4:22",
      "1 Samuel 16",
      "1 Crônicas 2:12-13",
      "Mateus 1:5-6",
      "Lucas 3:32"
    ],
    "sourceTags": [
      "ruth",
      "samuel",
      "chronicles",
      "matthew",
      "luke"
    ]
  },
  {
    "id": "david",
    "name": "Davi",
    "entityType": "person",
    "refs": [
      "1 Samuel 16–31",
      "2 Samuel",
      "1 Crônicas 2:15; 3:1-9",
      "Mateus 1:6",
      "Lucas 3:31"
    ],
    "sourceTags": [
      "samuel",
      "chronicles",
      "matthew",
      "luke"
    ],
    "summary": "Rei de Israel e ponto de bifurcação das genealogias de Jesus: Mateus segue por Salomão; Lucas segue por Natã."
  },
  {
    "id": "bathsheba",
    "name": "Bate-Seba",
    "entityType": "person",
    "refs": [
      "2 Samuel 11–12",
      "1 Crônicas 3:5",
      "Mateus 1:6"
    ],
    "sourceTags": [
      "samuel",
      "chronicles",
      "matthew"
    ],
    "aliases": [
      "Bate-Sua"
    ],
    "summary": "Esposa de Davi; mãe de Salomão e de outros filhos listados em 1 Crônicas 3."
  },
  {
    "id": "nathan_david",
    "name": "Natã",
    "entityType": "person",
    "refs": [
      "2 Samuel 5:14",
      "1 Crônicas 3:5",
      "Lucas 3:31"
    ],
    "sourceTags": [
      "samuel",
      "chronicles",
      "luke"
    ],
    "summary": "Filho de Davi; Lucas 3 segue a genealogia de Jesus por esta linha."
  },
  {
    "id": "solomon",
    "name": "Salomão",
    "entityType": "person",
    "refs": [
      "2 Samuel 12:24",
      "1 Crônicas 3:5,10",
      "Mateus 1:6-7"
    ],
    "sourceTags": [
      "samuel",
      "chronicles",
      "matthew"
    ],
    "summary": "Filho de Davi; a linha real de 1 Crônicas 3 e a genealogia de Mateus seguem por ele."
  },
  {
    "id": "amnon",
    "name": "Amnom",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:1"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da família de Davi registrada em 1 Crônicas 3."
  },
  {
    "id": "daniel_david",
    "name": "Daniel / Quileabe",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:1; 2 Samuel 3:3"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da família de Davi registrada em 1 Crônicas 3."
  },
  {
    "id": "absalom",
    "name": "Absalão",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:2"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da família de Davi registrada em 1 Crônicas 3."
  },
  {
    "id": "adonijah",
    "name": "Adonias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:2"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da família de Davi registrada em 1 Crônicas 3."
  },
  {
    "id": "shephatiah_david",
    "name": "Sefatias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:3"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da família de Davi registrada em 1 Crônicas 3."
  },
  {
    "id": "ithream",
    "name": "Itreão",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:3"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da família de Davi registrada em 1 Crônicas 3."
  },
  {
    "id": "shimea_david",
    "name": "Siméia",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:5"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da família de Davi registrada em 1 Crônicas 3."
  },
  {
    "id": "shobab_david",
    "name": "Sobabe",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:5"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da família de Davi registrada em 1 Crônicas 3."
  },
  {
    "id": "tamar_david",
    "name": "Tamar",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:9"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da família de Davi registrada em 1 Crônicas 3."
  },
  {
    "id": "rehoboam",
    "name": "Roboão",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "abijah_king",
    "name": "Abias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "asa_king",
    "name": "Asa",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "jehoshaphat",
    "name": "Josafá",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "joram_king",
    "name": "Jorão",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "ahaziah_king",
    "name": "Acazias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "joash_king",
    "name": "Joás",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "amaziah_king",
    "name": "Amazias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "uzziah",
    "name": "Uzias / Azarias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica.",
    "note": "Mateus 1 comprime a sequência entre Jorão e Uzias, omitindo nomes que aparecem na linha real de 1 Crônicas."
  },
  {
    "id": "jotham_king",
    "name": "Jotão",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "ahaz_king",
    "name": "Acaz",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "hezekiah_king",
    "name": "Ezequias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "manasseh_king",
    "name": "Manassés",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "amon_king",
    "name": "Amom",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "josiah_king",
    "name": "Josias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "jehoiakim",
    "name": "Jeoaquim",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da linha real davídica."
  },
  {
    "id": "jeconiah",
    "name": "Jeconias / Joaquim",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ],
    "summary": "Integrante da linha real davídica.",
    "note": "A forma do nome e a relação com Jeoaquim/Jeconias variam em traduções e notas textuais de Mateus 1:11."
  },
  {
    "id": "shealtiel",
    "name": "Salatiel",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13",
      "Lucas 3:27"
    ],
    "sourceTags": [
      "chronicles",
      "matthew",
      "luke"
    ],
    "summary": "Integrante da linha davídica/real e das genealogias pós-exílicas."
  },
  {
    "id": "pedaiah",
    "name": "Pedaías",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Integrante da linha davídica/real e das genealogias pós-exílicas."
  },
  {
    "id": "zerubbabel",
    "name": "Zorobabel",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:10-19",
      "Mateus 1:7-13",
      "Lucas 3:27"
    ],
    "sourceTags": [
      "chronicles",
      "matthew",
      "luke"
    ],
    "summary": "Integrante da linha davídica/real e das genealogias pós-exílicas.",
    "note": "1 Crônicas 3:19 apresenta Zorobabel entre os filhos de Pedaías; Esdras/Neemias/Profetas e as genealogias do NT o associam a Salatiel. O atlas registra ambas as tradições de relação."
  },
  {
    "id": "meshullam_zerubbabel",
    "name": "Mesulão",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "hananiah_zerubbabel",
    "name": "Hananias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "shelomith_zerubbabel",
    "name": "Selomite",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "hashubah",
    "name": "Hasubá",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "ohel",
    "name": "Oel",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "berechiah_zerubbabel",
    "name": "Berequias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "hasadiah",
    "name": "Hasadias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "jushab_hesed",
    "name": "Jusabe-Hesede",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "pelatiah",
    "name": "Pelatias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "jeshaiah",
    "name": "Jesaías",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "rephaiah",
    "name": "Refaías",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "arnan",
    "name": "Arnã",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "obadiah_post",
    "name": "Obadias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "shecaniah",
    "name": "Secanias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "shemaiah_post",
    "name": "Semaías",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "neariah",
    "name": "Nearias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "elioenai",
    "name": "Elioenai",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "hodaviah",
    "name": "Hodavias",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "eliashib_post",
    "name": "Eliasibe",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "pelaiah",
    "name": "Pelaías",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "akkub_post",
    "name": "Acube",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "johanan_post",
    "name": "Joanã",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "delaiah",
    "name": "Delaías",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "anani",
    "name": "Anani",
    "entityType": "person",
    "refs": [
      "1 Crônicas 3:19-24"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "summary": "Nome da genealogia davídica pós-exílica em 1 Crônicas 3."
  },
  {
    "id": "abiud",
    "name": "Abiúde",
    "entityType": "person",
    "refs": [
      "Mateus 1:13-16"
    ],
    "sourceTags": [
      "matthew"
    ],
    "summary": "Nome da genealogia de Jesus em Mateus 1."
  },
  {
    "id": "eliakim_matthew",
    "name": "Eliaquim",
    "entityType": "person",
    "refs": [
      "Mateus 1:13-16"
    ],
    "sourceTags": [
      "matthew"
    ],
    "summary": "Nome da genealogia de Jesus em Mateus 1."
  },
  {
    "id": "azor",
    "name": "Azor",
    "entityType": "person",
    "refs": [
      "Mateus 1:13-16"
    ],
    "sourceTags": [
      "matthew"
    ],
    "summary": "Nome da genealogia de Jesus em Mateus 1."
  },
  {
    "id": "zadok_matthew",
    "name": "Sadoque",
    "entityType": "person",
    "refs": [
      "Mateus 1:13-16"
    ],
    "sourceTags": [
      "matthew"
    ],
    "summary": "Nome da genealogia de Jesus em Mateus 1."
  },
  {
    "id": "akim",
    "name": "Aquim",
    "entityType": "person",
    "refs": [
      "Mateus 1:13-16"
    ],
    "sourceTags": [
      "matthew"
    ],
    "summary": "Nome da genealogia de Jesus em Mateus 1."
  },
  {
    "id": "eliud",
    "name": "Eliúde",
    "entityType": "person",
    "refs": [
      "Mateus 1:13-16"
    ],
    "sourceTags": [
      "matthew"
    ],
    "summary": "Nome da genealogia de Jesus em Mateus 1."
  },
  {
    "id": "eleazar_matthew",
    "name": "Eleazar",
    "entityType": "person",
    "refs": [
      "Mateus 1:13-16"
    ],
    "sourceTags": [
      "matthew"
    ],
    "summary": "Nome da genealogia de Jesus em Mateus 1."
  },
  {
    "id": "matthan",
    "name": "Matã",
    "entityType": "person",
    "refs": [
      "Mateus 1:13-16"
    ],
    "sourceTags": [
      "matthew"
    ],
    "summary": "Nome da genealogia de Jesus em Mateus 1."
  },
  {
    "id": "jacob_matthew",
    "name": "Jacó",
    "entityType": "person",
    "refs": [
      "Mateus 1:13-16"
    ],
    "sourceTags": [
      "matthew"
    ],
    "summary": "Nome da genealogia de Jesus em Mateus 1."
  },
  {
    "id": "joseph_mary",
    "name": "José",
    "entityType": "person",
    "refs": [
      "Mateus 1:16",
      "Lucas 3:23"
    ],
    "sourceTags": [
      "matthew",
      "luke"
    ],
    "summary": "Marido de Maria. Mateus e Lucas o colocam imediatamente antes de Jesus em suas genealogias, mas com pais diferentes nas duas listas.",
    "note": "Mateus 1:16 chama Jacó de pai de José; Lucas 3:23 apresenta José como 'filho de Eli'. As explicações históricas para a divergência são tratadas como hipóteses, não como dado textual."
  },
  {
    "id": "mary",
    "name": "Maria",
    "entityType": "person",
    "refs": [
      "Mateus 1:16-25",
      "Lucas 1–2"
    ],
    "sourceTags": [
      "matthew",
      "luke"
    ],
    "summary": "Mãe de Jesus; Mateus 1:16 formula explicitamente que Jesus nasceu de Maria."
  },
  {
    "id": "jesus",
    "name": "Jesus",
    "entityType": "person",
    "refs": [
      "Mateus 1:16",
      "Lucas 3:23-38"
    ],
    "sourceTags": [
      "matthew",
      "luke"
    ],
    "aliases": [
      "Jesus Cristo",
      "Messias"
    ],
    "summary": "Ponto culminante das genealogias de Mateus e Lucas. O atlas não representa José como pai biológico de Jesus."
  },
  {
    "id": "mattatha",
    "name": "Matatá",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "menna",
    "name": "Mená",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "melea",
    "name": "Meleá",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "eliakim_luke",
    "name": "Eliaquim",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "jonam",
    "name": "Jonã",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "joseph_luke_1",
    "name": "José",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "judah_luke",
    "name": "Judá",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "simeon_luke",
    "name": "Simeão",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "levi_luke_1",
    "name": "Levi",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "matthat_luke_1",
    "name": "Matate",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "jorim",
    "name": "Jorim",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "eliezer_luke",
    "name": "Eliézer",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "joshua_luke",
    "name": "Josué",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "er_luke",
    "name": "Er",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "elmadam",
    "name": "Elmadã",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "cosam",
    "name": "Cosã",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "addi",
    "name": "Adi",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "melchi_luke_1",
    "name": "Melqui",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "neri",
    "name": "Neri",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "rhesa",
    "name": "Ressa",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "joanan_luke",
    "name": "Joanã",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "joda",
    "name": "Jodá",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "josech",
    "name": "Joseque",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "semein",
    "name": "Semei",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "mattathias_luke_1",
    "name": "Matatias",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "maath",
    "name": "Máate",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "naggai",
    "name": "Nagai",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "esli",
    "name": "Esli",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "nahum_luke",
    "name": "Naum",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "amos_luke",
    "name": "Amós",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "mattathias_luke_2",
    "name": "Matatias",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "joseph_luke_2",
    "name": "José",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "jannai",
    "name": "Janai",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "melchi_luke_2",
    "name": "Melqui",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "levi_luke_2",
    "name": "Levi",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "matthat_luke_2",
    "name": "Matate",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  },
  {
    "id": "heli",
    "name": "Eli",
    "entityType": "person",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "summary": "Nome da genealogia de Jesus em Lucas 3."
  }
];
const EXTRA_RELATIONSHIPS = [
  {
    "from": "hezron_perez",
    "to": "ram",
    "relation": "parent",
    "refs": [
      "Rute 4:18-22",
      "1 Crônicas 2:9-15"
    ],
    "sourceTags": [
      "ruth",
      "chronicles"
    ]
  },
  {
    "from": "ram",
    "to": "amminadab",
    "relation": "parent",
    "refs": [
      "Rute 4:18-22",
      "1 Crônicas 2:9-15"
    ],
    "sourceTags": [
      "ruth",
      "chronicles"
    ]
  },
  {
    "from": "amminadab",
    "to": "nahshon",
    "relation": "parent",
    "refs": [
      "Rute 4:18-22",
      "1 Crônicas 2:9-15"
    ],
    "sourceTags": [
      "ruth",
      "chronicles"
    ]
  },
  {
    "from": "nahshon",
    "to": "salmon",
    "relation": "parent",
    "refs": [
      "Rute 4:18-22",
      "1 Crônicas 2:9-15"
    ],
    "sourceTags": [
      "ruth",
      "chronicles"
    ]
  },
  {
    "from": "salmon",
    "to": "boaz",
    "relation": "parent",
    "refs": [
      "Rute 4:18-22",
      "1 Crônicas 2:9-15"
    ],
    "sourceTags": [
      "ruth",
      "chronicles"
    ]
  },
  {
    "from": "boaz",
    "to": "obed",
    "relation": "parent",
    "refs": [
      "Rute 4:18-22",
      "1 Crônicas 2:9-15"
    ],
    "sourceTags": [
      "ruth",
      "chronicles"
    ]
  },
  {
    "from": "obed",
    "to": "jesse",
    "relation": "parent",
    "refs": [
      "Rute 4:18-22",
      "1 Crônicas 2:9-15"
    ],
    "sourceTags": [
      "ruth",
      "chronicles"
    ]
  },
  {
    "from": "jesse",
    "to": "david",
    "relation": "parent",
    "refs": [
      "Rute 4:18-22",
      "1 Crônicas 2:9-15"
    ],
    "sourceTags": [
      "ruth",
      "chronicles"
    ]
  },
  {
    "from": "rahab",
    "to": "boaz",
    "relation": "mother",
    "refs": [
      "Mateus 1:5"
    ],
    "sourceTags": [
      "matthew"
    ]
  },
  {
    "from": "ruth",
    "to": "obed",
    "relation": "mother",
    "refs": [
      "Rute 4:13,17",
      "Mateus 1:5"
    ],
    "sourceTags": [
      "ruth",
      "matthew"
    ]
  },
  {
    "from": "david",
    "to": "amnon",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:1-9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "david",
    "to": "daniel_david",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:1-9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "david",
    "to": "absalom",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:1-9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "david",
    "to": "adonijah",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:1-9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "david",
    "to": "shephatiah_david",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:1-9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "david",
    "to": "ithream",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:1-9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "david",
    "to": "shimea_david",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:1-9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "david",
    "to": "shobab_david",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:1-9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "david",
    "to": "nathan_david",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:1-9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "david",
    "to": "solomon",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:1-9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "bathsheba",
    "to": "solomon",
    "relation": "mother",
    "refs": [
      "1 Crônicas 3:5",
      "Mateus 1:6"
    ],
    "sourceTags": [
      "chronicles",
      "matthew"
    ]
  },
  {
    "from": "bathsheba",
    "to": "nathan_david",
    "relation": "mother",
    "refs": [
      "1 Crônicas 3:5"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "david",
    "to": "tamar_david",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:9"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "solomon",
    "to": "rehoboam",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "rehoboam",
    "to": "abijah_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "abijah_king",
    "to": "asa_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "asa_king",
    "to": "jehoshaphat",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "jehoshaphat",
    "to": "joram_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "joram_king",
    "to": "ahaziah_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "ahaziah_king",
    "to": "joash_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "joash_king",
    "to": "amaziah_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "amaziah_king",
    "to": "uzziah",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "uzziah",
    "to": "jotham_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "jotham_king",
    "to": "ahaz_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "ahaz_king",
    "to": "hezekiah_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "hezekiah_king",
    "to": "manasseh_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "manasseh_king",
    "to": "amon_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "amon_king",
    "to": "josiah_king",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "josiah_king",
    "to": "jehoiakim",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "jehoiakim",
    "to": "jeconiah",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:10-16"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "jeconiah",
    "to": "shealtiel",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:17"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "jeconiah",
    "to": "pedaiah",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:17-18"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "pedaiah",
    "to": "zerubbabel",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:19"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "shealtiel",
    "to": "zerubbabel",
    "relation": "ancestor",
    "refs": [
      "Esdras 3:2",
      "Ageu 1:1",
      "Mateus 1:12",
      "Lucas 3:27"
    ],
    "sourceTags": [
      "ezra",
      "haggai",
      "matthew",
      "luke"
    ],
    "variant": true,
    "note": "Outras fontes bíblicas chamam Zorobabel de filho de Salatiel; 1 Crônicas 3:19 o lista entre os filhos de Pedaías."
  },
  {
    "from": "zerubbabel",
    "to": "meshullam_zerubbabel",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:19-20"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "zerubbabel",
    "to": "hananiah_zerubbabel",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:19-20"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "zerubbabel",
    "to": "shelomith_zerubbabel",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:19-20"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "zerubbabel",
    "to": "hashubah",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:19-20"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "zerubbabel",
    "to": "ohel",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:19-20"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "zerubbabel",
    "to": "berechiah_zerubbabel",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:19-20"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "zerubbabel",
    "to": "hasadiah",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:19-20"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "zerubbabel",
    "to": "jushab_hesed",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:19-20"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "hananiah_zerubbabel",
    "to": "pelatiah",
    "relation": "ancestor",
    "refs": [
      "1 Crônicas 3:21-23"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "note": "A sintaxe e a numeração da genealogia pós-exílica de 1 Crônicas 3 possuem dificuldades textuais; o atlas marca este trecho com cautela."
  },
  {
    "from": "hananiah_zerubbabel",
    "to": "jeshaiah",
    "relation": "ancestor",
    "refs": [
      "1 Crônicas 3:21-23"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "note": "A sintaxe e a numeração da genealogia pós-exílica de 1 Crônicas 3 possuem dificuldades textuais; o atlas marca este trecho com cautela."
  },
  {
    "from": "jeshaiah",
    "to": "rephaiah",
    "relation": "ancestor",
    "refs": [
      "1 Crônicas 3:21-23"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "note": "A sintaxe e a numeração da genealogia pós-exílica de 1 Crônicas 3 possuem dificuldades textuais; o atlas marca este trecho com cautela."
  },
  {
    "from": "rephaiah",
    "to": "arnan",
    "relation": "ancestor",
    "refs": [
      "1 Crônicas 3:21-23"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "note": "A sintaxe e a numeração da genealogia pós-exílica de 1 Crônicas 3 possuem dificuldades textuais; o atlas marca este trecho com cautela."
  },
  {
    "from": "arnan",
    "to": "obadiah_post",
    "relation": "ancestor",
    "refs": [
      "1 Crônicas 3:21-23"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "note": "A sintaxe e a numeração da genealogia pós-exílica de 1 Crônicas 3 possuem dificuldades textuais; o atlas marca este trecho com cautela."
  },
  {
    "from": "obadiah_post",
    "to": "shecaniah",
    "relation": "ancestor",
    "refs": [
      "1 Crônicas 3:21-23"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "note": "A sintaxe e a numeração da genealogia pós-exílica de 1 Crônicas 3 possuem dificuldades textuais; o atlas marca este trecho com cautela."
  },
  {
    "from": "shecaniah",
    "to": "shemaiah_post",
    "relation": "ancestor",
    "refs": [
      "1 Crônicas 3:21-23"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "note": "A sintaxe e a numeração da genealogia pós-exílica de 1 Crônicas 3 possuem dificuldades textuais; o atlas marca este trecho com cautela."
  },
  {
    "from": "shemaiah_post",
    "to": "neariah",
    "relation": "ancestor",
    "refs": [
      "1 Crônicas 3:21-23"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "note": "A sintaxe e a numeração da genealogia pós-exílica de 1 Crônicas 3 possuem dificuldades textuais; o atlas marca este trecho com cautela."
  },
  {
    "from": "neariah",
    "to": "elioenai",
    "relation": "ancestor",
    "refs": [
      "1 Crônicas 3:21-23"
    ],
    "sourceTags": [
      "chronicles"
    ],
    "note": "A sintaxe e a numeração da genealogia pós-exílica de 1 Crônicas 3 possuem dificuldades textuais; o atlas marca este trecho com cautela."
  },
  {
    "from": "elioenai",
    "to": "hodaviah",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:24"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "elioenai",
    "to": "eliashib_post",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:24"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "elioenai",
    "to": "pelaiah",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:24"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "elioenai",
    "to": "akkub_post",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:24"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "elioenai",
    "to": "johanan_post",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:24"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "elioenai",
    "to": "delaiah",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:24"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "elioenai",
    "to": "anani",
    "relation": "parent",
    "refs": [
      "1 Crônicas 3:24"
    ],
    "sourceTags": [
      "chronicles"
    ]
  },
  {
    "from": "joseph_mary",
    "to": "mary",
    "relation": "spouse",
    "refs": [
      "Mateus 1:16,18-25"
    ],
    "sourceTags": [
      "matthew"
    ]
  },
  {
    "from": "mary",
    "to": "jesus",
    "relation": "mother",
    "refs": [
      "Mateus 1:16",
      "Lucas 1:31-35"
    ],
    "sourceTags": [
      "matthew",
      "luke"
    ]
  },
  {
    "from": "joseph_mary",
    "to": "jesus",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:16",
      "Lucas 3:23"
    ],
    "sourceTags": [
      "matthew",
      "luke"
    ],
    "note": "Relação genealógica/legal no texto; não representada como paternidade biológica."
  },
  {
    "from": "abraham",
    "to": "isaac",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "isaac",
    "to": "jacob",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "jacob",
    "to": "judah",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "judah",
    "to": "perez",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "perez",
    "to": "hezron_perez",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "hezron_perez",
    "to": "ram",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "ram",
    "to": "amminadab",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "amminadab",
    "to": "nahshon",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "nahshon",
    "to": "salmon",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "salmon",
    "to": "boaz",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "boaz",
    "to": "obed",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "obed",
    "to": "jesse",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "jesse",
    "to": "david",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "david",
    "to": "solomon",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "solomon",
    "to": "rehoboam",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "rehoboam",
    "to": "abijah_king",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "abijah_king",
    "to": "asa_king",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "asa_king",
    "to": "jehoshaphat",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "jehoshaphat",
    "to": "joram_king",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "joram_king",
    "to": "uzziah",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "uzziah",
    "to": "jotham_king",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "jotham_king",
    "to": "ahaz_king",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "ahaz_king",
    "to": "hezekiah_king",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "hezekiah_king",
    "to": "manasseh_king",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "manasseh_king",
    "to": "amon_king",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "amon_king",
    "to": "josiah_king",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "josiah_king",
    "to": "jeconiah",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "jeconiah",
    "to": "shealtiel",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "shealtiel",
    "to": "zerubbabel",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "zerubbabel",
    "to": "abiud",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "abiud",
    "to": "eliakim_matthew",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "eliakim_matthew",
    "to": "azor",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "azor",
    "to": "zadok_matthew",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "zadok_matthew",
    "to": "akim",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "akim",
    "to": "eliud",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "eliud",
    "to": "eleazar_matthew",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "eleazar_matthew",
    "to": "matthan",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "matthan",
    "to": "jacob_matthew",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "jacob_matthew",
    "to": "joseph_mary",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "joseph_mary",
    "to": "jesus",
    "relation": "genealogy",
    "refs": [
      "Mateus 1:1-17"
    ],
    "sourceTags": [
      "matthew"
    ],
    "note": "Sequência literária/genealógica de Mateus; 'gerou' pode representar ancestralidade e a lista contém compressões."
  },
  {
    "from": "david",
    "to": "nathan_david",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "nathan_david",
    "to": "mattatha",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "mattatha",
    "to": "menna",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "menna",
    "to": "melea",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "melea",
    "to": "eliakim_luke",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "eliakim_luke",
    "to": "jonam",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "jonam",
    "to": "joseph_luke_1",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "joseph_luke_1",
    "to": "judah_luke",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "judah_luke",
    "to": "simeon_luke",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "simeon_luke",
    "to": "levi_luke_1",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "levi_luke_1",
    "to": "matthat_luke_1",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "matthat_luke_1",
    "to": "jorim",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "jorim",
    "to": "eliezer_luke",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "eliezer_luke",
    "to": "joshua_luke",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "joshua_luke",
    "to": "er_luke",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "er_luke",
    "to": "elmadam",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "elmadam",
    "to": "cosam",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "cosam",
    "to": "addi",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "addi",
    "to": "melchi_luke_1",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "melchi_luke_1",
    "to": "neri",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "neri",
    "to": "shealtiel",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "shealtiel",
    "to": "zerubbabel",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "zerubbabel",
    "to": "rhesa",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "rhesa",
    "to": "joanan_luke",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "joanan_luke",
    "to": "joda",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "joda",
    "to": "josech",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "josech",
    "to": "semein",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "semein",
    "to": "mattathias_luke_1",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "mattathias_luke_1",
    "to": "maath",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "maath",
    "to": "naggai",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "naggai",
    "to": "esli",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "esli",
    "to": "nahum_luke",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "nahum_luke",
    "to": "amos_luke",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "amos_luke",
    "to": "mattathias_luke_2",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "mattathias_luke_2",
    "to": "joseph_luke_2",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "joseph_luke_2",
    "to": "jannai",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "jannai",
    "to": "melchi_luke_2",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "melchi_luke_2",
    "to": "levi_luke_2",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "levi_luke_2",
    "to": "matthat_luke_2",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "matthat_luke_2",
    "to": "heli",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "heli",
    "to": "joseph_mary",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  },
  {
    "from": "joseph_mary",
    "to": "jesus",
    "relation": "genealogy",
    "refs": [
      "Lucas 3:23-31"
    ],
    "sourceTags": [
      "luke"
    ],
    "note": "Sequência genealógica de Lucas 3; o texto é apresentado de Jesus para trás, mas o atlas também permite lê-lo em direção cronológica."
  }
];

PEOPLE.push(...EXTRA_PEOPLE);
RELATIONSHIPS.push(...EXTRA_RELATIONSHIPS);

VIEW_PRESETS.davidic = {
  label: "Judá → Davi → linha real",
  ids: ["judah", "perez", "hezron_perez", "ram", "amminadab", "nahshon", "salmon", "boaz", "obed", "jesse", "david", "rehoboam", "abijah_king", "asa_king", "jehoshaphat", "joram_king", "ahaziah_king", "joash_king", "amaziah_king", "uzziah", "jotham_king", "ahaz_king", "hezekiah_king", "manasseh_king", "amon_king", "josiah_king", "jehoiakim", "jeconiah", "shealtiel", "pedaiah", "zerubbabel", "hananiah_zerubbabel", "jeshaiah", "rephaiah", "arnan", "obadiah_post", "shecaniah", "shemaiah_post", "neariah", "elioenai", "anani"]
};
VIEW_PRESETS.jesusMatthew = {
  label: "Genealogia de Mateus",
  ids: ["abraham", "isaac", "jacob", "judah", "perez", "hezron_perez", "ram", "amminadab", "nahshon", "salmon", "boaz", "obed", "jesse", "david", "solomon", "rehoboam", "abijah_king", "asa_king", "jehoshaphat", "joram_king", "uzziah", "jotham_king", "ahaz_king", "hezekiah_king", "manasseh_king", "amon_king", "josiah_king", "jeconiah", "shealtiel", "zerubbabel", "abiud", "eliakim_matthew", "azor", "zadok_matthew", "akim", "eliud", "eleazar_matthew", "matthan", "jacob_matthew", "joseph_mary", "jesus", "mary", "ahaziah_king", "joash_king", "amaziah_king", "jehoiakim"]
};
VIEW_PRESETS.jesusLuke = {
  label: "Genealogia de Lucas",
  ids: ["adam", "seth", "enosh", "kenan", "mahalalel", "jared", "enoch_seth", "methuselah", "lamech_seth", "noah", "shem", "arphaxad", "cainan2", "shelah", "eber", "peleg", "reu", "serug", "nahor1", "terah", "abraham", "isaac", "jacob", "judah", "perez", "hezron_perez", "ram", "amminadab", "nahshon", "salmon", "boaz", "obed", "jesse", "david", "nathan_david", "mattatha", "menna", "melea", "eliakim_luke", "jonam", "joseph_luke_1", "judah_luke", "simeon_luke", "levi_luke_1", "matthat_luke_1", "jorim", "eliezer_luke", "joshua_luke", "er_luke", "elmadam", "cosam", "addi", "melchi_luke_1", "neri", "shealtiel", "zerubbabel", "rhesa", "joanan_luke", "joda", "josech", "semein", "mattathias_luke_1", "maath", "naggai", "esli", "nahum_luke", "amos_luke", "mattathias_luke_2", "joseph_luke_2", "jannai", "melchi_luke_2", "levi_luke_2", "matthat_luke_2", "heli", "joseph_mary", "jesus", "mary"]
};

const JESUS_FOCUS = {
  "commonAdamToAbraham": [
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
    "abraham"
  ],
  "commonAbrahamToDavid": [
    "abraham",
    "isaac",
    "jacob",
    "judah",
    "perez",
    "hezron_perez",
    "ram",
    "amminadab",
    "nahshon",
    "salmon",
    "boaz",
    "obed",
    "jesse",
    "david"
  ],
  "matthew": [
    "abraham",
    "isaac",
    "jacob",
    "judah",
    "perez",
    "hezron_perez",
    "ram",
    "amminadab",
    "nahshon",
    "salmon",
    "boaz",
    "obed",
    "jesse",
    "david",
    "solomon",
    "rehoboam",
    "abijah_king",
    "asa_king",
    "jehoshaphat",
    "joram_king",
    "uzziah",
    "jotham_king",
    "ahaz_king",
    "hezekiah_king",
    "manasseh_king",
    "amon_king",
    "josiah_king",
    "jeconiah",
    "shealtiel",
    "zerubbabel",
    "abiud",
    "eliakim_matthew",
    "azor",
    "zadok_matthew",
    "akim",
    "eliud",
    "eleazar_matthew",
    "matthan",
    "jacob_matthew",
    "joseph_mary",
    "jesus"
  ],
  "lukeDavidToJesus": [
    "david",
    "nathan_david",
    "mattatha",
    "menna",
    "melea",
    "eliakim_luke",
    "jonam",
    "joseph_luke_1",
    "judah_luke",
    "simeon_luke",
    "levi_luke_1",
    "matthat_luke_1",
    "jorim",
    "eliezer_luke",
    "joshua_luke",
    "er_luke",
    "elmadam",
    "cosam",
    "addi",
    "melchi_luke_1",
    "neri",
    "shealtiel",
    "zerubbabel",
    "rhesa",
    "joanan_luke",
    "joda",
    "josech",
    "semein",
    "mattathias_luke_1",
    "maath",
    "naggai",
    "esli",
    "nahum_luke",
    "amos_luke",
    "mattathias_luke_2",
    "joseph_luke_2",
    "jannai",
    "melchi_luke_2",
    "levi_luke_2",
    "matthat_luke_2",
    "heli",
    "joseph_mary",
    "jesus"
  ],
  "chroniclesRoyal": [
    "solomon",
    "rehoboam",
    "abijah_king",
    "asa_king",
    "jehoshaphat",
    "joram_king",
    "ahaziah_king",
    "joash_king",
    "amaziah_king",
    "uzziah",
    "jotham_king",
    "ahaz_king",
    "hezekiah_king",
    "manasseh_king",
    "amon_king",
    "josiah_king",
    "jehoiakim",
    "jeconiah",
    "shealtiel",
    "pedaiah",
    "zerubbabel",
    "hananiah_zerubbabel",
    "jeshaiah",
    "rephaiah",
    "arnan",
    "obadiah_post",
    "shecaniah",
    "shemaiah_post",
    "neariah",
    "elioenai",
    "anani"
  ],
  "notes": [
    {
      "title": "Mateus e Lucas divergem depois de Davi",
      "text": "Mateus 1 segue a linha por Salomão; Lucas 3 segue por Natã. O atlas mostra as duas sequências lado a lado, sem transformar uma explicação harmonizadora específica em fato textual."
    },
    {
      "title": "José aparece com pais diferentes",
      "text": "Mateus 1:16 apresenta Jacó como pai de José; Lucas 3:23 apresenta José como filho de Eli. Hipóteses como linhagem legal, levirato ou linhagem associada a Maria serão exibidas como interpretações, não como parte do texto."
    },
    {
      "title": "Mateus comprime gerações",
      "text": "Entre Jorão e Uzias, a linha real de 1 Crônicas inclui Acazias, Joás e Amazias; Mateus os omite em sua estrutura literária. O mesmo acontece em outros pontos."
    },
    {
      "title": "Zorobabel / Salatiel / Pedaías",
      "text": "1 Crônicas 3:19 liga Zorobabel a Pedaías; outros textos bíblicos o chamam filho de Salatiel. A interface preserva as duas formas de relação."
    }
  ]
};
const HISTORY_EVENTS = [
  {
    "sort": -1000,
    "date": "séc. X a.C. (aprox.)",
    "era": "Israel",
    "title": "Davi e a monarquia unida",
    "kind": "reino",
    "summary": "Davi torna-se o principal ponto dinástico das genealogias reais e messiânicas."
  },
  {
    "sort": -930,
    "date": "c. 930 a.C.",
    "era": "Israel",
    "title": "Divisão do reino",
    "kind": "reino",
    "summary": "Após Salomão, a narrativa bíblica distingue o reino do Norte (Israel) e o reino do Sul (Judá)."
  },
  {
    "sort": -722,
    "date": "722/721 a.C.",
    "era": "Assíria",
    "title": "Queda de Samaria",
    "kind": "dispersao",
    "summary": "O reino do Norte cai diante da Assíria; deportações e reassentamentos fazem parte do contexto da dispersão israelita."
  },
  {
    "sort": -586,
    "date": "586 a.C.",
    "era": "Babilônia",
    "title": "Queda de Jerusalém e destruição do Primeiro Templo",
    "kind": "exilio",
    "summary": "Jerusalém é conquistada por Babilônia; parte da população de Judá é exilada."
  },
  {
    "sort": -539,
    "date": "539–538 a.C.",
    "era": "Pérsia",
    "title": "Conquista persa e retorno",
    "kind": "retorno",
    "summary": "A conquista persa da Babilônia abre o período associado ao retorno de grupos judaítas e à reconstrução do templo."
  },
  {
    "sort": -516,
    "date": "516/515 a.C. (aprox.)",
    "era": "Segundo Templo",
    "title": "Segundo Templo",
    "kind": "templo",
    "summary": "O templo reconstruído em Jerusalém marca uma nova etapa da história judaica pós-exílica."
  },
  {
    "sort": -167,
    "date": "167–160 a.C.",
    "era": "Hasmoneus",
    "title": "Revolta dos Macabeus",
    "kind": "conflito",
    "summary": "Revolta judaica contra políticas selêucidas; origem do período hasmoneu."
  },
  {
    "sort": -63,
    "date": "63 a.C.",
    "era": "Roma",
    "title": "Pompeu entra em Jerusalém",
    "kind": "imperio",
    "summary": "A Judeia entra de modo decisivo na órbita do poder romano."
  },
  {
    "sort": -4,
    "date": "fim do séc. I a.C.",
    "era": "Evangelhos",
    "title": "Nascimento de Jesus",
    "kind": "biblico",
    "summary": "As narrativas de Mateus e Lucas situam o nascimento de Jesus no contexto de Herodes e do Império Romano."
  },
  {
    "sort": 30,
    "date": "c. 30–33",
    "era": "Igreja apostólica",
    "title": "Crucificação, ressurreição e Pentecostes",
    "kind": "biblico",
    "summary": "Atos 2 apresenta Pentecostes como marco da missão pública da comunidade de discípulos."
  },
  {
    "sort": 34,
    "date": "década de 30",
    "era": "Atos",
    "title": "Estêvão e expansão para além de Jerusalém",
    "kind": "biblico",
    "summary": "A morte de Estêvão e a dispersão dos discípulos aparecem em Atos 7–8."
  },
  {
    "sort": 36,
    "date": "década de 30",
    "era": "Atos",
    "title": "Conversão de Paulo",
    "kind": "biblico",
    "summary": "Atos 9 narra a conversão/chamado de Saulo, posteriormente Paulo."
  },
  {
    "sort": 49,
    "date": "c. 49",
    "era": "Atos",
    "title": "Concílio de Jerusalém",
    "kind": "biblico",
    "summary": "Atos 15 descreve a deliberação apostólica sobre gentios e a Lei de Moisés."
  },
  {
    "sort": 64,
    "date": "64",
    "era": "Roma",
    "title": "Nero e perseguição em Roma",
    "kind": "perseguicao",
    "summary": "Após o grande incêndio de Roma, cristãos foram punidos sob Nero; Tácito é uma fonte romana posterior para o episódio."
  },
  {
    "sort": 70,
    "date": "70",
    "era": "Roma/Judeia",
    "title": "Destruição de Jerusalém e do Segundo Templo",
    "kind": "dispersao",
    "summary": "Tropas romanas destroem o templo durante a Primeira Revolta Judaica, marco central da história judaica e cristã."
  },
  {
    "sort": 107,
    "date": "c. 107–110",
    "era": "Pais apostólicos",
    "title": "Inácio de Antioquia",
    "kind": "pessoa",
    "summary": "Cartas atribuídas a Inácio testemunham debates sobre igreja, martírio e episcopado no início do século II."
  },
  {
    "sort": 132,
    "date": "132–135",
    "era": "Judeia",
    "title": "Revolta de Bar Kokhba",
    "kind": "dispersao",
    "summary": "Nova grande revolta judaica contra Roma; sua derrota aprofundou mudanças demográficas e políticas na Judeia."
  },
  {
    "sort": 155,
    "date": "c. 155–160",
    "era": "Igreja antiga",
    "title": "Martírio de Policarpo",
    "kind": "martirio",
    "summary": "A tradição do Martírio de Policarpo oferece uma das narrativas cristãs antigas de martírio."
  },
  {
    "sort": 165,
    "date": "c. 165",
    "era": "Igreja antiga",
    "title": "Justino Mártir",
    "kind": "martirio",
    "summary": "Apologista cristão do século II, executado em Roma."
  },
  {
    "sort": 177,
    "date": "177",
    "era": "Império Romano",
    "title": "Mártires de Lião e Vienne",
    "kind": "perseguicao",
    "summary": "Perseguição local durante o reinado de Marco Aurélio; a relação exata entre política imperial e episódios locais é debatida."
  },
  {
    "sort": 180,
    "date": "c. 180",
    "era": "Igreja antiga",
    "title": "Irineu de Lião",
    "kind": "teologia",
    "summary": "Irineu combate movimentos que classificava como gnósticos e enfatiza continuidade da fé apostólica."
  },
  {
    "sort": 203,
    "date": "203",
    "era": "Cartago",
    "title": "Perpétua e Felicidade",
    "kind": "martirio",
    "summary": "Perpétua e Felicidade/Felicitas são martirizadas em Cartago; a Paixão preserva uma das mais antigas vozes cristãs femininas em primeira pessoa."
  },
  {
    "sort": 250,
    "date": "250–251",
    "era": "Império Romano",
    "title": "Perseguição de Décio",
    "kind": "perseguicao",
    "summary": "Exigências de sacrifício e certificados imperiais criam uma crise ampla nas comunidades cristãs."
  },
  {
    "sort": 258,
    "date": "258",
    "era": "Cartago",
    "title": "Martírio de Cipriano",
    "kind": "martirio",
    "summary": "O bispo Cipriano de Cartago é executado durante a perseguição de Valeriano."
  },
  {
    "sort": 303,
    "date": "303–311",
    "era": "Império Romano",
    "title": "Grande Perseguição",
    "kind": "perseguicao",
    "summary": "Medidas iniciadas sob Diocleciano e seus colegas atingem igrejas, textos e lideranças cristãs em diversas regiões."
  },
  {
    "sort": 313,
    "date": "313",
    "era": "Constantino",
    "title": "Acordo/Édito de Milão",
    "kind": "imperio",
    "summary": "Constantino e Licínio estabelecem política de tolerância religiosa e restituição de propriedades aos cristãos."
  },
  {
    "sort": 325,
    "date": "325",
    "era": "Concílios",
    "title": "Concílio de Niceia",
    "kind": "concilio",
    "summary": "Primeiro concílio ecumênico; formula linguagem decisiva na controvérsia ariana e no Credo niceno."
  },
  {
    "sort": 381,
    "date": "381",
    "era": "Concílios",
    "title": "Concílio de Constantinopla I",
    "kind": "concilio",
    "summary": "Etapa importante da recepção e desenvolvimento da teologia nicena e da linguagem trinitária."
  },
  {
    "sort": 431,
    "date": "431",
    "era": "Concílios",
    "title": "Concílio de Éfeso",
    "kind": "concilio",
    "summary": "Marco das controvérsias cristológicas do século V e da recepção do título Theotokos."
  },
  {
    "sort": 451,
    "date": "451",
    "era": "Concílios",
    "title": "Concílio de Calcedônia",
    "kind": "concilio",
    "summary": "Define linguagem cristológica que seria recebida por grande parte do cristianismo; também se relaciona a separações duradouras entre tradições."
  },
  {
    "sort": 476,
    "date": "476",
    "era": "Europa",
    "title": "Fim convencional do Império Romano do Ocidente",
    "kind": "imperio",
    "summary": "Marco político tradicional; a história cristã ocidental segue por reinos pós-romanos, monasticismo e papado."
  },
  {
    "sort": 529,
    "date": "c. 529",
    "era": "Monasticismo",
    "title": "Regra de Bento",
    "kind": "movimento",
    "summary": "A tradição beneditina se torna uma das influências centrais do monasticismo ocidental."
  },
  {
    "sort": 800,
    "date": "800",
    "era": "Europa medieval",
    "title": "Coroação de Carlos Magno",
    "kind": "imperio",
    "summary": "A coroação imperial no Ocidente reforça novas relações entre poder político e cristianismo latino."
  },
  {
    "sort": 1054,
    "date": "1054",
    "era": "Cristandade medieval",
    "title": "Cisma entre Oriente e Ocidente",
    "kind": "cisma",
    "summary": "As excomunhões de 1054 tornaram-se um marco simbólico da separação entre as igrejas de Roma e Constantinopla, embora o processo fosse mais longo."
  },
  {
    "sort": 1095,
    "date": "1095",
    "era": "Idade Média",
    "title": "Primeira Cruzada convocada",
    "kind": "conflito",
    "summary": "A convocação de Urbano II inaugura uma série de cruzadas e transformações nas relações entre cristãos, muçulmanos e judeus."
  },
  {
    "sort": 1274,
    "date": "séc. XIII",
    "era": "Escolástica",
    "title": "Tomás de Aquino",
    "kind": "teologia",
    "summary": "A síntese escolástica de Tomás de Aquino marca profundamente a teologia ocidental medieval."
  },
  {
    "sort": 1415,
    "date": "1415",
    "era": "Pré-Reforma",
    "title": "Jan Hus executado",
    "kind": "reforma",
    "summary": "Hus torna-se referência para movimentos de reforma anteriores à Reforma do século XVI."
  },
  {
    "sort": 1455,
    "date": "c. 1455",
    "era": "Imprensa",
    "title": "Bíblia de Gutenberg",
    "kind": "tecnologia",
    "summary": "A impressão com tipos móveis acelera a circulação de textos na Europa, incluindo as Escrituras."
  },
  {
    "sort": 1517,
    "date": "1517",
    "era": "Reforma",
    "title": "Lutero e as 95 Teses",
    "kind": "reforma",
    "summary": "Marco tradicional do início da Reforma Protestante na Europa ocidental."
  },
  {
    "sort": 1525,
    "date": "1525",
    "era": "Reforma Radical",
    "title": "Batismos de crentes em Zurique",
    "kind": "reforma",
    "summary": "Marco convencional do anabatismo suíço e da Reforma Radical."
  },
  {
    "sort": 1534,
    "date": "1534",
    "era": "Reforma inglesa",
    "title": "Ruptura institucional da Igreja da Inglaterra com Roma",
    "kind": "reforma",
    "summary": "O Ato de Supremacia é um marco do desenvolvimento do anglicanismo, embora sua teologia passasse por fases posteriores."
  },
  {
    "sort": 1536,
    "date": "1536",
    "era": "Reforma Reformada",
    "title": "Primeira edição das Institutas de Calvino",
    "kind": "teologia",
    "summary": "João Calvino sistematiza um programa teológico que influenciaria igrejas reformadas e presbiterianas."
  },
  {
    "sort": 1545,
    "date": "1545–1563",
    "era": "Reforma Católica",
    "title": "Concílio de Trento",
    "kind": "concilio",
    "summary": "Resposta católica a controvérsias da Reforma e marco de reforma interna e definição doutrinária."
  },
  {
    "sort": 1609,
    "date": "1609–1612",
    "era": "Batistas",
    "title": "Primeiras igrejas batistas inglesas",
    "kind": "movimento",
    "summary": "John Smyth e Thomas Helwys são figuras centrais nas origens do movimento batista inglês."
  },
  {
    "sort": 1646,
    "date": "1643–1649",
    "era": "Reformados",
    "title": "Assembleia de Westminster",
    "kind": "teologia",
    "summary": "Produz documentos confessionais de grande influência no presbiterianismo e no puritanismo reformado."
  },
  {
    "sort": 1727,
    "date": "1727",
    "era": "Pietismo / Morávios",
    "title": "Renovação de Herrnhut",
    "kind": "avivamento",
    "summary": "A comunidade morávia associada a Zinzendorf vive um movimento de renovação com impacto missionário posterior."
  },
  {
    "sort": 1734,
    "date": "1734–1750",
    "era": "Grande Despertamento",
    "title": "Primeiro Grande Despertamento",
    "kind": "avivamento",
    "summary": "Avivamentos nas colônias britânicas da América do Norte associados, entre outros, a Jonathan Edwards e George Whitefield."
  },
  {
    "sort": 1738,
    "date": "1738",
    "era": "Metodismo",
    "title": "John Wesley e Aldersgate",
    "kind": "avivamento",
    "summary": "A experiência de Wesley em Aldersgate tornou-se um marco biográfico do movimento metodista."
  },
  {
    "sort": 1792,
    "date": "1792",
    "era": "Missões modernas",
    "title": "William Carey e a sociedade missionária batista",
    "kind": "missao",
    "summary": "Frequentemente usado como marco do movimento missionário protestante moderno anglófono."
  },
  {
    "sort": 1800,
    "date": "c. 1790–1840",
    "era": "Avivamentos",
    "title": "Segundo Grande Despertamento",
    "kind": "avivamento",
    "summary": "Ondas de avivamento nos Estados Unidos influenciam novas denominações, missões e movimentos de reforma social."
  },
  {
    "sort": 1830,
    "date": "séc. XIX",
    "era": "Santidade",
    "title": "Movimento de Santidade",
    "kind": "movimento",
    "summary": "Desenvolve-se em ambientes wesleyanos/metodistas, enfatizando santificação; torna-se uma das matrizes do pentecostalismo moderno."
  },
  {
    "sort": 1844,
    "date": "1844–1863",
    "era": "Adventismo",
    "title": "Do movimento milerita à Igreja Adventista do Sétimo Dia",
    "kind": "movimento",
    "summary": "Após a crise de 1844, diferentes grupos adventistas se reorganizam; a Igreja Adventista do Sétimo Dia é formalizada em 1863."
  },
  {
    "sort": 1859,
    "date": "1857–1859",
    "era": "Avivamentos",
    "title": "Avivamentos de oração no Atlântico Norte",
    "kind": "avivamento",
    "summary": "Movimentos de oração e avivamento atingem Estados Unidos, Irlanda, País de Gales e outras regiões."
  },
  {
    "sort": 1904,
    "date": "1904–1905",
    "era": "Avivamentos",
    "title": "Avivamento Galês",
    "kind": "avivamento",
    "summary": "Movimento de renovação no País de Gales associado a Evan Roberts e outros líderes."
  },
  {
    "sort": 1906,
    "date": "1906–1909",
    "era": "Pentecostalismo",
    "title": "Avivamento da Rua Azusa",
    "kind": "avivamento",
    "summary": "A missão liderada por William J. Seymour em Los Angeles torna-se um centro decisivo para a difusão global do pentecostalismo moderno."
  },
  {
    "sort": 1910,
    "date": "1910",
    "era": "Pentecostalismo no Brasil",
    "title": "Congregação Cristã no Brasil",
    "kind": "brasil",
    "summary": "O movimento associado a Luigi Francescon se estabelece no Brasil no início da década de 1910."
  },
  {
    "sort": 1911,
    "date": "1911",
    "era": "Pentecostalismo no Brasil",
    "title": "Assembleias de Deus no Brasil",
    "kind": "brasil",
    "summary": "Gunnar Vingren e Daniel Berg participam da formação do movimento que se tornaria as Assembleias de Deus no Brasil, em Belém do Pará."
  },
  {
    "sort": 1914,
    "date": "1914",
    "era": "Pentecostalismo",
    "title": "Assemblies of God nos EUA",
    "kind": "movimento",
    "summary": "Conselho em Hot Springs organiza uma das maiores redes pentecostais clássicas."
  },
  {
    "sort": 1951,
    "date": "década de 1950",
    "era": "Pentecostalismo no Brasil",
    "title": "Igreja do Evangelho Quadrangular no Brasil",
    "kind": "brasil",
    "summary": "A Cruzada Nacional de Evangelização e a Quadrangular ajudam a difundir uma nova onda pentecostal ligada a cura divina e evangelismo de massa."
  },
  {
    "sort": 1956,
    "date": "1955–1956",
    "era": "Pentecostalismo no Brasil",
    "title": "O Brasil para Cristo",
    "kind": "brasil",
    "summary": "Movimento iniciado por Manoel de Mello em São Paulo, posteriormente institucionalizado como O Brasil para Cristo."
  },
  {
    "sort": 1960,
    "date": "década de 1960",
    "era": "Movimento carismático",
    "title": "Renovação carismática em igrejas históricas",
    "kind": "movimento",
    "summary": "Práticas e experiências pentecostais passam a circular também em denominações protestantes históricas e, depois, no catolicismo."
  },
  {
    "sort": 1962,
    "date": "1962",
    "era": "Pentecostalismo no Brasil",
    "title": "Igreja Pentecostal Deus é Amor",
    "kind": "brasil",
    "summary": "David Miranda funda em São Paulo a Igreja Pentecostal Deus é Amor."
  },
  {
    "sort": 1965,
    "date": "1962–1965",
    "era": "Catolicismo",
    "title": "Concílio Vaticano II",
    "kind": "concilio",
    "summary": "Concílio católico com amplo impacto litúrgico, pastoral e ecumênico."
  },
  {
    "sort": 1974,
    "date": "1974",
    "era": "Evangelicalismo global",
    "title": "Congresso de Lausanne",
    "kind": "missao",
    "summary": "Encontro internacional que se torna referência para redes evangélicas de missão e evangelização."
  },
  {
    "sort": 1977,
    "date": "1977",
    "era": "Pentecostalismo/neo-pentecostalismo no Brasil",
    "title": "Igreja Universal do Reino de Deus",
    "kind": "brasil",
    "summary": "Fundada no Rio de Janeiro; frequentemente classificada por pesquisadores brasileiros entre movimentos neopentecostais, embora categorias variem."
  },
  {
    "sort": 2000,
    "date": "fim do séc. XX – séc. XXI",
    "era": "Cristianismo global",
    "title": "Expansão de redes pentecostais, carismáticas e evangélicas globais",
    "kind": "movimento",
    "summary": "O centro demográfico e institucional do cristianismo torna-se cada vez mais global; o atlas tratará movimentos contemporâneos por região e tradição, sem assumir uma única linha sucessória."
  },
  {
    "sort": 2023,
    "date": "fev. 2023",
    "era": "Avivamentos contemporâneos",
    "title": "Encontros prolongados em Asbury University",
    "kind": "avivamento",
    "summary": "Após um culto universitário em Wilmore, Kentucky, encontros de oração e adoração continuaram por dias e atraíram visitantes. O termo 'avivamento' é usado por participantes e comentaristas, mas o atlas distingue o fato do encontro de sua avaliação teológica."
  },
  {
    "sort": 2026,
    "date": "2026",
    "era": "Hoje",
    "title": "Atlas em construção",
    "kind": "today",
    "summary": "A história recente permanece aberta. Eventos contemporâneos entram com data, fonte e linguagem cautelosa, sem serem tratados como consenso historiográfico imediato."
  }
];
const RULER_TRACKS = [
  {
    "id": "united",
    "name": "Monarquia unida",
    "items": [
      {
        "name": "Saul",
        "period": "c. séc. XI a.C.",
        "refs": [
          "1 Samuel 9–31"
        ]
      },
      {
        "name": "Davi",
        "period": "c. séc. X a.C.",
        "refs": [
          "2 Samuel; 1 Crônicas 11–29"
        ]
      },
      {
        "name": "Salomão",
        "period": "c. séc. X a.C.",
        "refs": [
          "1 Reis 1–11; 2 Crônicas 1–9"
        ]
      }
    ]
  },
  {
    "id": "judah",
    "name": "Reino de Judá",
    "items": [
      {
        "name": "Roboão",
        "period": "séc. X a.C."
      },
      {
        "name": "Abias",
        "period": "séc. X a.C."
      },
      {
        "name": "Asa",
        "period": "séc. X–IX a.C."
      },
      {
        "name": "Josafá",
        "period": "séc. IX a.C."
      },
      {
        "name": "Jorão",
        "period": "séc. IX a.C."
      },
      {
        "name": "Acazias",
        "period": "séc. IX a.C."
      },
      {
        "name": "Atalia",
        "period": "séc. IX a.C."
      },
      {
        "name": "Joás",
        "period": "séc. IX a.C."
      },
      {
        "name": "Amazias",
        "period": "séc. IX–VIII a.C."
      },
      {
        "name": "Uzias/Azarias",
        "period": "séc. VIII a.C."
      },
      {
        "name": "Jotão",
        "period": "séc. VIII a.C."
      },
      {
        "name": "Acaz",
        "period": "séc. VIII a.C."
      },
      {
        "name": "Ezequias",
        "period": "séc. VIII–VII a.C."
      },
      {
        "name": "Manassés",
        "period": "séc. VII a.C."
      },
      {
        "name": "Amom",
        "period": "séc. VII a.C."
      },
      {
        "name": "Josias",
        "period": "séc. VII a.C."
      },
      {
        "name": "Jeoacaz",
        "period": "609 a.C."
      },
      {
        "name": "Jeoaquim",
        "period": "609–598 a.C."
      },
      {
        "name": "Joaquim/Jeconias",
        "period": "598/597 a.C."
      },
      {
        "name": "Zedequias",
        "period": "597–586 a.C."
      }
    ],
    "note": "Datas régias antigas variam conforme o sistema cronológico adotado; o atlas evita fingir precisão onde há debate."
  },
  {
    "id": "rome",
    "name": "Imperadores romanos relevantes",
    "items": [
      {
        "name": "Augusto",
        "period": "27 a.C.–14 d.C.",
        "why": "Contexto do nascimento de Jesus."
      },
      {
        "name": "Tibério",
        "period": "14–37",
        "why": "Ministério público de Jesus e primeiros anos da igreja."
      },
      {
        "name": "Cláudio",
        "period": "41–54",
        "why": "Atos 18 menciona expulsão de judeus de Roma."
      },
      {
        "name": "Nero",
        "period": "54–68",
        "why": "Perseguição de cristãos em Roma após o incêndio de 64."
      },
      {
        "name": "Domiciano",
        "period": "81–96",
        "why": "Associado em tradição posterior a pressões sobre cristãos; extensão e natureza são discutidas."
      },
      {
        "name": "Trajano",
        "period": "98–117",
        "why": "Correspondência com Plínio sobre tratamento de cristãos."
      },
      {
        "name": "Adriano",
        "period": "117–138",
        "why": "Revolta de Bar Kokhba e reorganização de Jerusalém/Judeia."
      },
      {
        "name": "Marco Aurélio",
        "period": "161–180",
        "why": "Perseguições locais ocorreram durante seu reinado; o grau de responsabilidade imperial é debatido."
      },
      {
        "name": "Sétimo Severo",
        "period": "193–211",
        "why": "Contexto do martírio de Perpétua e Felicidade em 203."
      },
      {
        "name": "Décio",
        "period": "249–251",
        "why": "Primeira perseguição imperial de grande escala ligada a certificados de sacrifício."
      },
      {
        "name": "Valeriano",
        "period": "253–260",
        "why": "Nova perseguição; Cipriano foi executado em 258."
      },
      {
        "name": "Diocleciano",
        "period": "284–305",
        "why": "Grande Perseguição iniciada em 303."
      },
      {
        "name": "Constantino I",
        "period": "306–337",
        "why": "Tolerância de 313 e Concílio de Niceia em 325."
      },
      {
        "name": "Teodósio I",
        "period": "379–395",
        "why": "Cristianismo niceno tornou-se religião imperial favorecida/oficial no fim do século IV."
      }
    ]
  }
];
const TRADITION_NODES = [
  {
    "id": "apostolic",
    "name": "Igreja apostólica",
    "period": "séc. I",
    "group": "origem",
    "summary": "Comunidades cristãs do Novo Testamento e primeira geração pós-apostólica."
  },
  {
    "id": "pre_nicene",
    "name": "Cristianismo pré-niceno",
    "period": "sécs. II–III",
    "group": "antiga",
    "summary": "Período de diversidade regional, apologistas, mártires e consolidação de estruturas episcopais."
  },
  {
    "id": "nicene",
    "name": "Cristianismo niceno",
    "period": "séc. IV",
    "group": "antiga",
    "summary": "Tradições que receberam a fé nicena e seus desenvolvimentos posteriores."
  },
  {
    "id": "church_east",
    "name": "Igreja do Oriente",
    "period": "sécs. V+",
    "group": "antiga",
    "summary": "Tradição cristã do Oriente persa/siríaco, historicamente associada à Igreja do Oriente."
  },
  {
    "id": "oriental_orthodox",
    "name": "Ortodoxas Orientais",
    "period": "sécs. V+",
    "group": "antiga",
    "summary": "Família de igrejas que não recebeu Calcedônia, incluindo tradições copta, armênia, siríaca, etíope, eritreia e malankara."
  },
  {
    "id": "chalcedonian",
    "name": "Cristianismo calcedoniano",
    "period": "451+",
    "group": "antiga",
    "summary": "Conjunto de igrejas que receberam a definição de Calcedônia."
  },
  {
    "id": "eastern_orthodox",
    "name": "Ortodoxia Oriental",
    "period": "1054+ (processo gradual)",
    "group": "medieval",
    "summary": "Igrejas ortodoxas de tradição bizantina; a separação de Roma foi um processo longo, com 1054 como marco simbólico."
  },
  {
    "id": "roman_catholic",
    "name": "Catolicismo romano",
    "period": "Ocidente medieval → presente",
    "group": "medieval",
    "summary": "Tradição ocidental em comunhão com o bispo de Roma."
  },
  {
    "id": "lutheran",
    "name": "Luteranismo",
    "period": "séc. XVI+",
    "group": "protestante",
    "summary": "Tradição da Reforma associada a Martinho Lutero e às confissões luteranas."
  },
  {
    "id": "reformed",
    "name": "Reformados",
    "period": "séc. XVI+",
    "group": "protestante",
    "summary": "Família associada a Zwinglio, Calvino e outras reformas suíças/francesas."
  },
  {
    "id": "presbyterian",
    "name": "Presbiterianismo",
    "period": "séc. XVI+",
    "group": "protestante",
    "summary": "Forma reformada marcada por governo presbiteral; fortemente associada à Escócia e a John Knox."
  },
  {
    "id": "congregational",
    "name": "Congregacionalismo",
    "period": "sécs. XVI–XVII+",
    "group": "protestante",
    "summary": "Família reformada que enfatiza autonomia/conexão congregacional."
  },
  {
    "id": "anglican",
    "name": "Anglicanismo",
    "period": "séc. XVI+",
    "group": "protestante",
    "summary": "Tradição da Igreja da Inglaterra e da Comunhão Anglicana, com desenvolvimento teológico próprio."
  },
  {
    "id": "anabaptist",
    "name": "Anabatistas / tradição menonita",
    "period": "1520s+",
    "group": "protestante",
    "summary": "Ramos da Reforma Radical que enfatizaram batismo de crentes e comunidades discipulares; não devem ser reduzidos a um único grupo."
  },
  {
    "id": "baptist",
    "name": "Batistas",
    "period": "séc. XVII+",
    "group": "protestante",
    "summary": "Origem inglesa ligada a separatistas como John Smyth e Thomas Helwys; relações com anabatistas são históricas e debatidas."
  },
  {
    "id": "puritan",
    "name": "Puritanos",
    "period": "sécs. XVI–XVII",
    "group": "protestante",
    "summary": "Movimentos de reforma dentro e fora do anglicanismo, com correntes presbiterianas, congregacionais e separatistas."
  },
  {
    "id": "pietist",
    "name": "Pietismo",
    "period": "sécs. XVII–XVIII",
    "group": "protestante",
    "summary": "Renovação devocional luterana e reformada que influenciou missões e movimentos posteriores."
  },
  {
    "id": "moravian",
    "name": "Morávios",
    "period": "séc. XVIII+",
    "group": "protestante",
    "summary": "Unidade dos Irmãos renovada em Herrnhut sob influência de Zinzendorf; forte ênfase missionária."
  },
  {
    "id": "methodist",
    "name": "Metodismo / Wesleyanismo",
    "period": "séc. XVIII+",
    "group": "protestante",
    "summary": "Movimento de renovação associado a John e Charles Wesley, inicialmente dentro do anglicanismo."
  },
  {
    "id": "great_awakening",
    "name": "Grande Despertamento evangélico",
    "period": "séc. XVIII",
    "group": "revival",
    "summary": "Rede de avivamentos transatlânticos associada a Edwards, Whitefield e outros."
  },
  {
    "id": "holiness",
    "name": "Movimento de Santidade",
    "period": "séc. XIX+",
    "group": "revival",
    "summary": "Desenvolvimento principalmente wesleyano com ênfase em santificação e vida santa."
  },
  {
    "id": "restoration",
    "name": "Movimentos restauracionistas",
    "period": "séc. XIX+",
    "group": "protestante",
    "summary": "Vários movimentos buscaram restaurar padrões considerados neotestamentários; não formam uma única denominação."
  },
  {
    "id": "adventist",
    "name": "Adventismo",
    "period": "séc. XIX+",
    "group": "protestante",
    "summary": "Família surgida do ambiente adventista/milerita do século XIX; inclui a Igreja Adventista do Sétimo Dia e outros ramos."
  },
  {
    "id": "pentecostal",
    "name": "Pentecostalismo moderno",
    "period": "1901/1906+",
    "group": "pentecostal",
    "summary": "Movimento moderno associado a Topeka e, decisivamente, à Rua Azusa, enfatizando dons do Espírito e experiências de 'batismo no Espírito Santo'."
  },
  {
    "id": "classical_pentecostal",
    "name": "Pentecostalismo clássico",
    "period": "séc. XX+",
    "group": "pentecostal",
    "summary": "Ramos formados nas primeiras décadas do pentecostalismo, como Assemblies of God, Church of God e Foursquare."
  },
  {
    "id": "oneness",
    "name": "Pentecostalismo unicista",
    "period": "década de 1910+",
    "group": "pentecostal",
    "summary": "Ramo pentecostal não trinitário surgido de controvérsias cristológicas/batismais na década de 1910."
  },
  {
    "id": "charismatic",
    "name": "Renovação carismática",
    "period": "década de 1960+",
    "group": "pentecostal",
    "summary": "Experiências e práticas pentecostais em igrejas protestantes históricas e no catolicismo."
  },
  {
    "id": "neo_pentecostal",
    "name": "Neopentecostalismos / terceira onda",
    "period": "fim séc. XX+",
    "group": "pentecostal",
    "summary": "Categoria acadêmica ampla e variável para movimentos mais recentes; não existe uma fronteira universalmente aceita."
  },
  {
    "id": "evangelical",
    "name": "Evangelicalismo moderno",
    "period": "sécs. XVIII–XXI",
    "group": "transversal",
    "summary": "Identidade transdenominacional que atravessa várias famílias protestantes, marcada por ênfases como conversão, Bíblia, cruz e evangelização."
  },
  {
    "id": "global_christianity",
    "name": "Cristianismo global contemporâneo",
    "period": "séc. XXI",
    "group": "hoje",
    "summary": "Mosaico mundial de tradições antigas, protestantes, pentecostais, carismáticas e movimentos independentes."
  }
];
const TRADITION_EDGES = [
  {
    "from": "apostolic",
    "to": "pre_nicene",
    "type": "continuidade",
    "label": "desenvolvimento histórico"
  },
  {
    "from": "pre_nicene",
    "to": "nicene",
    "type": "continuidade",
    "label": "séculos IV–V"
  },
  {
    "from": "nicene",
    "to": "church_east",
    "type": "separacao",
    "label": "processos cristológicos e imperiais séc. V"
  },
  {
    "from": "nicene",
    "to": "chalcedonian",
    "type": "continuidade",
    "label": "recepção de Calcedônia"
  },
  {
    "from": "nicene",
    "to": "oriental_orthodox",
    "type": "separacao",
    "label": "não recepção de Calcedônia"
  },
  {
    "from": "chalcedonian",
    "to": "eastern_orthodox",
    "type": "separacao",
    "label": "processo Oriente–Ocidente"
  },
  {
    "from": "chalcedonian",
    "to": "roman_catholic",
    "type": "separacao",
    "label": "processo Oriente–Ocidente"
  },
  {
    "from": "roman_catholic",
    "to": "lutheran",
    "type": "reforma",
    "label": "Reforma do séc. XVI"
  },
  {
    "from": "roman_catholic",
    "to": "reformed",
    "type": "reforma",
    "label": "Reforma suíça/francesa"
  },
  {
    "from": "roman_catholic",
    "to": "anglican",
    "type": "reforma",
    "label": "Reforma inglesa"
  },
  {
    "from": "roman_catholic",
    "to": "anabaptist",
    "type": "reforma",
    "label": "Reforma Radical"
  },
  {
    "from": "reformed",
    "to": "presbyterian",
    "type": "desenvolvimento",
    "label": "governo e confissões reformadas"
  },
  {
    "from": "reformed",
    "to": "congregational",
    "type": "desenvolvimento",
    "label": "puritanismo e independentes"
  },
  {
    "from": "anglican",
    "to": "puritan",
    "type": "reforma_interna",
    "label": "reformas puritanas"
  },
  {
    "from": "puritan",
    "to": "baptist",
    "type": "influencia",
    "label": "separatismo inglês"
  },
  {
    "from": "anabaptist",
    "to": "baptist",
    "type": "influencia",
    "label": "contato/influência debatidos"
  },
  {
    "from": "lutheran",
    "to": "pietist",
    "type": "renovacao",
    "label": "pietismo"
  },
  {
    "from": "pietist",
    "to": "moravian",
    "type": "influencia",
    "label": "renovação de Herrnhut"
  },
  {
    "from": "anglican",
    "to": "methodist",
    "type": "renovacao",
    "label": "movimento wesleyano"
  },
  {
    "from": "moravian",
    "to": "methodist",
    "type": "influencia",
    "label": "influência espiritual sobre Wesley"
  },
  {
    "from": "reformed",
    "to": "great_awakening",
    "type": "revival",
    "label": "Edwards e tradição reformada"
  },
  {
    "from": "anglican",
    "to": "great_awakening",
    "type": "revival",
    "label": "Whitefield e redes anglicanas"
  },
  {
    "from": "methodist",
    "to": "holiness",
    "type": "desenvolvimento",
    "label": "santidade wesleyana"
  },
  {
    "from": "holiness",
    "to": "pentecostal",
    "type": "influencia",
    "label": "uma das matrizes principais"
  },
  {
    "from": "baptist",
    "to": "pentecostal",
    "type": "influencia",
    "label": "redes de pregadores e missões"
  },
  {
    "from": "pentecostal",
    "to": "classical_pentecostal",
    "type": "desenvolvimento",
    "label": "denominações clássicas"
  },
  {
    "from": "pentecostal",
    "to": "oneness",
    "type": "separacao",
    "label": "controvérsia da década de 1910"
  },
  {
    "from": "pentecostal",
    "to": "charismatic",
    "type": "influencia",
    "label": "renovação em igrejas históricas"
  },
  {
    "from": "charismatic",
    "to": "neo_pentecostal",
    "type": "influencia",
    "label": "uma das influências; categoria ampla"
  },
  {
    "from": "classical_pentecostal",
    "to": "neo_pentecostal",
    "type": "influencia",
    "label": "continuidade e reação"
  },
  {
    "from": "reformed",
    "to": "evangelical",
    "type": "influencia",
    "label": "uma das matrizes"
  },
  {
    "from": "baptist",
    "to": "evangelical",
    "type": "influencia",
    "label": "uma das matrizes"
  },
  {
    "from": "methodist",
    "to": "evangelical",
    "type": "influencia",
    "label": "uma das matrizes"
  },
  {
    "from": "pentecostal",
    "to": "evangelical",
    "type": "sobreposicao",
    "label": "sobreposição parcial"
  },
  {
    "from": "roman_catholic",
    "to": "global_christianity",
    "type": "continuidade",
    "label": "presença contemporânea"
  },
  {
    "from": "eastern_orthodox",
    "to": "global_christianity",
    "type": "continuidade",
    "label": "presença contemporânea"
  },
  {
    "from": "oriental_orthodox",
    "to": "global_christianity",
    "type": "continuidade",
    "label": "presença contemporânea"
  },
  {
    "from": "church_east",
    "to": "global_christianity",
    "type": "continuidade",
    "label": "presença contemporânea"
  },
  {
    "from": "evangelical",
    "to": "global_christianity",
    "type": "continuidade",
    "label": "presença contemporânea"
  },
  {
    "from": "charismatic",
    "to": "global_christianity",
    "type": "continuidade",
    "label": "presença contemporânea"
  }
];
const TRADITION_FIGURES = [
  {
    "tradition": "pre_nicene",
    "names": [
      "Inácio de Antioquia",
      "Policarpo",
      "Justino Mártir",
      "Irineu",
      "Tertuliano",
      "Cipriano"
    ]
  },
  {
    "tradition": "nicene",
    "names": [
      "Atanásio",
      "Basílio de Cesareia",
      "Gregório de Nazianzo",
      "Gregório de Nissa",
      "Agostinho de Hipona"
    ]
  },
  {
    "tradition": "lutheran",
    "names": [
      "Martinho Lutero",
      "Filipe Melanchthon"
    ]
  },
  {
    "tradition": "reformed",
    "names": [
      "Ulrico Zuínglio",
      "João Calvino",
      "Teodoro de Beza"
    ]
  },
  {
    "tradition": "presbyterian",
    "names": [
      "John Knox"
    ]
  },
  {
    "tradition": "anabaptist",
    "names": [
      "Conrad Grebel",
      "Felix Manz",
      "Menno Simons"
    ]
  },
  {
    "tradition": "baptist",
    "names": [
      "John Smyth",
      "Thomas Helwys",
      "John Bunyan",
      "Charles Spurgeon"
    ]
  },
  {
    "tradition": "methodist",
    "names": [
      "John Wesley",
      "Charles Wesley"
    ]
  },
  {
    "tradition": "great_awakening",
    "names": [
      "Jonathan Edwards",
      "George Whitefield",
      "Gilbert Tennent"
    ]
  },
  {
    "tradition": "holiness",
    "names": [
      "Phoebe Palmer",
      "B. T. Roberts"
    ]
  },
  {
    "tradition": "pentecostal",
    "names": [
      "Charles Parham",
      "William J. Seymour"
    ]
  },
  {
    "tradition": "classical_pentecostal",
    "names": [
      "Aimee Semple McPherson",
      "E. N. Bell"
    ]
  },
  {
    "tradition": "charismatic",
    "names": [
      "Dennis Bennett"
    ]
  }
];
const BRAZIL_PENTECOSTAL = [
  {
    "year": "1910",
    "name": "Congregação Cristã no Brasil",
    "type": "pentecostal clássico",
    "figures": [
      "Luigi Francescon"
    ],
    "origin": "Missão pentecostal ítalo-americana; primeiros trabalhos no Paraná e em São Paulo.",
    "note": "A cronologia exata dos primeiros núcleos pode variar conforme a narrativa denominacional."
  },
  {
    "year": "1911",
    "name": "Assembleias de Deus no Brasil",
    "type": "pentecostal clássico",
    "figures": [
      "Gunnar Vingren",
      "Daniel Berg"
    ],
    "origin": "Belém do Pará; missionários suecos vindos de ambiente batista/pentecostal nos EUA.",
    "note": "Desenvolveu-se em múltiplas convenções e ministérios; não há uma única liderança nacional que represente todos os ramos."
  },
  {
    "year": "1951–1953",
    "name": "Igreja do Evangelho Quadrangular",
    "type": "pentecostal clássico / cura divina",
    "figures": [
      "Harold Williams",
      "Raymond Boatright"
    ],
    "origin": "Expansão brasileira da International Church of the Foursquare Gospel.",
    "note": "Teve forte papel em cruzadas de cura divina e evangelização em tendas."
  },
  {
    "year": "1955–1956",
    "name": "O Brasil para Cristo",
    "type": "pentecostal brasileiro",
    "figures": [
      "Manoel de Mello"
    ],
    "origin": "São Paulo; surgiu de ambiente ligado à Assembleia de Deus e à Cruzada Nacional de Evangelização/Quadrangular.",
    "note": "Um dos movimentos pentecostais brasileiros de forte uso de rádio e evangelismo de massa."
  },
  {
    "year": "1962",
    "name": "Igreja Pentecostal Deus é Amor",
    "type": "pentecostal brasileiro",
    "figures": [
      "David Miranda"
    ],
    "origin": "São Paulo.",
    "note": "Historicamente marcada por forte ênfase em cura divina, rádio e padrões de santidade próprios."
  },
  {
    "year": "1977",
    "name": "Igreja Universal do Reino de Deus",
    "type": "frequentemente classificada como neopentecostal",
    "figures": [
      "Edir Macedo"
    ],
    "origin": "Rio de Janeiro.",
    "note": "A categoria 'neopentecostal' é acadêmica e não funciona como autodefinição uniforme entre igrejas."
  }
];

const APOSTOLIC_FIGURES = [
  {id:'peter',name:'Pedro',refs:['Atos 1–12; 15','Gálatas 1–2'],role:'Apóstolo',summary:'Figura central nos primeiros capítulos de Atos e no debate sobre a missão entre judeus e gentios.'},
  {id:'john_apostle',name:'João',refs:['Atos 3–4; 8','Gálatas 2:9'],role:'Apóstolo',summary:'Aparece com Pedro em Atos e é citado por Paulo entre as colunas da igreja.'},
  {id:'james_zebedee',name:'Tiago, filho de Zebedeu',refs:['Atos 12:1–2'],role:'Apóstolo',summary:'Atos registra sua execução por ordem de Herodes Agripa I.'},
  {id:'james_jesus_brother',name:'Tiago, irmão do Senhor',refs:['Atos 12:17; 15; 21:18','Gálatas 1:19; 2:9'],role:'Liderança de Jerusalém',summary:'Figura de destaque na comunidade de Jerusalém e no concílio de Atos 15.'},
  {id:'stephen',name:'Estêvão',refs:['Atos 6–8'],role:'Testemunha / mártir',summary:'Seu discurso e morte precedem a dispersão narrada em Atos 8.'},
  {id:'philip_evangelist',name:'Filipe',refs:['Atos 6:5; 8; 21:8'],role:'Evangelista',summary:'Atua em Samaria e no encontro com o eunuco etíope; reaparece em Cesareia.'},
  {id:'barnabas',name:'Barnabé',refs:['Atos 4:36–37; 9; 11–15'],role:'Missionário',summary:'Coopera com Paulo e tem papel importante na igreja de Antioquia.'},
  {id:'paul',name:'Paulo',refs:['Atos 9–28','Cartas paulinas'],role:'Apóstolo / missionário',summary:'A narrativa de Atos acompanha extensamente suas viagens e defesa do evangelho entre gentios.'},
  {id:'silas',name:'Silas / Silvano',refs:['Atos 15–18','1 Pedro 5:12'],role:'Missionário',summary:'Companheiro de Paulo após o concílio de Jerusalém.'},
  {id:'timothy',name:'Timóteo',refs:['Atos 16–20','1–2 Timóteo'],role:'Cooperador',summary:'Jovem cooperador de Paulo citado em Atos e em diversas cartas.'},
  {id:'titus',name:'Tito',refs:['Gálatas 2:1–3','2 Coríntios','Tito'],role:'Cooperador',summary:'Cooperador de Paulo; não é nomeado em Atos, mas aparece nas cartas.'},
  {id:'priscilla',name:'Priscila',refs:['Atos 18','Romanos 16:3–5'],role:'Cooperadora / mestre',summary:'Com Áquila, hospeda e instrui Apolo com maior precisão sobre o caminho de Deus.'},
  {id:'aquila',name:'Áquila',refs:['Atos 18','Romanos 16:3–5'],role:'Cooperador',summary:'Marido de Priscila e cooperador de Paulo.'},
  {id:'apollos',name:'Apolo',refs:['Atos 18:24–28; 19:1','1 Coríntios 1–4'],role:'Pregador / mestre',summary:'Judeu alexandrino eloquente, posteriormente associado à igreja de Corinto.'},
  {id:'mark',name:'João Marcos',refs:['Atos 12:12,25; 13:5,13; 15:37–39'],role:'Cooperador',summary:'Participa da primeira viagem missionária e depois segue com Barnabé.'},
  {id:'luke',name:'Lucas',refs:['Colossenses 4:14','Filemom 24','2 Timóteo 4:11'],role:'Cooperador',summary:'Chamado de médico amado em Colossenses; tradicionalmente associado a Lucas-Atos.'}
];
