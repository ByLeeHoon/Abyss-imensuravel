// Seletores dos elementos
const atributos = document.querySelectorAll('.atributo');
const headerGradiente = document.querySelector('header');  // Gradiente no cabeçalho
const numeroAtributos = document.querySelectorAll('.atributo-numerico');  // Para os números editáveis

// Função para garantir que o valor dos atributos esteja entre 0 e 5
function validarValor(valor) {
    if (valor < 0) return 0;
    if (valor > 5) return 5;
    return valor;
}

// Função para permitir apenas números no input
function apenasNumeros(event) {
    const keyCode = event.keyCode || event.which;
    if (keyCode < 48 || keyCode > 57) {
        event.preventDefault(); // Impede a digitação de qualquer coisa que não seja número
    }
}

// Função para iniciar a edição do número do atributo
function iniciarEdicaoAtributo(event, index) {
    const atributo = atributos[index];
    const numeroElemento = atributo.querySelector('.atributo-numerico');

    // Criando o campo de input para edição
    const input = document.createElement('input');
    input.type = 'text';
    input.value = numeroElemento.textContent; // Valor atual do atributo
    input.maxLength = 1; // Limitar o número de caracteres para 1
    input.style.width = '30px';
    input.style.textAlign = 'center';
    input.style.backgroundColor = '#e0e0e0'; // Fundo cinza

    // Substituindo o número pelo input
    numeroElemento.innerHTML = '';
    numeroElemento.appendChild(input);
    input.focus();

    // Adicionando eventos para confirmar a edição
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            let novoValor = parseInt(input.value);
            numeroElemento.textContent = validarValor(novoValor);
            input.remove(); // Remove o campo de input após editar
        }
    });

    // Adicionando evento de blur (quando o usuário clicar fora)
    input.addEventListener('blur', function () {
        let novoValor = parseInt(input.value);
        numeroElemento.textContent = validarValor(novoValor);
        input.remove(); // Remove o campo de input após editar
    });

    // Previne qualquer tecla que não seja número
    input.addEventListener('keydown', apenasNumeros);
}

// Adicionando evento de clique no layout de fundo dos atributos
numeroAtributos.forEach((atributo, index) => {
    atributo.addEventListener('click', function () {
        iniciarEdicaoAtributo(event, index);
    });
});

// Evento de clique no header para redirecionar para a tela inicial (index)
headerGradiente.addEventListener('click', function () {
    window.location.href = 'index.html';  // Redireciona para a página inicial
});
