
let listaAmigos = [];



function adicionarAmigo() {
    let nomeAdicionado = document.querySelector("#amigo").value;
    if (nomeAdicionado == "") {
        alert("Por favor, insira um nome válido.")
    }
    else {
        listaAmigos.push(nomeAdicionado);
        console.log("Nome adicionado: " + nomeAdicionado);
        console.log("Lista: " + listaAmigos);
        nomeAdicionado.value = "";
        limparCampo();
    }
    
}

function limparCampo() {
    nomeAdicionado = document.querySelector("#amigo");
    nomeAdicionado.value = "";
}

