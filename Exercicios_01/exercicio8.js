const prompt = require("prompt-sync")();

const valor1 = parseFloat(prompt("primeiro valor:"));
const valor2 = parseFloat(prompt("segundo valor:"));

if (valor1 === valor2) {
    console.log("Os valores devem ser diferentes.");
} else {
    if (valor1 < valor2) {
        console.log("Ordem crescente: " + valor1 + ", " + valor2);
    } else {
        console.log("Ordem crescente: " + valor2 + ", " + valor1);
    }
}