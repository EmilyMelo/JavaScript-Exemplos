const calc = function (operacao, num1, num2) { // Funcao anonima
  return operacao(num1, num2);
}

const soma = function (num1, num2) { // Funcao anonima
  return num1 + num2;
}
const sub = function (num1, num2) { // Funcao anonima
  return num1 - num2;
}

const resultSoma = calc(soma, 1, 2); // callback
const resultSub = calc(sub, 1, 2);

console.log(resultSoma); //3
console.log(resultSub); //-1