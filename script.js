// Contagem regressiva para o fim do dia (23:59)
function atualizarContador() {
  const agora = new Date();
  const fimDoDia = new Date();
  fimDoDia.setHours(23, 59, 59, 999);
  const diff = fimDoDia - agora;

  const horas = Math.floor(diff / (1000 * 60 * 60));
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById('contador').textContent = `${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Frases rotativas automáticas
const frases = [
  "“Comecei com R$ 100, hoje já fiz R$ 1.150.” — Ana L.",
  "“Nunca entendi nada de apostas, mas o bot faz tudo.” — Felipe R.",
  "“Achei que era golpe, hoje pago todas as contas com isso.” — Bruno S.",
  "“Parece mentira, mas é real. Só seguir os sinais.” — Karen V."
];

let index = 0;
const fraseBox = document.getElementById("frase-rotativa");

function trocarFrase() {
  fraseBox.textContent = frases[index];
  index = (index + 1) % frases.length;
}

setInterval(trocarFrase, 5000);
trocarFrase();
