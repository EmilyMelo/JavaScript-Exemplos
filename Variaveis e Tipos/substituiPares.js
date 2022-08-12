// ## Atividade 2

// Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

// Exemplo:
// Input -> [1, 3, 4, 6, 80, 33, 23, 90]

// Output -> [1, 3, 0, 0, 0, 33, 23, 0]

// Input -> []

// Output -> -1


function substituiPares(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 0) {
      console.log("Este numero já é zero!")
    } else if (lista[i] % 2 === 0) {
      console.log(`Substituindo ${lista[i]} por 0...`)
      lista[i] = 0
    }
  }
  return lista;
}

let lista = [0, 2, 10, 11, 13, 4, 7, 50];
console.log(substituiPares(lista));