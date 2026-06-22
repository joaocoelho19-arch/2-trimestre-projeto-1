// SCROLL SUAVE BOTÃO
document.getElementById("explore-btn").addEventListener("click", () => {
  document.getElementById("technologies")
    .scrollIntoView({ behavior: "smooth" });
});

// DADOS TECNOLOGIAS
const techDetails = {
  drones: {
    title: "Drones Agrícolas",
    desc: "Monitoramento inteligente das lavouras com precisão."
  },
  iot: {
    title: "IoT e Sensores",
    desc: "Coleta de dados do solo em tempo real."
  },
  ia: {
    title: "Inteligência Artificial",
    desc: "IA ajuda a prever safras e melhorar decisões."
  },
  hidroponia: {
    title: "Hidroponia",
    desc: "Cultivo sem solo, mais eficiente e sustentável."
  }
};

// MODAL TECNOLOGIAS
const techModal = document.getElementById("tech-modal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-description");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const data = techDetails[card.dataset.tech];

    title.textContent = data.title;
    desc.textContent = data.desc;

    techModal.classList.add("active");
  });
});

document.getElementById("close-modal").addEventListener("click", () => {
  techModal.classList.remove("active");
});

techModal.addEventListener("click", (e) => {
  if (e.target === techModal) {
    techModal.classList.remove("active");
  }
});

// MODAL CONTATO
const contactModal = document.getElementById("contact-modal");

document.getElementById("btn-contact").addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.classList.add("active");
});

document.getElementById("close-contact").addEventListener("click", () => {
  contactModal.classList.remove("active");
});

contactModal.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove("active");
  }
});