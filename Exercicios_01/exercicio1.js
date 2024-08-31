const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número inteiro:"));

// Verifica se o número é par ou ímpar usando a estrutura de controle if
if (numero % 2 === 0) {
    console.log("O número " + numero + " é par.");
} else {
    console.log("O número " + numero + " é ímpar.");
}