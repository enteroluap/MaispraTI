let livro = {
    titulo: 'Dom Quixote',
    autor: 'Miguel de Cervantes',
    anoPublicacao: 1605,
    genero: 'Romance'
  };
  
  let temEditora = false;
  
  for (let propriedade in livro) {
    if (propriedade === 'editora') {
      temEditora = true;
      break;
    }
  }
  
  if (!temEditora) {
    livro.editora = 'Editora teste!';
  }

  console.log(livro);