// Função para salvar usuários no localStorage
function salvarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função para buscar usuários do localStorage
function buscarUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

// Registrar novo usuário
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const usuarios = buscarUsuarios();
        if (usuarios.find((user) => user.email === email)) {
            alert('E-mail já registrado!');
            return;
        }

        usuarios.push({ email, password });
        salvarUsuarios(usuarios);
        alert('Registrado com sucesso! Faça login.');
        window.location.href = 'login.html';
    });
}

// Login de usuário
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const usuarios = buscarUsuarios();
        const usuario = usuarios.find((user) => user.email === email && user.password === password);
        if (!usuario) {
            alert('Credenciais inválidas!');
            return;
        }

        // Salva o usuário logado no localStorage
        localStorage.setItem('usuarioLogado', email);
        alert('Login bem-sucedido!');
        window.location.href = 'index.html';
    });
}

// Função para verificar se o usuário está logado
function verificarLogin() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        alert('Você precisa fazer login primeiro!');
        window.location.href = 'login.html';
    }
}

// Logout
function logout() {
    localStorage.removeItem('usuarioLogado');
    alert('Você saiu!');
    window.location.href = 'login.html';
                               }
