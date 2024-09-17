let empresa = {
    departamentos: [
      {
        nome: 'Desenvolvimento',
        funcionarios: [
          { nome: 'Alice', cargo: 'Desenvolvedora' },
          { nome: 'Bob', cargo: 'Analista de Sistemas' }
        ]
      },
      {
        nome: 'Recursos Humanos',
        funcionarios: [
          { nome: 'Carlos', cargo: 'Gerente de RH' },
          { nome: 'Diana', cargo: 'Assistente de RH' }
        ]
      },
      {
        nome: 'Financeiro',
        funcionarios: [
          { nome: 'Eva', cargo: 'Contadora' },
          { nome: 'Frank', cargo: 'Analista Financeiro' }
        ]
      }
    ]
};
  
for (let index in empresa.departamentos) {
    let departamento = empresa.departamentos[index];

    console.log(`Departamento: ${departamento.nome}`);

    for (let funcionario of departamento.funcionarios) {
        console.log(`  Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
    }
}