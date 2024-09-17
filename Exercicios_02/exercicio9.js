let clientes = [
    { nome: 'João', idade: 28, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 35, cidade: 'Rio de Janeiro' },
    { nome: 'Carlos', idade: 40, cidade: 'Belo Horizonte' },
    { nome: 'Ana', idade: 22, cidade: 'Curitiba' }
];
  
let clientesAcimaDe30 = 0;

clientes.forEach(cliente => {
if (cliente.idade > 30) {
    clientesAcimaDe30++;
}
});

console.log(`Número de clientes com mais de 30 anos: ${clientesAcimaDe30}`);