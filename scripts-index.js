// Array para armazenar as fichas
let fichas = [];

// Seletores
const fichasContainer = document.getElementById('fichas-container');
const novaFichaBtn = document.getElementById('nova-ficha-btn');

// Função para carregar dados do LocalStorage
function carregarFichas() {
    const fichasSalvas = localStorage.getItem('fichas');
    if (fichasSalvas) {
        fichas = JSON.parse(fichasSalvas);
    }
    renderFichas(); // Renderiza na tela
}

// Função para salvar as fichas no LocalStorage
function salvarFichasLocal() {
    localStorage.setItem('fichas', JSON.stringify(fichas));
}

// Função para renderizar as fichas
function renderFichas() {
    fichasContainer.innerHTML = ''; // Limpar o container
    fichas.forEach((ficha, index) => {
        const fichaCard = document.createElement('div');
        fichaCard.className = 'ficha-card';
        fichaCard.innerHTML = `
            <div>
                <h2 contenteditable="true" class="ficha-nome" data-index="${index}">${ficha.nome || '[Sem nome]'}</h2>
                <p contenteditable="true" class="ficha-classe" data-index="${index}">${ficha.classe}</p>
                <p>Registrado em ${ficha.data}</p>
            </div>
            <button onclick="acessarFicha(${index})">Acessar Ficha</button>
        `;
        fichasContainer.appendChild(fichaCard);
    });

    // Adicionando eventos para edição do nome e classe
    document.querySelectorAll('.ficha-nome').forEach((element) => {
        element.addEventListener('blur', (e) => {
            const index = e.target.getAttribute('data-index');
            fichas[index].nome = e.target.innerText;
            salvarFichasLocal();
        });
    });

    document.querySelectorAll('.ficha-classe').forEach((element) => {
        element.addEventListener('blur', (e) => {
            const index = e.target.getAttribute('data-index');
            fichas[index].classe = e.target.innerText;
            salvarFichasLocal();
        });
    });
}

// Função para criar uma nova ficha
novaFichaBtn.addEventListener('click', () => {
    const novaFicha = {
        nome: '[Sem nome]',
        classe: 'Classe indefinida',
        data: new Date().toLocaleDateString('pt-BR'),
        atributos: {
            força: 10,
            destreza: 10,
            inteligência: 10,
            vida: 20,
            mana: 10
        }
    };
    fichas.push(novaFicha);
    salvarFichasLocal();
    renderFichas();
});

// Função para acessar uma ficha
function acessarFicha(index) {
    alert(`Acessando ficha: ${fichas[index].nome}`);
    // Aqui você pode abrir uma nova página ou modal com mais informações.
}

// Inicializar com os dados do LocalStorage
carregarFichas();
