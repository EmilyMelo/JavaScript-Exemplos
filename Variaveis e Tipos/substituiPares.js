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