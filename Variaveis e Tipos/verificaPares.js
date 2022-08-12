function verificaPares(lista) {
  let pares = [];
  let impares = [];
  //for (valor inicial; condicao de repeticao; o que faz quando acaba uma execucao)
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0)
      pares.push(lista[i]);
    else
      impares.push(lista[i]);
  }
  return `Os numero pares da lista são: ${pares}. E os impares são: ${impares}`;
}

let resultado = verificaPares([1, 3, 5, 4, 10]);
console.log(resultado);