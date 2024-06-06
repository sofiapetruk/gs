let nome = document.querySelector('#nome');
let fraseNome = document.querySelector('#fraseNome');
let validNome = false

let email = document.querySelector('#email');
let frasEemail = document.querySelector('#frasEemail');
let validEmail = false

let senha = document.querySelector('#senha');
let fraseSenha = document.querySelector('#fraseSenha');
let validSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha');
let fraseConfirmSenha = document.querySelector('#fraseConfirmSenha')
let validConfirmarSenha = false


const btnSubmit = document.querySelector('#btnSubmit');

nome.addEventListener('keyup', ()=> {
    if(nome.value.length <= 2) {
        fraseNome.textContent = 'Insira no minimo 3 caracteres'
        validNome = false
    } else {
        fraseNome.textContent = ''
        validNome = true

    }
});

function validateEmail(email) {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
}

email.addEventListener('keyup', ()=> {
    if(!validateEmail(email.value)) {
        frasEemail.textContent = 'O email não está de acordo com a norma. A exemplo da validação: se@email.com'
        validEmail = false
    } else {
        frasEemail.textContent = ''
        validEmail = true
    }
});

senha.addEventListener('keyup', ()=> {
    if(senha.value.length <= 7) {
        fraseSenha.textContent = 'Insira no minimo 8 caracteres'
        validSenha = false

    } else {
        fraseSenha.textContent = ''
        validSenha = true

    }
});

confirmarSenha.addEventListener('keyup', ()=> {
    if(senha.value != confirmarSenha.value) {
        fraseConfirmSenha.textContent = 'As senhas não são as mesmas'
        validConfirmarSenha = false
    } else {
        fraseConfirmSenha.textContent = ''
        validConfirmarSenha = true

    }
});


btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    cadastrar();
});

function cadastrar() {
    if (validNome && validEmail && validSenha && validConfirmarSenha) {
        let usuarioLista = JSON.parse(localStorage.getItem('usuarioLista') || '[]');

        usuarioLista.push({
            emailCadastro: email.value,
            senhaCadastro: senha.value,
        });

        localStorage.setItem('usuarioLista', JSON.stringify(usuarioLista));
        setTimeout(function() {
            window.location.href = "../páginas/login.html";
        }, 0.0005);

    } else {
        alert('Preencha todas as colunas');
    }
}


