// === Formulário do Usuário ===
const formUsuario = document.getElementById('form-usuario');
const senhaUsuario = document.getElementById('senha');
const confirmarSenhaUsuario = document.getElementById('confirmar-senha');
const mensagemSucessoUsuario = formUsuario.nextElementSibling;

formUsuario.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Validação do nome
    const nomeE = document.getElementById('nome'); //Pegar o elemento do nome
    const nome = nomeE.value.trim(); //Pegar o texto do nome para colocar no JSON mais tarde
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
    if (!regexNome.test(nome)) { //Testar o nome com o regex
        nomeE.classList.add('is-invalid'); //Precisa adicionar uma div la no elemento para aparecer
        e.preventDefault();
        e.stopPropagation();
        return; //Cancelar envio do formulario e retornar função
    } else {
        nomeE.classList.remove('is-invalid');
        nomeE.classList.add('is-valid');
    }

    //Validação sobrenome
    const sobrenomeE = document.getElementById('sobrenome');
    const sobrenome = sobrenomeE.value.trim();
    const regexSobreNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!regexSobreNome.test(sobrenome)) { 
        sobrenomeE.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return; 
    } else {
        sobrenomeE.classList.remove('is-invalid');
        sobrenomeE.classList.add('is-valid');
    }

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

async function validaCNPJ(CNPJ) {
    CNPJ = CNPJ.replace(/[\.\-\/]/g, '');
    const url = `https://minhareceita.org/${CNPJ}`;

    try {
        const response = await fetch(url);
        return response.status === 200;
    } catch {
        return false;
    }
}

formVoluntario.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome-vol').value.trim();
    const sobrenome = document.getElementById('sobrenome-vol').value.trim();
    const email = document.getElementById('email-vol').value.trim();
    const profissao = document.getElementById('profissao').value.trim();
    const registro = document.getElementById('registro').value.trim();
    const senha = senhaVol.value;
    const confirmarSenha = confirmarSenhaVol.value;
    const tipoVoluntariado = document.querySelector('input[name="tipoVoluntariado"]:checked').value;
    
    //Validar CNPJ
    const CNPJe = document.getElementById('cnpj');
    if (!await validaCNPJ(CNPJe.value.trim())) {
        CNPJe.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        CNPJe.classList.remove('is-invalid');
        CNPJe.classList.add('is-valid');    
    }

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