// Função para capturar os valores dos atributos e salvar no LocalStorage
document.getElementById('salvar-atributos').addEventListener('click', () => {
    // Captura os valores dos campos de entrada
    const agilidade = parseInt(document.getElementById('agilidade').value);
    const forca = parseInt(document.getElementById('forca').value);
    const intelecto = parseInt(document.getElementById('intelecto').value);
    const presenca = parseInt(document.getElementById('presenca').value);
    const vigor = parseInt(document.getElementById('vigor').value);

    // Verifica se a soma dos pontos é igual a 4
    const totalPontos = agilidade + forca + intelecto + presenca + vigor;
    if (totalPontos !== 4) {
        alert('Você precisa distribuir exatamente 4 pontos entre os atributos!');
        return;
    }

    // Cria o objeto de atributos
    const atributos = {
        agilidade,
        forca,
        intelecto,
        presenca,
        vigor
    };

    // Salva os atributos no LocalStorage
    localStorage.setItem('atributos', JSON.stringify(atributos));

    // Exibe uma mensagem de sucesso
    alert('Atributos salvos com sucesso!');

    // Opcional: redireciona para outra página, por exemplo, a página inicial
    window.location.href = 'index.html'; // Volta para a página principal
});
