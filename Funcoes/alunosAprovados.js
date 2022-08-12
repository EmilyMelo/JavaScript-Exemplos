const alunos = [{
  nome: 'Emily',
  nota: 5,
  turma: '2C'
},
{
  nome: 'Pedro',
  nota: 7,
  turma: '2D'
}, {
  nome: 'Carlos',
  nota: 4,
  turma: '2C'
},
{
  nome: 'Jose',
  nota: 10,
  turma: '2A'
}
];


function aprovados(arrayAlunos, media) {
  let alunosAprovados = [];

  //for ... loop = enquanto
  for (let i = 0; i < arrayAlunos.length; i++) {
    const { nota, nome } = arrayAlunos[i]; //object Distructing

    if (nota >= media) {
      alunosAprovados.push(nome);
    }
  }
  return alunosAprovados;
}

console.log(aprovados(alunos, 5));