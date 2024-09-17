let produtos = [
    { nome: 'Notebook', preco: 3000, desconto: 0 },
    { nome: 'Celular', preco: 1500, desconto: 0 },
    { nome: 'Tablet', preco: 1000, desconto: 0 }
];
  
produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10; // Calcula 10% de desconto
    let precoComDesconto = produto.preco - produto.desconto; // Aplica o desconto
    console.log(`Produto: ${produto.nome}, Preço Original: R$${produto.preco}, Preço com Desconto: R$${precoComDesconto}`);
});
  