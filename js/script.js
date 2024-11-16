// Detecta se o usuário está logado ao carregar a página
window.onload = () => {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    
    if (!usuarioLogado) {
        // Se o usuário não estiver logado, redireciona para o login
        window.location.href = 'html/register.html'; // Página de login
    } else {
        // O usuário está logado, então pode acessar as fichas
        carregarFichas();
    }
};

// Função para carregar fichas (caso o usuário esteja logado)
function carregarFichas() {
    const fichasSalvas = localStorage.getItem('fichas');
    const fichasContainer = document.getElementById('fichas-container');
    if (fichasSalvas) {
        fichas = JSON.parse(fichasSalvas);
        renderFichas();
    } else {
        fichas = []; // Caso não haja fichas, inicializa um array vazio
    }
}

// Função para renderizar as fichas na tela
function renderFichas() {
    const fichasContainer = document.getElementById('fichas-container');
    fichasContainer.innerHTML = ''; // Limpa a tela
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

// Evento para o botão "Nova Ficha"
document.getElementById('nova-ficha-btn').addEventListener('click', () => {
    window.location.href = 'html/atributos.html'; // Redireciona para a página de atributos
});
