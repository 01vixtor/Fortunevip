// Frases de impacto
const frasesImpacto = [
  "O próximo a mudar de vida pode ser você.",
  "Chega de perder! Comece a ganhar agora.",
  "Não fique de fora da nova era dos sinais.",
  "Fortune Tiger não é sorte. É estratégia.",
  "Quem lucra hoje, decidiu ontem. Entre já."
];
document.getElementById("frase-impacto").innerText =
  frasesImpacto[Math.floor(Math.random() * frasesImpacto.length)];

// Frases de urgência que mudam a cada reload
const mensagensUrgencia = [
  "⚠️ As vagas estão acabando, entre agora! ⚠️",
  "⏳ Grupo quase cheio, essa pode ser sua última chance!",
  "🔥 Os sinais mais quentes estão rolando agora mesmo!",
  "💥 Já estamos no terceiro lucro do dia. Corre!",
  "📉 Cada minuto fora do grupo é lucro perdido."
];
document.getElementById("mensagem-urgente").innerText =
  mensagensUrgencia[Math.floor(Math.random() * mensagensUrgencia.length)];

// Atualiza número de pessoas online fake
setInterval(() => {
  const online = Math.floor(Math.random() * (950 - 780 + 1)) + 780;
  document.getElementById("online-count").innerText = `👥 ${online} jogadores online agora`;
}, 4000);

// Texto do botão mudando automaticamente
const btn = document.getElementById("cta-button");
const frasesBotao = [
  "ENTRE AGORA NO MELHOR GRUPO DE SINAIS DO BRASIL",
  "🔥 Nova estratégia liberada!",
  "⚡ Grupo quase cheio! Últimas vagas!",
  "💰 Mude sua vida com os sinais certos!"
];
function mudarTextoBotao() {
  btn.innerText = frasesBotao[Math.floor(Math.random() * frasesBotao.length)];
  setTimeout(mudarTextoBotao, Math.floor(Math.random() * 7000) + 8000);
}
mudarTextoBotao();

// Feedbacks fake
const feedbacks = [
  { nome: "Amanda - BA", texto: "Fiz R$ 230 em 2 dias com os sinais. Inacreditável!" },
  { nome: "Rafael - SP", texto: "O grupo realmente entrega o que promete. Lucro real!" },
  { nome: "Camila - MG", texto: "Entrei com medo, hoje indico pra todos meus amigos!" },
  { nome: "Bruno - SC", texto: "Nunca pensei que dava pra ganhar assim, top demais!" }
];

const container = document.getElementById("feedbacks");
feedbacks.forEach((f) => {
  const card = document.createElement("div");
  card.className = "feedback-card";
  card.innerHTML = `<h4>${f.nome}</h4><p>${f.texto}</p>`;
  container.appendChild(card);
});
