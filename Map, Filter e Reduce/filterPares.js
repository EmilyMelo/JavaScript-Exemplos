// ### Filter
// - Filtre e retorne todos os números pares de um array.

function filtraPares(array) {
  return array.filter(callback)
}

function callback(item) {
  return item % 2 === 0
}

const myArray = [1, 3, 47, 2, 26, 44, 19, 97];

console.log(filtraPares(myArray));