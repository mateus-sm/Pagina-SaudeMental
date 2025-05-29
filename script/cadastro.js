// === Formulário do Usuário ===
const formUsuario = document.getElementById('form-usuario');
const senhaUsuario = document.getElementById('senha');
const confirmarSenhaUsuario = document.getElementById('confirmar-senha');
const mensagemSucessoUsuario = formUsuario.nextElementSibling;

formUsuario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = senhaUsuario.value;
    const confirmarSenha = confirmarSenhaUsuario.value;
    const tipoApoio = document.querySelector('input[name="tipoApoio"]:checked').value;

    if (senha !== confirmarSenha) {
        confirmarSenhaUsuario.classList.add('is-invalid');
        return;
    }

    confirmarSenhaUsuario.classList.remove('is-invalid');
    confirmarSenhaUsuario.classList.add('is-valid');

    const usuario = { nome, sobrenome, email, senha, tipoApoio };
    localStorage.setItem(email, JSON.stringify(usuario));

    formUsuario.classList.add('d-none');
    mensagemSucessoUsuario.classList.remove('d-none');
});

// === Formulário do Voluntário ===
const formVoluntario = document.getElementById('form-voluntario');
const senhaVol = document.getElementById('senha-vol');
const confirmarSenhaVol = document.getElementById('confirmar-senha-vol');
const mensagemSucessoVoluntario = formVoluntario.nextElementSibling;

formVoluntario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome-vol').value.trim();
    const sobrenome = document.getElementById('sobrenome-vol').value.trim();
    const email = document.getElementById('email-vol').value.trim();
    const profissao = document.getElementById('profissao').value.trim();
    const registro = document.getElementById('registro').value.trim();
    const senha = senhaVol.value;
    const confirmarSenha = confirmarSenhaVol.value;
    const tipoVoluntariado = document.querySelector('input[name="tipoVoluntariado"]:checked').value;

    if (senha !== confirmarSenha) {
        confirmarSenhaVol.classList.add('is-invalid');
        return;
    }

    confirmarSenhaVol.classList.remove('is-invalid');
    confirmarSenhaVol.classList.add('is-valid');

    const voluntario = { nome, sobrenome, email, profissao, registro, senha, tipoVoluntariado };
    localStorage.setItem(email, JSON.stringify(voluntario));

    formVoluntario.classList.add('d-none');
    mensagemSucessoVoluntario.classList.remove('d-none');
});