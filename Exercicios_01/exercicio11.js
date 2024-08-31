const prompt = require("prompt-sync")();

//solicitar 5 números e calcular a soma total

let soma = 0;

for (let i = 1; i <= 5; i++) {
    const numero = parseFloat(prompt("Digite o número " + i + ":"));
    soma += numero;
}


console.log("A soma total dos números é: " + soma);