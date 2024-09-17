let alunos = [
    { nome: 'Pedro', nota1: 8, nota2: 7 },
    { nome: 'Maria', nota1: 9, nota2: 8 },
    { nome: 'João', nota1: 6, nota2: 5 },
    { nome: 'Ana', nota1: 10, nota2: 9 }
];

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media}`);
}