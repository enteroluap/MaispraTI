let transacoes = [
    { tipo: 'entrada', valor: 1500 },
    { tipo: 'saída', valor: 500 },
    { tipo: 'entrada', valor: 2000 },
    { tipo: 'saída', valor: 1000 }
];

let saldoFinal = 0;

transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldoFinal += transacao.valor;
    } else if (transacao.tipo === 'saída') {
        saldoFinal -= transacao.valor;
    }
});

console.log(`Saldo final: R$${saldoFinal}`);