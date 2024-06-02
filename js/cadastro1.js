let nome = document.getElementById("username");
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let confirmarSenha = document.getElementById("confirmarSenha");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let frasEemail = document.getElementById("frasEemail");
let fraseSenha = document.getElementById("fraseSenha");
let fraseConfirmSenha = document.getElementById("fraseConfirmSenha");

form.addEventListener('submit' , (e) => {
    if(email.value == "" && senha.value == "" && confirmarSenha.value == "") {
        textForm.textContent = "Você precisa preencher todos os campos!";
    } else if( validatorEmail(email) === true && validatorSenha(senha) === true ) {
        console.log(email.value);
        console.log(senha.value);
        console.log(confirmarSenha.value);
        textForm.textContent = "";
        frasEemail.textContent = "";
        fraseSenha.textContent = "";
        fraseConfirmSenha.textContent = "";

    }else {
        console.log("Requisitos não está de acordo com que é necessário.");
    }


    e.preventDefault();
});


email.addEventListener("keyup", () => {
    if( validatorEmail(email) !== true) {
        frasEemail.textContent = "O formato do email está incorreto, tente novamente.";
    } else {
        frasEemail.textContent = "";
    }

});

senha.addEventListener("keyup", () => {
    if(validatorSenha(senha) !== true) {
        fraseSenha.textContent = "O formato da senha está incorreto e tem que ter no min 6 caracteres, ter números e um caracter especial .";
    } else {
        fraseSenha.textContent = "";
    }
});

confirmarSenha.addEventListener("keyup", () => {
    if(confirmarSenha !== senha) {
        fraseConfirmSenha.textContent = "As senhas não são a mesmas.";
    } else {
        fraseConfirmSenha.textContent = "";
    }
});

function validatorEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

function validatorSenha(senha) {
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(senha);
}