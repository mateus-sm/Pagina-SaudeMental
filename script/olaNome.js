const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
const voluntarioLogado = JSON.parse(localStorage.getItem('voluntarioLogado'));
const areaLogin = document.getElementById('area-login');

if (usuarioLogado && areaLogin) {
    areaLogin.innerHTML = `
        <span class="me-2 p-1">Olá, <span class="text-teal">${usuarioLogado.nome}</span>!</span>
        <button class="text-white bg-teal btn btn-outline-teal-100 btn-sm" onclick="logout()">Sair</button>
    `;
} else {
    areaLogin.innerHTML = `
        <a href="login.html" class="btn btn-outline-teal">Entrar</a>
        <a href="cadastro.html" class="btn btn-teal">Cadastrar</a>
    `;
}

if (voluntarioLogado && areaLogin) {
    areaLogin.innerHTML = `
        <span class="me-2 p-1">Olá, <span class="text-teal">${voluntarioLogado.nomeVol}</span>!</span>
        <button class="text-white bg-teal btn btn-outline-teal-100 btn-sm" onclick="logoutVol()">Sair</button>
    `;
} else {
    areaLogin.innerHTML = `
        <a href="login.html" class="btn btn-outline-teal">Entrar</a>
        <a href="cadastro.html" class="btn btn-teal">Cadastrar</a>
    `;
}

function logout() {
    localStorage.removeItem('usuarioLogado');
    location.reload();
}

function logoutVol() {
    localStorage.removeItem('voluntarioLogado');
    location.reload();
}