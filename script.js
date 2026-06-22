// Scroll suave
document.getElementById("explore-btn").addEventListener("click", () => {
  document.getElementById("technologies").scrollIntoView({ behavior: "smooth" });
});

// Dados
const techDetails = {
  drones: {
    title: "Drones Agrícolas",
    desc: "Drones monitoram lavouras e aplicam insumos com precisão."
  },
  iot: {
    title: "IoT e Sensores",
    desc: "Sensores coletam dados do solo em tempo real."
  },
  ia: {
    title: "Inteligência Artificial",
    desc: "IA prevê safras e melhora decisões agrícolas."
  },
  hidroponia: {
    title: "Hidroponia",
    desc: "Cultivo sem solo, mais eficiente e sustentável."
  }
};

// Modal tecnologias
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

// Fechar modal
document.getElementById("close-modal").addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// CONTATO MODAL
const contactModal = document.createElement("div");
contactModal.classList.add("modal");

contactModal.innerHTML = `
  <div class="modal-content">
    <h3>Contato</h3>
    <p>Email: contato@agrofuturo.com</p>
    <p>WhatsApp: +55 (41) 99999-9999</p>
    <button id="close-contact" class="close-btn">Fechar</button>
  </div>
`;

document.body.appendChild(contactModal);

document.getElementById("btn-contact").addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.classList.add("active");
});

contactModal.addEventListener("click", (e) => {
  if (e.target === contactModal || e.target.id === "close-contact") {
    contactModal.classList.remove("active");
  }
});