

function valideEmail() {
    emailError(); 
}

function validSenha () {
    senhaError();

}

function validConfirmSenha () {
    confirmSenha();
}

function emailError() {
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById("email-required-error").style.display = "block";
    } else {
        document.getElementById("email-required-error").style.display = "none";
    }

    if (validateEmail(email)) {
        document.getElementById("email-invalid-error").style.display = "none";
    } else {
        document.getElementById("email-invalid-error").style.display = "block";
    }
    
}

function senhaError() {
    const senha = document.getElementById("senha").value;
    if (!senha) {
        document.getElementById("senha-required-error").style.display = "block";
    } else {
        document.getElementById("senha-required-error").style.display = "none";
    }
}

function confirmSenha() {
    const confirmSenha = document.getElementById("confirmarSenha").value;
    if (!confirmarSenha) {
        document.getElementById("senhaConfirm-required-error").style.display = "block";
    } else {
        document.getElementById("senhaConfirm-required-error").style.display = "none";
    }


    if (confirmSenha != senha) {
        document.getElementById("senhaConfirm-invalid-error").style.display = "block";
    }  else {
        document.getElementById("senhaConfirm-invalid-error").style.display = "none";
    }
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);

}


let listaDeUruarios = [];
function Usuario(email,senha) {
    this.email = email;
    this.senha = senha;
}

const botaoEnviar = document.querySelector("#btnSubmit");

botaoEnviar.addEventListener("click", ()=>{
    const inputEmail = document.querySelector("#email");
    const inputSenha = document.querySelector("#senha");

    let usuario = new Usuario(inputEmail.value, inputSenha.value);
    listaDeUruarios.push(usuario);
    localStorage.setItem("users",listaDeUruarios);
});