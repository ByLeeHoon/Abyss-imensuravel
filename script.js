// Verifica se o usuário está logado
document.addEventListener("DOMContentLoaded", () => {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (!usuarioLogado) {
        // Redireciona para a tela de login se o usuário não estiver logado
        window.location.href = "login.html";
    }
});

// Seleciona o botão "Nova Ficha"
const novaFichaBtn = document.getElementById('nova-ficha-btn');

// Adiciona o evento de clique para redirecionar para a página de atributos
novaFichaBtn.addEventListener('click', () => {
    window.location.href = 'atributos.html'; // Redireciona para atributos.html
});
// Carregar fichas do localStorage
async function carregarFichas() {
    const fichasSalvas = localStorage.getItem('fichas');
    if (fichasSalvas) {
        fichas = JSON.parse(fichasSalvas);
    } else {
        fichas = []; // Inicializa um array vazio se não houver fichas
    }
    renderFichas();
}

// Salvar fichas no localStorage
function salvarFichasLocal() {
    localStorage.setItem('fichas', JSON.stringify(fichas));
}

// Adicione uma nova ficha
function adicionarFicha(ficha) {
    fichas.push(ficha);
    salvarFichasLocal();
    renderFichas();
}

// Renderizar fichas na tela inicial
function renderFichas() {
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
