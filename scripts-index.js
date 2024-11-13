// Função para criar estrelas
function createStars() {
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        document.body.appendChild(star);
    }
}

// Chamar a função para criar estrelas
createStars();
