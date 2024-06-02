let listaUsuario = [
    {
      nomeCompleto: "Jose da Silva",
      emailUsuario: "jo@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Joao Antonio",
      emailUsuario: "an@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Marco Antonio",
      emailUsuario: "ma@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Lohana CHaves",
      emailUsuario: "lc400@gmail.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Julia Monteiro",
      emailUsuario: "jl300@gmail.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Sofia Petruk",
      emailUsuario: "sofiapetruk900@gmail.com",
      senhaUsuario: "123456",
    },

  ];
  
function validar(inputEmail, inputSenha) {

//Recuperar elemento de msgStatus
let msgStatus = document.querySelector(".valida");
    
for (let x = 0; x < listaUsuario.length; x++) {
        
    if ((inputEmail.value == listaUsuario[x].emailUsuario) && (inputSenha.value == listaUsuario[x].senhaUsuario)) {
      //Redirect
        msgStatus.setAttribute("class","sucesso");
        msgStatus.innerText = "Login realizado com sucesso!";
    
        //Guardando o objeto validado no localStorage:
        localStorage.setItem("usuario-logado", JSON.stringify(listaUsuario[x]));
            
        setTimeout(function(){
            msgStatus.setAttribute("class","valida");
            msgStatus.innerText = "";
            window.location.href = "../sucesso.html";
        }, 3000);
        return false;
    }
}
    msgStatus.setAttribute("class","erro");
    msgStatus.innerText = "Login ou senha invalidos!";
    setTimeout(function(){
        msgStatus.setAttribute("class","valida");
        msgStatus.innerText = "";
        window.location.href = "../erro.html";
    }, 3000);
    return false;
}