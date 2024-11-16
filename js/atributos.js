// Armazena os atributos do personagem
let atributos = {
    agilidade: 1,
    força: 1,
    intelecto: 1,
    presença: 1,
    vigor: 1,
};

// Seletores
const atributosDivs = document.querySelectorAll('.atributo-numerico');
const header = document.querySelector('header');

// Atualiza visualmente os valores na interface
function atualizarAtributosNaTela() {
    const atributosKeys = Object.keys(atributos);
    atributosDivs.forEach((div, index) => {
        div.textContent = atributos[atributosKeys[index]];
    });
}

// Configura um atributo para ser editável
function tornarEditavel(div, atributoKey) {
    const valorAtual = atributos[atributoKey];
    const input = document.createElement('input');
    input.type = 'number';
    input.value = valorAtual;
    input.min = 0;
    input.max = 5;
    input.style.width = '50px';

    // Substitui o número pelo campo de entrada
    div.innerHTML = '';
    div.appendChild(input);
    input.focus();

    // Evento para salvar ao sair do campo ou pressionar Enter
    const salvarAtributo = () => {
        let novoValor = parseInt(input.value, 10);
        if (isNaN(novoValor) || novoValor < 0 || novoValor > 5) {
            novoValor = valorAtual; // Reverte se inválido
        }
        atributos[atributoKey] = novoValor; // Atualiza o atributo
        atualizarAtributosNaTela(); // Atualiza na interface
    };

    input.addEventListener('blur', salvarAtributo);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            salvarAtributo();
            div.focus(); // Remove o foco do input
        }
    });
}

// Adiciona evento de clique para editar os atributos
atributosDivs.forEach((div, index) => {
    const atributoKey = Object.keys(atributos)[index];
    div.addEventListener('click', () => {
        tornarEditavel(div, atributoKey);
    });
});

// Evento para clicar no gradiente e voltar à tela inicial
header.addEventListener('click', () => {
    salvarFicha();
    window.location.href = 'index.html';
});

// Salvar ficha no armazenamento local (ou pode ser adaptado para salvar em um servidor)
function salvarFicha() {
    const novaFicha = {
        nome: 'Novo Personagem',
        classe: 'Classe Indefinida',
        data: new Date().toLocaleDateString('pt-BR'),
        atributos: { ...atributos },
    };

    // Busca fichas existentes no localStorage ou inicia um novo array
    const fichas = JSON.parse(localStorage.getItem('fichas')) || [];
    fichas.push(novaFicha);

    // Salva a nova ficha
    localStorage.setItem('fichas', JSON.stringify(fichas));
    console.log('Ficha salva:', novaFicha);
}

// Inicializa os valores dos atributos na tela
atualizarAtributosNaTela();
