
let listaAmigos = [];



function adicionarAmigo() {
    let nomeAdicionado = document.querySelector("#amigo").value;
    if (nomeAdicionado == "") {
        alert("Por favor, insira um nome válido.")
    }
    else {
        listaAmigos.push(" " + nomeAdicionado);
        console.log("Nome adicionado: " + nomeAdicionado);
        console.log("Lista: " + listaAmigos);
        limparCampo();
        addNaLista();
    }
}

function addNaLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    return lista.innerHTML = listaAmigos;
}

function limparCampo() {
    nomeAdicionado = document.querySelector("#amigo");
    nomeAdicionado.value = "";
}
