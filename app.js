
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

titulo = document.querySelector(".main-title");

function sortearAmigo() {
    if (listaAmigos == "") {
        alert("Por favor, insira nomes.")
    } else {
        let tamanhoLista = listaAmigos.length;
        let nomeAleatorio = Math.floor(Math.random() *tamanhoLista);
        let nomeSorteado = listaAmigos[nomeAleatorio];
        titulo.innerHTML = "O amigo sorteado foi:" +nomeSorteado + "!";
        listaAmigos = [nomeSorteado]
        let lista = document.querySelector("#listaAmigos");
        lista.innerHTML = nomeSorteado;
    }
}


