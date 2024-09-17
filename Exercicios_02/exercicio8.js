let filmes = [
    { titulo: 'O Senhor dos Anéis', diretor: 'Peter Jackson', anoLancamento: 2001 },
    { titulo: 'Interestelar', diretor: 'Christopher Nolan', anoLancamento: 2014 },
    { titulo: 'Matrix', diretor: 'Lana Wachowski, Lilly Wachowski', anoLancamento: 1999 }
];
  

let titulos = [];

filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(titulos);