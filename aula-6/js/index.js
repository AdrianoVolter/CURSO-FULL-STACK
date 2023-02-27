// var anoAtual= 2023

// alert("Ola mundo")
// alert("Adriano tem "+(anoAtual - 1984)+" anos" )

// alert("Ola mundo")
// alert("Frederico tem "+(anoAtual - 1969)+" anos" )

// alert("Ola mundo")
// alert("Joao tem "+(anoAtual - 1999)+" anos" )


// var nota1= parseInt(prompt("Primeira nota: "))
// var nota2= parseInt(prompt("Segunda nota: "))
// var nota3= parseInt(prompt("Terceita nota: "))

// var soma = nota1 + nota2 + nota3

// var res = soma/3

// alert ("A média das tres nota ficou: "+res)


// var idade = parseInt(prompt("Digite sua idade: "));
// if (idade >= 18){
//     alert("Você é maior de idade !")
// }else{
//     alert("Você é menor de idade !")           
// }

// var idade = parseInt(prompt("digite sua idade"));
// if (idade >= 18) {
//     alert("Voce é maior de idade")
// } else{
//     alert("Voce é menor de idade")
// }

var notas = [0, 0, 0];

var media;

var nNotas = parseInt(window.prompt('Quantas notas você recebeu?'));

for (var i = 0; i < nNotas; i++) {
  notas[i] = parseInt(window.prompt('Inserir nota ' + (i + 1) + ':'));
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;

media = notas.reduce(reducer) / notas.length;

alert('Media final ' + media);