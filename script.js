// --- 1. Sistema de Rolagem Suave do Botão Hero ---
document.getElementById('explore-btn').addEventListener('click', () => {
  document.getElementById('technologies').scrollIntoView({ behavior: 'smooth' });
});

// --- 2. Banco de Dados Local para as informações dos Modais ---
const techDetails = {
  drones: {
    title: "Drones Agrícolas",
    desc: "Os drones realizam o mapeamento multiespectral da lavoura, identificando pragas, falhas de plantio e estresse hídrico em poucos minutos. Além disso, modelos mais robustos conseguem aplicar defensivos e fertilizantes de forma cirúrgica, reduzindo o desperdício em até 80%."
  },
  iot: {
    title: "IoT e Sensores",
    desc: "Sensores enterrados no solo medem a umidade, temperatura e condutividade elétrica em tempo real. Conectados à nuvem via Internet das Coisas (IoT), eles ativam sistemas automatizados de irrigação apenas quando necessário, economizando água e energia."
  },
  ia: {
    title: "Inteligência Artificial",
    desc: "Nossos algoritmos analisam históricos de clima, dados de satélite e condições do solo para prever o volume exato da colheita e sugerir a melhor época para o plantio. A IA transforma dados brutos em decisões de alta rentabilidade comerciais."
  },
  hidroponia: {
    title: "Hidroponia e Vertical Farming",
    desc: "Criação de ecossistemas fechados onde as plantas crescem sem solo, flutuando em água rica em nutrientes. O Vertical Farming (fazendas verticais) utiliza luzes LED controladas para produzir alimentos em centros urbanos o ano todo, usando 95% menos água."
  }
};

// --- 3. Lógica para Abrir/Fechar o Modal nos Cards ---
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('tech-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');

// Abre o modal injetando as informações com base no card clicado
cards.forEach(card => {
  card.addEventListener('click', () => {
    const techKey = card.getAttribute('data-tech');
    const info = techDetails[techKey];

    if (info) {
      modalTitle.textContent = info.title;
      modalDesc.textContent = info.desc;
      modal.classList.add('active');
    }
  });
});

// Fecha o modal ao clicar no botão fechar
closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Fecha o modal ao clicar fora da caixa branca de conteúdo
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});