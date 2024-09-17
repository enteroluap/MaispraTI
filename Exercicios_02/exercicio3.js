let produto = {
    nome: 'Notebook',
    preco: 3500,
    peso: 2.5,
    estoque: 15,
    garantia: 12
};

function filtrarPropriedades(objeto, valorMinimo) {
  let novoObjeto = {};
  
  for (let propriedade in objeto) {
    if (objeto[propriedade] > valorMinimo) {
      novoObjeto[propriedade] = objeto[propriedade];
    }
  }
  
  return novoObjeto;
}

let propriedadesFiltradas = filtrarPropriedades(produto, 10);
console.log(propriedadesFiltradas);