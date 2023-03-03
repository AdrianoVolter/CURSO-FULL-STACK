// var numeros = [1, 2, 5];
// var numeros2= [...numeros, 7, 8]

// console.log(numeros2)

const cliente = {
    nome: "Adriano",
    cidade: "Florianpolis",
    cpf: "000.000.000-00",
    telefone: "48-9999-9999"
};

const {nome,...resto} = cliente;

console.log(resto);
console.log(cliente)

resto.cpf = "100.200.300-50";
console.log(resto);