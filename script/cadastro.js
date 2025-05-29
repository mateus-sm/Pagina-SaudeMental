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
    
    // Validação do nome
    const nomeV = document.getElementById('nome-vol'); //Pegar o elemento do nome
    const nomeVol = nomeV.value.trim(); //Pegar o texto do nome para colocar no JSON mais tarde
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/;

    if (!regexNome.test(nomeVol)) { //Testar o nome com o regex
        nomeV.classList.add('is-invalid');
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
    const regexSobreNome = /^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/;

    if (!regexSobreNome.test(sobrenomeVol)) { 
        sobrenomeVolE.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return; 
    } else {
        sobrenomeVolE.classList.remove('is-invalid');
        sobrenomeVolE.classList.add('is-valid');
    }

    //Validacao e-mail
    const emailVolE = document.getElementById('email-vol');
    const emailVol = emailVolE.value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(emailVol)) {
        emailVolE.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        emailVolE.classList.remove('is-invalid');
        emailVolE.classList.add('is-valid');
    }

    //Valida CPF
    const CPFe = document.getElementById('cpf');
    const CPF = CPFe.value.trim().replace(/[^\d]+/g, '');

    if (!validarCPF(CPF)) {
        CPFe.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        CPFe.classList.remove('is-invalid');
        CPFe.classList.add('is-valid');
    }

    //valida nascimento
    const nascE = document.getElementById('data-nascimento');
    const nasc = nascE.value;

    // if (!validarDataNascimento(nasc)) {
    //     nascE.classList.add('is-invalid');
    //     e.preventDefault();
    //     e.stopPropagation();
    //     return;
    // } else {
    //     nascE.classList.remove('is-invalid');
    //     nascE.classList.add('is-valid');
    // }

    //Validar CNPJ
    const CNPJe = document.getElementById('cnpj');
    const CNPJ = CNPJe.value.trim();
    if (CNPJ != "") {
        if (!await validaCNPJ(CNPJ)) {
            CNPJe.classList.add('is-invalid');
            e.preventDefault();
            e.stopPropagation();
            return;
        } else {
            CNPJe.classList.remove('is-invalid');
            CNPJe.classList.add('is-valid');    
        }
    }


    //Validacao logradouro
    const logradouroE = document.getElementById('logradouro');
    const logradouro = logradouroE.value.trim();
    const regexLogradouro = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,\-\/]+$/;

    if (!regexLogradouro.test(logradouro)) {
        logradouroE.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        logradouroE.classList.remove('is-invalid');
        logradouroE.classList.add('is-valid');
    }

    //valida numero endereço
    const numeroE = document.getElementById('numero');
    const numero = numeroE.value;
    const regexNumero = /^\d+$/;

    if (!regexNumero.test(numero)) {
        numeroE.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        numeroE.classList.remove('is-invalid');
        numeroE.classList.add('is-valid');
    }

    const bairroE = document.getElementById('bairro');
    const bairro = bairroE.value;
    const regexBairro = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,\-\/]+$/;

    if (!regexBairro.test(bairro)) {
        bairroE.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        bairroE.classList.remove('is-invalid');
        bairroE.classList.add('is-valid');
    }

    //Validacao profissao
    const profissaoE = document.getElementById('profissao');
    const profissao = profissaoE.value.trim();
    const regexProfissao = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,\-\/]+$/;
    
    if (!regexProfissao.test(profissao)) {
        profissaoE.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        profissaoE.classList.remove('is-invalid');
        profissaoE.classList.add('is-valid');
    }
    const tipoVoluntariado = document.querySelector('input[name="tipoVoluntariado"]:checked').value;
    
    const tipoAtendimento = document.querySelector('input[name="tipoAtendimento"]:checked').value;
    // Especialidades
    const checkboxesMarcados = document.querySelectorAll('input[type="checkbox"]:checked');
    const especialidades = Array.from(checkboxesMarcados).map(checkbox => checkbox.value);
    
    // Descrição
    const bio = document.getElementById('biografia').value;

    //Disponibilidde
    const disponibilidade = document.getElementById('disponibilidade').value;

    //Valida Senha
    const senhaVolE = document.getElementById('senha-vol');
    const senhaVol = senhaVolE.value;
    const confirmarSenhaVolE = document.getElementById('confirmar-senha-vol');
    const confirmarSenhaVol = confirmarSenhaVolE.value;

    if (senhaVol !== confirmarSenhaVol) {
        confirmarSenhaVolE.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        confirmarSenhaVolE.classList.remove('is-invalid');
        confirmarSenhaVolE.classList.add('is-valid');
    }

    //valida CEP
    const cepE = document.getElementById('cep');
    const regexCEP = /^\d{8}$/;
    let cep = cepE.value.trim().replace(/\D/g, ''); // Remove tudo que não é número

    if (!regexCEP.test(cep)) {
        cepE.classList.add('is-invalid');
        e.preventDefault();
        e.stopPropagation();
        return;
    } else {
        cepE.classList.remove('is-invalid');
        cepE.classList.add('is-valid');
    }
    
    const voluntario = {
        nomeVol,
        sobrenomeVol,
        emailVol,
        CPF,
        CNPJ,
        nasc,
        especialidades,
        bio,
        disponibilidade,
        profissao,
        senhaVol,
        tipoVoluntariado,
        tipoAtendimento
    };

    // Recupera a lista atual (ou cria vazia)
    let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];

    // Adiciona o novo voluntário
    voluntarios.push(voluntario);

    // Salva de volta como vetor
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

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

//validacao de nascimento
function validarDataNascimento(data) {
    const regexData = /^\d{2}\/\d{2}\/\d{4}$/;

    // Verifica se o formato está correto
    if (!regexData.test(data)) {
        return false;
    }

    const partes = data.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // Meses começam em 0 no JS
    const ano = parseInt(partes[2], 10);

    const dataNascimento = new Date(ano, mes, dia);
    const hoje = new Date();

    // Verifica se não é uma data no futuro
    if (dataNascimento > hoje) {
        return false;
    }

    return true;
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


//===================== MÁSCARA DE CNPJ =====================
function mascaraCNPJ(input) {
    let cnpj = input.value.replace(/\D/g, ''); // Remove tudo que não for número

    // Limita o CNPJ a no máximo 14 dígitos
    if (cnpj.length > 14) {
        cnpj = cnpj.slice(0, 14);
    }

    // Aplica a máscara passo a passo
    cnpj = cnpj.replace(/(\d{2})(\d)/, '$1.$2');        // 00.000
    cnpj = cnpj.replace(/(\d{3})(\d)/, '$1.$2');        // 00.000.000
    cnpj = cnpj.replace(/(\d{3})(\d)/, '$1/$2');        // 00.000.000/0000
    cnpj = cnpj.replace(/(\d{4})(\d{1,2})$/, '$1-$2');  // 00.000.000/0000-00

    input.value = cnpj;
}


//===================== MÁSCARA DE CEP =====================
function mascaraCEP(input) {
    let cep = input.value.replace(/\D/g, ''); // Remove tudo que não for número

    // Limita o CEP a no máximo 8 dígitos
    if (cep.length > 8) {
        cep = cep.slice(0, 8);
    }

    // Aplica a máscara
    cep = cep.replace(/(\d{5})(\d)/, '$1-$2'); // 00000-000

    input.value = cep;
}