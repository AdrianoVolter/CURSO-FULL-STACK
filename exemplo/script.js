// function piscar(){
//     var contador =0;
//     var intervalo =0;


//     while(contador < 10){
//         intervalo = intervalo + 300;
//         setTimeout("document.getElementById('lampada').src='on.jpg';",intervalo)
//         intervalo = intervalo + 300;
//         setTimeout("document.getElementById('lampada').src='off.jpg';",intervalo)
//         contador++;
//     }
// }


let variavel;

function minhaFuncao(){
    variavel = setInterval(consolelog, 2000)
}

function consolelog(){
    console.log("Ola ,turma itaguaçu")
}

function pararloop(){
    clearInterval(variavel)
}

document.getElementById("btn").onclick = minhaFuncao;
document.getElementById("btn2").onclick = pararloop;