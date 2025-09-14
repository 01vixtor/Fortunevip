// Contagem regressiva de 3 horas
const fim = new Date().getTime() + (3 * 60 * 60 * 1000);

const contador = setInterval(() => {
  const agora = new Date().getTime();
  const distancia = fim - agora;

  const horas = Math.floor((distancia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((distancia / (1000 * 60)) % 60);
  const segundos = Math.floor((distancia / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `⏳ Expira em ${horas}h ${minutos}m ${segundos}s`;

  if (distancia < 0) {
    clearInterval(contador);
    document.getElementById("contador").innerHTML = "⚠️ Oferta encerrada!";
  }
}, 1000);
