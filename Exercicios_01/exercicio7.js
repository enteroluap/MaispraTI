const prompt = require("prompt-sync")();

const quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas:"));

let precoPorUnidade;
if (quantidade < 12) {
    precoPorUnidade = 0.30;
} else {
    precoPorUnidade = 0.25;
}

const valorTotal = quantidade * precoPorUnidade;
console.log("O valor total da compra é: R$ " + valorTotal.toFixed(2));