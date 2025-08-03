// Frases de urgência rotativas (a cada 30 segundos)
const urgencyTexts = [
    "Vagas encerram em breve",
    "Últimas vagas disponíveis",
    "Não perca essa oportunidade",
    "Garanta seu lugar agora",
    "Oferta por tempo limitado"
];

let urgencyIndex = 0;
const urgencyElement = document.getElementById("urgency-text");

function changeUrgencyText() {
    urgencyIndex = (urgencyIndex + 1) % urgencyTexts.length;
    urgencyElement.textContent = urgencyTexts[urgencyIndex];
}

setInterval(changeUrgencyText, 30000); // 30 segundos

// Contador animado com incremento lento a cada 1 minuto
let projectsCount = 150;
let experienceCount = 20;

const projectsCountElement = document.getElementById("projects-count");
const experienceCountElement = document.getElementById("experience-count");

function incrementCounters() {
    // Incrementa projetos (até +160)
    if (projectsCount < 160) {
        projectsCount++;
        projectsCountElement.textContent = `+${projectsCount}`;
    }

    // Incrementa experiência (até +22)
    if (experienceCount < 22) {
        experienceCount++;
        experienceCountElement.textContent = `+${experienceCount}`;
    }
}

// Incrementa a cada 1 minuto (60000 ms)
setInterval(incrementCounters, 60000);
