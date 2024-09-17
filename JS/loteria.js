const prompt = require("prompt-sync")();

// Função para calcular o fatorial de um número
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

// Função para calcular o número de combinações (nCr)
function combinacoes(n, r) {
    return fatorial(n) / (fatorial(r) * fatorial(n - r));
}

// Função para calcular a probabilidade de acerto
function calcularProbabilidade(totalNumeros, numerosSorteados) {
    const totalCombinacoes = combinacoes(totalNumeros, numerosSorteados);
    const probabilidade = 1 / totalCombinacoes;

    console.log(`A probabilidade de acertar todos os ${numerosSorteados} números é 1 em ${totalCombinacoes.toFixed(0)}.`);
    console.log(`Isso equivale a uma probabilidade de ${(probabilidade * 100).toFixed(10)}%.`);
}

// Solicita ao usuário que insira os valores
const totalNumeros = parseInt(prompt("Digite o total de números no intervalo (por exemplo, 60):"));
const numerosSorteados = parseInt(prompt("Digite o número de números sorteados (por exemplo, 6):"));

// Calcula e exibe a probabilidade de acerto
calcularProbabilidade(totalNumeros, numerosSorteados);