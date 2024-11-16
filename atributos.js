// Função para criar a ficha e redirecionar para atributos.html
function criarFicha() {
    const novaFicha = {
        id: Date.now(), // Gerar um ID único baseado no timestamp
        nome: 'Personagem Novo',
        atributos: {
            agilidade: 1,
            forca: 1,
            intelecto: 1,
            presencia: 1,
            vigor: 1
        },
        data: new Date().toLocaleDateString('pt-BR')
    };

    // Salva a nova ficha no localStorage (pode ser adaptado para GitHub futuramente)
    const fichasSalvas = JSON.parse(localStorage.getItem('fichas')) || [];
    fichasSalvas.push(novaFicha);
    localStorage.setItem('fichas', JSON.stringify(fichasSalvas));

    // Redireciona para a página de atributos, passando o ID da ficha
    window.location.href = `atributos.html?id=${novaFicha.id}`;
}

// Adiciona o evento de clique na área com o gradiente (lado direito do título ATRIBUTOS)
document.querySelector('header h1').addEventListener('click', function (event) {
    // Verifica se o clique foi na área do gradiente (lado direito)
    const gradienteArea = event.offsetX > this.offsetWidth - 40; // A largura do gradiente
    if (gradienteArea) {
        criarFicha(); // Cria a ficha e redireciona
    }
});
