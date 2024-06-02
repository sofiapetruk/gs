function Mandar() { 
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");

    if (nome.value !== "" && email.value !== "" && mensagem.value !== "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    } else {
        alert('Algo está errado com o seu nome, email ou comentário.');
    }
};