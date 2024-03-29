// # Atividade

// Esta atividade tem como objetivo que você veja **no console do seu navegador** como os módulos funcionam.

// 1. Instale a extensão "Live Server" no seu VSCode;
// 2. Crie um arquivo com uma estrutura HTML padrão;
// 3. Crie dois arquivos `.js` ou `.mjs`, um chamado `funcoes` e outro chamado `main`;
// 4. No arquivo `funcoes`:
//    1. Crie uma função chamada `mostraIdade`, que recebe `nome` e `idade` e retorna a string: `A idade de ${nome} é ${idade}`;
//    2. Siga o mesmo padrão para outras funções como `mostraCidade` e `mostraHobby`;
//    3. Exporte estas funções.
// 5. No arquivo `main`:
//    1. Importe as funções do arquivo `funcoes`;
//    2. Faça a chamada de todas elas;
// 6. Utilizando a extensão "Live Server", abra o seu navegador e veja no console que as informações foram logadas corretamente.



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