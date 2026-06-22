// Scroll suave botão
document.getElementById("explore-btn").addEventListener("click", () => {
  document.getElementById("technologies").scrollIntoView({ behavior: "smooth" });
});

// Dados das tecnologias
const techDetails = {
  drones: {
    title: "Drones Agrícolas",
    desc: "Monitoramento de lavouras com precisão."
  },
  iot: {
    title: "IoT e Sensores",
    desc: "Coleta de dados do solo em tempo real."
  },
  ia: {
    title: "Inteligência Artificial",
    desc: "IA prevê safras e melhora decisões."
  },
  hidroponia: {
    title: "Hidroponia",
    desc: "Cultivo sem solo e mais eficiente."
  }
};

// MODAL TECNOLOGIAS
const modal = document.getElementById("tech-modal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-description");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const data = techDetails[card.dataset.tech];

    title.textContent = data.title;
    desc.textContent = data.desc;

    modal.classList.add("active");
  });
});

document.getElementById("close-modal").addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
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