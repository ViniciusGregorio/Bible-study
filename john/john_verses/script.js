const data = [
  {
    cap: "João 1",
    verses: [
      {
        ref: "1:10",
        text: "A Palavra estava no mundo...",
        insight: "O Criador foi rejeitado pela criação."
      },
      {
        ref: "1:11",
        text: "Veio para o que era seu...",
        insight: "Religião não garante aceitação de Deus."
      },
      {
        ref: "1:41",
        text: "Achamos o Messias...",
        insight: "Quem encontra Jesus compartilha."
      },
      {
        ref: "1:45",
        text: "Achamos aquele de quem Moisés escreveu...",
        insight: "Jesus cumpre toda a Escritura."
      }
    ]
  },

  {
    cap: "João 2",
    verses: [
      {
        ref: "2:15",
        text: "Expulsou todos do templo...",
        insight: "Deus rejeita fé corrompida."
      },
      {
        ref: "2:24-25",
        text: "Jesus conhecia todos...",
        insight: "Deus vê o coração."
      }
    ]
  },

  {
    cap: "João 3",
    verses: [
      {
        ref: "3:16",
        text: "Porque Deus amou o mundo...",
        insight: "O coração do evangelho.",
        highlight: true
      },
      {
        ref: "3:19-20",
        text: "A luz veio ao mundo...",
        insight: "O homem ama mais o pecado do que a luz."
      },
      {
        ref: "3:30",
        text: "Ele deve crescer...",
        insight: "Vida cristã é diminuir para Cristo crescer."
      }
    ]
  },

  {
    cap: "João 4",
    verses: [
      {
        ref: "4:23",
        text: "Adorar em espírito e verdade...",
        insight: "Deus busca essência, não ritual."
      },
      {
        ref: "4:26",
        text: "Eu sou o Messias...",
        insight: "Jesus se revela diretamente."
      },
      {
        ref: "4:34",
        text: "Minha comida é fazer a vontade de Deus...",
        insight: "Propósito sustenta a alma."
      }
    ]
  },

  {
    cap: "João 5",
    verses: [
      {
        ref: "5:6",
        text: "Você quer ser curado?",
        insight: "Mudança exige decisão."
      },
      {
        ref: "5:24",
        text: "Quem crê tem vida eterna...",
        insight: "Salvação começa agora."
      }
    ]
  },

  {
    cap: "João 6",
    verses: [
      {
        ref: "6:35",
        text: "Eu sou o pão da vida...",
        insight: "Jesus é sustento espiritual."
      },
      {
        ref: "6:37",
        text: "Quem vem a mim...",
        insight: "Jesus não rejeita ninguém."
      },
      {
        ref: "6:68",
        text: "Só tu tens palavras de vida eterna...",
        insight: "Só Jesus satisfaz completamente."
      }
    ]
  },

  {
    cap: "João 7",
    verses: [
      {
        ref: "7:16",
        text: "Meu ensino vem de Deus...",
        insight: "Jesus fala com autoridade divina."
      },
      {
        ref: "7:37",
        text: "Se alguém tem sede...",
        insight: "Jesus é a fonte da vida."
      }
    ]
  },

  {
    cap: "João 8",
    verses: [
      {
        ref: "8:11",
        text: "Eu não te condeno...",
        insight: "Graça e transformação caminham juntas."
      },
      {
        ref: "8:32",
        text: "A verdade vos libertará...",
        insight: "A verdade em Cristo liberta."
      }
    ]
  },

  {
    cap: "João 9",
    verses: [
      {
        ref: "9:25",
        text: "Eu era cego e agora vejo...",
        insight: "Testemunho simples é poderoso."
      },
      {
        ref: "9:38",
        text: "Eu creio, Senhor!",
        insight: "Fé leva à adoração."
      }
    ]
  },

  {
    cap: "João 10",
    verses: [
      {
        ref: "10:10",
        text: "Eu vim para que tenham vida...",
        insight: "Jesus traz vida abundante."
      },
      {
        ref: "10:27",
        text: "Minhas ovelhas ouvem minha voz...",
        insight: "Relacionamento verdadeiro com Cristo."
      }
    ]
  }
];

// GERAR MENU
const menu = document.getElementById("menu");
const content = document.getElementById("content");

data.forEach((chapter, index) => {
  const btn = document.createElement("button");
  btn.innerText = chapter.cap;

  btn.onclick = () => {
    document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderChapter(index);
  };

  if (index === 0) btn.classList.add("active");

  menu.appendChild(btn);
});

// RENDER CAPÍTULO
function renderChapter(index) {
  const chapter = data[index];
  content.innerHTML = `<h2>${chapter.cap}</h2>`;

  chapter.verses.forEach(v => {
    const card = document.createElement("div");
    card.className = "card";

    if (v.highlight) card.classList.add("highlight");

    card.innerHTML = `
      <h3>${chapter.cap} ${v.ref}</h3>
      <p class="verse">${v.text}</p>
      <div class="details">
        <p><strong>Insight:</strong> ${v.insight}</p>
      </div>
    `;

    card.onclick = () => {
      card.classList.toggle("open");
    };

    content.appendChild(card);
  });
}

// INIT
renderChapter(0);