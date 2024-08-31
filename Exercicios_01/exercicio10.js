const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número inteiro:"));

// Loop for para 10
for (let i = 1; i <= 10; i++) {
    console.log("Repetição " + i + ": " + numero);
}