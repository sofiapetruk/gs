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
})

email.addEventListener('keyup', ()=> {
    if(email.value.length <= 4) {
        frasEemail.textContent = 'O email não está de acordo com a norma'
        validEmail = false
    } else {
        frasEemail.textContent = ''
        validEmail = true
    }
})

senha.addEventListener('keyup', ()=> {
    if(senha.value.length <= 7) {
        fraseSenha.textContent = 'Insira no minimo 8 caracteres'
        validSenha = false

    } else {
        fraseSenha.textContent = ''
        validSenha = true

    }
})

confirmarSenha.addEventListener('keyup', ()=> {
    if(senha.value != confirmarSenha.value) {
        fraseConfirmSenha.textContent = 'As senhas não são as mesmas'
        validConfirmarSenha = false
    } else {
        fraseConfirmSenha.textContent = ''
        validConfirmarSenha = true

    }
})


function cadastrar() {
    if (validNome && validEmail && validSenha && validConfirmarSenha ) {
        let usuarioLista = JSON.parse(localStorage.getItem('usuarioLista') || '[]')

        usuarioLista.push(
            {
                nomeCadastro: nome.value,
                emailCadastro: email.value,
                senhaCadastro: senha.value,
                confirmSenhaCadastro: confirmarSenha.value
            }
        )
        localStorage.setItem('usuarioLista', JSON.stringify(usuarioLista))
        setTimeout(function() {
            window.location.href = "../páginas/login.html";
        }, 3000);   
        return false; } 
    else {
        alert('Preencha todas as colunas')
    }
        
    

    
}


