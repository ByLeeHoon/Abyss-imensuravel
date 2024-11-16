// Array para armazenar as fichas
let fichas = [];

// Seletores
const fichasContainer = document.getElementById('fichas-container');
const novaFichaBtn = document.getElementById('nova-ficha-btn');

// Função para renderizar as fichas
function renderFichas() {
    fichasContainer.innerHTML = ''; // Limpar o container
    fichas.forEach((ficha, index) => {
        const fichaCard = document.createElement('div');
        fichaCard.className = 'ficha-card';
        fichaCard.innerHTML = `
            <div>
                <h2>${ficha.nome || '[Sem nome]'}</h2>
                <p>${ficha.classe}</p>
                <p>Registrado em ${ficha.data}</p>
            </div>
            <button onclick="acessarFicha(${index})">Acessar Ficha</button>
        `;
        fichasContainer.appendChild(fichaCard);
    });
}

// Função para criar uma nova ficha
novaFichaBtn.addEventListener('click', () => {
    const novaFicha = {
        nome: '[Sem nome]',
        classe: 'Classe indefinida',
        data: new Date().toLocaleDateString('pt-BR'),
    };
    fichas.push(novaFicha);
    renderFichas();
});

// Função para acessar uma ficha
function acessarFicha(index) {
    alert(`Acessando ficha: ${fichas[index].nome}`);
    // Aqui você pode abrir uma nova página ou modal com mais informações.
}

// Inicializar
renderFichas();
