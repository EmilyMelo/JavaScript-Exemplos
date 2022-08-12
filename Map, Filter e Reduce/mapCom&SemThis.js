// ### Map
//   - Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro `this` de um objeto criado por você, e depois sem ele.

const maca = {
  valor: 2,
}
const laranja = {
  valor: 3,
}

function mapComThis(array, thisArg) {
  return array.map(function (item) {
    return item * this.valor;
  }, thisArg);
}

const numeros = [1, 2];
console.log('this -> maca', mapComThis(numeros, maca));
console.log('this -> laranja', mapComThis(numeros, laranja));


//

function mapSemThis(array) {
  return array.map(function (item) {
    return item * 2;
  })
};

const numeros = [2, 4, 6, 8, 10];

console.log(mapSemThis(numeros));
console.log(numeros);