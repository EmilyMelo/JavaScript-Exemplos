function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome
    } terá ${this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
  nome: 'Marta',
  idade: 20,
}

const pessoa3 = {
  nome: 'Antonio',
  idade: 2,
};

const pessoa2 = {
  nome: 'Luigi',
  idade: 34,
};

const animal = {
  nome: 'Mart',
  idade: 2,
};

// console.log(calculaIdade.call(pessoa1, 7)); //com o .call, deve-se separar os parametros por virgulas

console.log(calculaIdade.apply(animal, [19])); //com o .aply, deve-se separar os parametros por virgulas e conchetes