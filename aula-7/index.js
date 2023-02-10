function calcular(){
    let nota1 = parseFloat(document.querySelector('#n1').value);
    let nota2 = parseFloat(document.querySelector('#n2').value);
    let nota3 = parseFloat(document.querySelector('#n3').value);
    
    let soma = nota1 + nota2 + nota3
    let media = soma / 3
    console.log(media)
}






