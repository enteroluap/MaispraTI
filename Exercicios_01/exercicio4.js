const prompt = require("prompt-sync")();

// menu
console.log("Escolha uma opção:");
console.log("1. Opção 1");
console.log("2. Opção 2");
console.log("3. Opção 3");

const opcao = parseInt(prompt("Digite o número da opção desejada:"));

// seleciona usando o switch
switch (opcao) {
    case 1:
        console.log("Você escolheu a Opção 1");
        break;
    case 2:
        console.log("Você escolheu a Opção 2");
        break;
    case 3:
        console.log("Você escolheu a Opção 3");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        break;
}