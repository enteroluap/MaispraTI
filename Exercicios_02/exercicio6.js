let funcionarios = [
    { nome: 'Paulo', cargo: 'Gerente', salario: 5000 },
    { nome: 'Ana', cargo: 'Assistente', salario: 2500 },
    { nome: 'Carlos', cargo: 'Desenvolvedor', salario: 4500 },
    { nome: 'Mariana', cargo: 'Analista', salario: 6000 }
];

let salarioMinimo = 4000;

for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
    }
}