let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validNome = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelemail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
let validSenha = false

let passawordconfirmation = document.querySelector('#passaword-confirmation')
let labelconfirmar = document.querySelector('#labelconfirmar')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')


nome.addEventListener('keyup', () =>{
    if(nome.value.lenght <= 2){
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else if (nome.value === ""){
        labelnome.setAttribute('style', 'color: green')
        labelnome.innerHTML = 'Nome *Preencha o nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = false
    } else {
        labelnome.innerHTML = 'Nome'
        validNome = true
    }
})

email.addEventListener('keyup',() => {
    if(email.value === "") {
        labelemail.innerHTML = 'Email *Preencha o seu email'
        validNome = false
    } else if (email.value in '@'){
        labelemail.innerHTML = 'Email *Por favor coloque o @'
    } else {
        labelemail.innerHTML = 'Email'
        validEmail = true
    }

})

senha.addEventListener('keyup', () => {
    if(senha.value.lenght <= 7){
        labelsenha.innerHTML = 'Senha * Insira no mínimo 8 caracteres'
        validSenha = false
    } else {
        labelsenha.innerHTML = 'Senha'
        validSenha = true
    }
})

passawordconfirmation.addEventListener('keyup', () =>{
    if(senha.value != passawordconfirmation.value) {
        labelconfirmar.innerHTML = '*As senhas não são as mesmas'
        validConfirmSenha = false
    } else {
        labelconfirmar.innerHTML = 'Confirmar Senha'
        validConfirmSenha = true
    }
})

function cadastrar(){
    if(validNome && validEmail && validSenha && validConfirmSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCada: nome.value,
                emailCada: email.value,
                senhaCada: senha.value
            }
        )
    

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() =>{
            window.location.href = '../páginas/login.html'
        }, 3000)

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')

    } 
}       

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){

        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
}) 
btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')
    
    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})