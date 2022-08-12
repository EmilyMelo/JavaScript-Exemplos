function soma(array) {
  return array.reduce(function (prevValue, currentValue) {// a funcao com reduce soma todos os itens de um array. prevValue(valor anterior) e currentValue(valor atual)
    console.log({ prevValue }); //dessa forma ele mostrara o valor unicial, em seguida a soma e depois novamente o valor resdultado.
    console.log({ currentValue });

    return prevValue + currentValue
  })
}

const array = [1, 4];

console.log(soma(array));