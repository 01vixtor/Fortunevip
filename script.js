// Troca de texto automática no botão
const button = document.getElementById('cta-button');
const messages = [
  'CLICA AQUI',
  'Nova estratégia disponível!',
  'Aproveite antes que acabe!',
  'Última chance do dia!',
  'Ganhe enquanto os outros dormem!'
];

function changeButtonText() {
  const random = Math.floor(Math.random() * messages.length);
  button.innerText = messages[random];
  const nextChange = Math.floor(Math.random() * (13 - 7 + 1) + 7) * 1000;
  setTimeout(changeButtonText, nextChange);
}
changeButtonText();

// Contador fake de jogadores online
const online = document.getElementById('online-count');

function updateOnline() {
  const fakeOnline = Math.floor(Math.random() * (1000 - 720) + 720);
  online.textContent = `👥 ${fakeOnline} jogadores online agora`;
}
setInterval(updateOnline, 4000);

// Feedbacks fakes
const feedbacks = [
  '“Entrei ontem e já bati minha primeira meta!” — João/SP',
  '“Pensava que era enganação… tô no lucro!” — Karla/PR',
  '“Valeu a pena demais, sinais certeiros.” — Lucas/RJ',
  '“Já fiz meu primeiro saque. Top demais!” — Aline/MG',
  '“Recomendei pra todo mundo aqui.” — Diego/BA'
];

let feedbackIndex = 0;
const feedbackDiv = document.getElementById('feedbacks');

function changeFeedback() {
  feedbackDiv.innerHTML = `<p>${feedbacks[feedbackIndex]}</p>`;
  feedbackIndex = (feedbackIndex + 1) % feedbacks.length;
}
setInterval(changeFeedback, 5000);
changeFeedback();
