var convidados = JSON.parse(localStorage.getItem("convidado")) || [];

var el_lista =  document.getElementById("list");
var el_campo = document.getElementById("campo");
var el_btn = document.getElementById("btn");


el_btn.onclick = function(){
    var nome = el_campo.value;
    convidados.push({nome: nome});
    el_campo.value = "";

    console.log(nome)

    salvarConvidados()
}

function salvarConvidados(){
    localStorage.setItem("Convidados", JSON.stringify(convidados));
}

function listaConvidado(){
    for(const convidado of convidado){
        var el_convidado = document.createElement("li");
        var el_nome = document.createTextNode(convidado.nome)
    }
}