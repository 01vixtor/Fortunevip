const button = document.getElementById('cta-button');
const messages = [
  'ENTRE AGORA NO MELHOR GRUPO DE SINAIS DO BRASIL',
  'Nova estratégia liberada!',
  'Grupo quase cheio! Últimas vagas!',
  'Sinais atualizados em tempo real!',
  'Mude sua vida com os sinais certos!'
];

function changeButtonText() {
  const random = Math.floor(Math.random() * messages.length);
  button.innerText = messages[random];
  const nextChange = Math.floor(Math.random() * (13 - 7 + 1) + 7) * 1000;
  setTimeout(changeButtonText, nextChange);
}
changeButtonText();

const online = document.getElementById('online-count');

function updateOnline() {
  const fakeOnline = Math.floor(Math.random() * (1010 - 720) + 720);
  online.textContent = `👥 ${fakeOnline} jogadores online agora`;
}
setInterval(updateOnline, 4000);

const feedbackList = [
  { nome: "João - SP", texto: "Já recuperei meu investimento em 2 dias!" },
  { nome: "Karla - PR", texto: "Pensava que era enganação… tô no lucro!" },
  { nome: "Lucas - RJ", texto: "Valeu a pena demais, sinais certeiros." },
  { nome: "Aline - MG", texto: "Já fiz meu primeiro saque. Top demais!" },
  { nome: "Diego - BA", texto: "Recomendei pra todo mundo aqui!" }
];

const feedbackDiv = document.getElementById('feedbacks');

function renderFeedbacks() {
  feedbackDiv.innerHTML = "";
  feedbackList.forEach(fb => {
    const el = document.createElement('div');
    el.className = "feedback-card";
    el.innerHTML = `<h4>${fb.nome}</h4><p>${fb.texto}</p>`;
    feedbackDiv.appendChild(el);
  });
}
renderFeedbacks();
