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