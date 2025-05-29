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
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/;
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
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        confirmarSenhaUsuario.classList.remove('is-invalid');
        confirmarSenhaUsuario.classList.add('is-valid');
    }

    const usuario = { nome, sobrenome, email, senha, tipoApoio };
    localStorage.setItem(email, JSON.stringify(usuario));

    formUsuario.classList.add('d-none');
    mensagemSucessoUsuario.classList.remove('d-none');
});

// === Formulário do Voluntário ===
const formVoluntario = document.getElementById('form-voluntario');
const mensagemSucessoVoluntario = document.getElementById('mensagem-sucesso-voluntario');

formVoluntario.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const tipoVoluntariado = document.querySelector('input[name="tipoVoluntariado"]:checked').value;
    
    //Validar CNPJ
    const CNPJe = document.getElementById('cnpj');
    if (!await validaCNPJ(CNPJe.value.trim())) {
        CNPJe.classList.add('is-invalid');
        alert("cnpj");
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        CNPJe.classList.remove('is-invalid');
        CNPJe.classList.add('is-valid');    
    }

     // Validação do nome
    const nomeV = document.getElementById('nome-vol'); //Pegar o elemento do nome
    const nomeVol = nomeV.value.trim(); //Pegar o texto do nome para colocar no JSON mais tarde
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/;

    if (!regexNome.test(nomeVol)) { //Testar o nome com o regex
        nomeV.classList.add('is-invalid'); //Precisa adicionar uma div la no elemento para aparecer
        alert("NOME");
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        nomeV.classList.remove('is-invalid');
        nomeV.classList.add('is-valid');
    }

    //Validação sobrenome
    const sobrenomeVolE = document.getElementById('sobrenome-vol');
    const sobrenomeVol = sobrenomeVolE.value.trim();
    const regexSobreNome = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;

    if (!regexSobreNome.test(sobrenomeVol)) { 
        sobrenomeVolE.classList.add('is-invalid');
        alert("SONR");
        e.preventDefault();
        e.stopPropagation();
        return; 
    } else {
        sobrenomeVolE.classList.remove('is-invalid');
        sobrenomeVolE.classList.add('is-valid');
    }

    //Validacao e-mail
    const emailVolE = document.getElementById('email-vol');
    const emailVol = emailVolE.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(emailVol)) {
        emailVolE.classList.add('is-invalid');
        alert("cnpEMAI");
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        emailVolE.classList.remove('is-invalid');
        emailVolE.classList.add('is-valid');
    }

    //Validacao logradouro
    const logradouroE = document.getElementById('logradouro');
    const logradouro = logradouroE.value.trim();
    const regexLogradouro = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,\-\/]+$/;

    if (!regexLogradouro.test(logradouro) || logradouro.length < 3) {
        logradouroE.classList.add('is-invalid');
        alert("LOGR");
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        logradouroE.classList.remove('is-invalid');
        logradouroE.classList.add('is-valid');
    }

    //Validacao profissao
    const profissaoE = document.getElementById('profissao');
    const profissao = profissaoE.value.trim();
    const regexProfissao = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,\-\/]+$/;

    if (!regexProfissao.test(profissao) || profissao.length < 3) {
        profissaoE.classList.add('is-invalid');
        alert("ASDSADA");
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        profissaoE.classList.remove('is-invalid');
        profissaoE.classList.add('is-valid');
    }

    //Valida Senha
    const senhaVolE = document.getElementById('senha-vol');
    const senhaVol = senhaVolE.value;
    const confirmarSenhaVolE = document.getElementById('confirmar-senha-vol');
    const confirmarSenhaVol = confirmarSenhaVolE.value;

    if (senhaVol !== confirmarSenhaVol) {
        confirmarSenhaVol.classList.add('is-invalid');
        alert("cSENHA");
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        confirmarSenhaVol.classList.remove('is-invalid');
        confirmarSenhaVol.classList.add('is-valid');
    }

    //Valida CPF
    const cpfE = document.getElementById('cpf');
    const cpf = cpfE.value.trim().replace(/[^\d]+/g, '');

    if (!validarCPF(cpf)) {
        cpfE.classList.add('is-invalid');
        alert("CPFAAAAAA");
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        cpfE.classList.remove('is-invalid');
        cpfE.classList.add('is-valid');
    }

    //valida CEP
    const cepE = document.getElementById('cep');
    const regexCEP = /^\d{8}$/;
    let cep = cepE.value.trim().replace(/\D/g, ''); // Remove tudo que não é número

    if (!regexCEP.test(cep)) {
        cepE.classList.add('is-invalid');
        alert("CEP");
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        cepE.classList.remove('is-invalid');
        cepE.classList.add('is-valid');
    }
    
    //window.location.href = "cadastro.html#voluntario";
    const voluntario = { nomeVol, sobrenomeVol, emailVol, profissao, senhaVol, tipoVoluntariado };
    localStorage.setItem(emailVol, JSON.stringify(voluntario));

    formVoluntario.classList.add('d-none');
    mensagemSucessoVoluntario.classList.remove('d-none');
});

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

//validacao de CPF
function validarCPF(cpf) {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf))
        return false;
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9)))
        return false;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
}


// ===================== MÁSCARA DE TELEFONE =====================
const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function (e) {
    let valor = e.target.value;

    // Remove tudo que não for número
    valor = valor.replace(/\D/g, '');

    // Limita a 11 números (DD + telefone)
    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }

    // Formata só se tem pelo menos 1 número
    if (valor.length > 0) {
        // Coloca o parêntese depois dos 2 primeiros dígitos (DDD)
        valor = valor.replace(/^(\d{2})(\d+)/, '($1) $2');
    }

    // Coloca o hífen depois do 7º dígito (contando DDD)
    if (valor.length > 7) {
        valor = valor.replace(/(\(\d{2}\) \d{5})(\d+)/, '$1-$2');
    } else if (valor.length > 2) {
        // Para números menores que 7 dígitos, coloca hífen depois do 6º número (sem o DDD)
        valor = valor.replace(/(\(\d{2}\) \d{4})(\d+)/, '$1-$2');
    }

    e.target.value = valor;
});


// ===================== MÁSCARA DE CPF =====================
function mascaraCPF(input) {
    let cpf = input.value.replace(/\D/g, ''); // Remove tudo que não for número

    // Limita o CPF a no máximo 11 dígitos
    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11);
    }

    // Aplica a máscara passo a passo
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');       // Coloca ponto entre o 3º e 4º dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');       // Coloca ponto entre o 6º e 7º dígitos
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen entre o 9º e 10º dígitos

    input.value = cpf;
}