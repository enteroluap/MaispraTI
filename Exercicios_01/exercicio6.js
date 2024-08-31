const prompt = require("prompt-sync")();

const ladoA = parseFloat(prompt("Digite o valor do lado A:"));
const ladoB = parseFloat(prompt("Digite o valor do lado B:"));
const ladoC = parseFloat(prompt("Digite o valor do lado C:"));

// verifica se os lados formam um triângulo
if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    // Verifica o tipo do triangulo
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Isósceles.");
    } else {
        console.log("Escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}