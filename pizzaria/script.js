function inserirAdicionais(){
    var massas = document.getElementById('massas');
    var bordas = document.getElementById('bordas');

    var massasValue = massas.options[massas.selectedIndex];
    var bordasValue = bordas.options[bordas.selectedIndex];

    var textMassas = massasValue.text;
    var textBordas = bordasValue.text;

    localStorage.setItem("Massa", JSON.stringify(textMassas));
    localStorage.setItem("Bordas", JSON.stringify(textBordas));
}

var sabores =  JSON.parse((localStorage.getItem("sabores"))) || [];

var elLista = document.getElementById("lista");
var elCampo = document.getElementById("campo");
var elBotao = document.getElementById("botao");

elCampo.onclick = function() {
    var nome = elCampo.value;
    sabores.push({pizza: nome});
    elCampo.value = "";

     salvarSabores()
}

function salvarSabores(){
    if(sabores.length > 3 ){
        alert("permitido apenas 3 sabores");
    }else{
        localStorage.stringify("sabores", JSON.stringify(sabores));
    }


}


// function listaSabores(){
//     for(const)
// }


//inserirAdicionais()