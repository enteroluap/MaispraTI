let pessoas = [
    { nome: 'Ana', idade: 25, cidade: 'São Paulo' },
    { nome: 'Carlos', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Beatriz', idade: 22, cidade: 'Belo Horizonte' },
    { nome: 'João', idade: 35, cidade: 'Porto Alegre' }
];
  
for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}