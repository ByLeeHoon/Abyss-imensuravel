// Seletores
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Evento de login
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verifica se o usuário existe no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(user => user.username === username && user.password === password);

    if (usuario) {
        // Armazena o usuário logado no localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        window.location.href = 'index.html'; // Redireciona para a página principal
    } else {
        alert('Nome de usuário ou senha inválidos.');
    }
});
