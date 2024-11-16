// Array para armazenar as fichas
let fichas = [];

// Função para carregar as fichas do LocalStorage
function carregarFichas() {
    const fichasSalvas = localStorage.getItem('fichas');
    if (fichasSalvas) {
        fichas = JSON.parse(fichasSalvas);
    }
}

// Função para criar uma nova ficha e redirecionar para ela
document.getElementById('atributos-header').addEventListener('click', () => {
    // Cria a nova ficha com valores padrão
    const novaFicha = {
        nome: '[Sem nome]',
        classe: 'Classe indefinida',
        data: new Date().toLocaleDateString('pt-BR'),
        atributos: {
            agilidade: 1,
            forca: 1,
            intelecto: 1,
            presenca: 1,
            vigor: 1
        }
    };

    // Adiciona a ficha ao array de fichas
    fichas.push(novaFicha);

    // Salva as fichas no LocalStorage
    localStorage.setItem('fichas', JSON.stringify(fichas));

    // Obtém o índice da ficha criada
    const index = fichas.length - 1;

    // Redireciona para a página de atributos da ficha criada
    window.location.href = `ficha.html?fichaIndex=${index}`;
});

// Função para carregar a ficha específica
function carregarFicha(index) {
    if (fichas[index]) {
        const ficha = fichas[index];
        // Aqui você pode preencher os campos da ficha na página, por exemplo:
        document.getElementById('nome').textContent = ficha.nome;
        document.getElementById('classe').textContent = ficha.classe;
        document.getElementById('data').textContent = ficha.data;
        // Exibir os atributos
        for (let atributo in ficha.atributos) {
            document.getElementById(atributo).textContent = ficha.atributos[atributo];
        }
    }
}

// Quando a página da ficha for carregada, obtém o índice da ficha e carrega os dados
if (window.location.href.includes('ficha.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const fichaIndex = urlParams.get('fichaIndex');
    carregarFichas();  // Carrega as fichas do LocalStorage
    carregarFicha(fichaIndex);  // Carrega a ficha específica
}
