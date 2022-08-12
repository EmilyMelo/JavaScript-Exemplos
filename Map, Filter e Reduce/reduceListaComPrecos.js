const listaCompras = [
  {
    produto: 'pao',
    preco: 2.5
  },
  {
    produto: 'presunto',
    preco: 6
  },
  {
    produto: 'queijo',
    preco: 15
  },
  {
    produto: 'refri',
    preco: 5
  },
  {
    produto: 'guardanapo',
    preco: 2
  }
];

const saldoDisponivel = 50;

function calculaSaldo(saldoDisponivel, listaCompras) {
  return listaCompras.reduce(function (prev, current) {
    console.log({ prev });
    console.log({ current });
    return prev - current.preco; //NAO ESQUECER DE CHAMAR A CHAVE DENTRO DO OBJETO
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, listaCompras));