let pedidos = [
    { cliente: 'Pedro', produto: 'Notebook', quantidade: 2 },
    { cliente: 'Maria', produto: 'Celular', quantidade: 5 },
    { cliente: 'Pedro', produto: 'Tablet', quantidade: 1 },
    { cliente: 'Carlos', produto: 'Notebook', quantidade: 3 },
    { cliente: 'Maria', produto: 'Tablet', quantidade: 2 }
];

let quantidadesPorCliente = {};

pedidos.forEach(pedido => {
    if (!quantidadesPorCliente[pedido.cliente]) {
        quantidadesPorCliente[pedido.cliente] = 0;
    }
    quantidadesPorCliente[pedido.cliente] += pedido.quantidade;
});

console.log(quantidadesPorCliente);