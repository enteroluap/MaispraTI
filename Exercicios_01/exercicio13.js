const prompt = require("prompt-sync")();

let soma = 0;
let quantidade = 0;
let numero;

do {
    numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar):"));
    if (numero !== 0) {
        soma += numero; // adiciona o número à soma total
        quantidade++;
    }
} while (numero !== 0);

// faz a verificação se algum número foi inserido para calcular a média
if (quantidade > 0) {
    const media = soma / quantidade;
    console.log("A média aritmética dos números é: " + media.toFixed(2));
} else {
    console.log("Nenhum número foi inserido.");
}