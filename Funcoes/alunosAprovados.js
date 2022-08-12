// ## Atividade 1: Alunos Aprovados

// 1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
// 2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// 3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

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