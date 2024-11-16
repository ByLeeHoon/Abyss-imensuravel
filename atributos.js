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

// Adicionando evento para os números editáveis
numeroAtributos.forEach((atributo, index) => {
    atributo.addEventListener('click', function () {
        let valor = prompt("Digite um valor para " + atributos[index].querySelector('p').textContent, atributo.textContent);
        valor = parseInt(valor);
        if (!isNaN(valor)) {
            atributo.textContent = validarValor(valor);
        }
    });
});

// Evento de clique no header para redirecionar para a tela inicial (index)
headerGradiente.addEventListener('click', function () {
    window.location.href = 'index.html';  // Redireciona para a página inicial
});
