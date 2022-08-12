function mostraIdade(nome, idade) {
  return `A idade de ${nome} é ${idade}.`
};

function mostraCidade(nome, cidade) {
  return `A cidade de ${nome} é ${cidade}`
};

function mostraHobby(nome, hobby) {
  return `O hobby de ${nome} é ${hobby}`
};

export { mostraIdade, mostraCidade, mostraHobby }; //essa é uma maneira para se exportar uma funcao. 
//Outra forma é colocando a palavra "export" antes da funcao

// export function mostraIdade(nome, idade) {
//   return `A idade de ${nome} é ${idade}.`
// };

// export function mostraCidade(nome, cidade) {
//   return `A cidade de ${nome} é ${cidade}`
// };

// export function mostraHobby(nome, hobby) {
//   return `O hobby de ${nome} é ${hobby}`
// };