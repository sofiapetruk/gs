function entrar() {
    let email = document.querySelector('#email');
    let frasEemail = document.querySelector('#frasEemail')

    let senha = document.querySelector('#senha');
    let fraseSenha = document.querySelector('#fraseSenha');

    let textForm = document.querySelector('#textForm');
    let usuarioLista = []

    let validUsuarioLista = {
        email: '',
        senha: ''
    }

    usuarioLista = JSON.parse(localStorage.getItem('usuarioLista'))

    usuarioLista.forEach((item) => {
        if(email.value == item.emailCadastro && senha.value == item.senhaCadastro) {
            usuarioValid = {
                email: item.emailCadastro,
                senha: item.senhaCadastro
            }
        }
    })

    if(email.value == usuarioValid.email && senha.value == usuarioValid.senha){
        window.location.href = '../página/cadastro.html'

    }else {
        textForm.textContent = 'Senha ou email incorretos, tente novamente'

    }

}

function entrar() {
    if(kisjfsd) {

    } else {
         alert('Preencha todas as colunas')
    } 
}