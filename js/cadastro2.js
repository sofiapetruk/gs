let listaDeUsuarios = [];

function Usuario(nome, email) {
    this.nome = nome;
    this.email = email;
}

function cadastrar() {
    const inputEmail = document.querySelector('#email');
    const inputSenha = document.querySelector('#senha');

    let usuario = new Usuario(inputEmail.ariaValueMax, inputSenha);
    listaDeUsuarios.push(usuario);
    localStorage.setItem("users", listaDeUsuarios);

}