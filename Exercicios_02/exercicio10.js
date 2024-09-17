let vendas = [
    { produto: 'Notebook', quantidade: 3, valor: 3000 },
    { produto: 'Celular', quantidade: 5, valor: 1500 },
    { produto: 'Tablet', quantidade: 2, valor: 1000 }
];
  
let valorTotal = 0;

vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
});

console.log(`Valor total de vendas: R$${valorTotal}`);