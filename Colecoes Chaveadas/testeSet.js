// ## Atividade 2: Sets
// Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.


const minhaLista = [30, 30, 40, 5, 225, 2040, 5];

function valoresUnicos(lista) {
  const meuSet = new Set(lista);

  return [...meuSet]; // para que os elementos da lista retornem em forma de um novo array, deve-se utilizar o metodo ... = (spread)
}

console.log(valoresUnicos(minhaLista));