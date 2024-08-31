const prompt = require("prompt-sync")();

// solicita um número inteiro
const numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));

// variável do fatorial
let fatorial = 1;

if (numero < 0) {
    console.log("Fatorial não é definido para números negativos.");
} else {
    // Loop for para calcular o fatorial
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    
    //resultado
    console.log("O fatorial de " + numero + " é: " + fatorial);
}