// Seletores
const registerBtn = document.getElementById('register-btn');
const newUsernameInput = document.getElementById('new-username');
const newPasswordInput = document.getElementById('new-password');

// Evento de registro
registerBtn.addEventListener('click', () => {
    const username = newUsernameInput.value.trim();
    const password = newPasswordInput.value.trim();

    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verifica se o usuário já existe
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuarios.find(user => user.username === username);

    if (usuarioExistente) {
        alert('Usuário já existe.');
        return;
    }

    // Cria um novo usuário
    const novoUsuario = { username, password };
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuário registrado com sucesso!');
    window.location.href = 'login.html'; // Redireciona para a página de login
});
