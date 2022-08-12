/*# Sintaxe e Operadores
## Atividade

- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números `num1` e `num2` não/são iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20".

Exemplo:

```
Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
```
 */

/*
function comparaNumeros1(a, b) {
  const saoIguais = a === b;

  if (saoIguais) {
    return "São Iguais!";
  }
  return "Não são iguais!"
}

OU

function comparaNumeros2(num1, num2) {
  const saoIguais = num1 === num2;
  const soma = num1 + num2;

  return saoIguais ? "São iguais" : "Não são iguais";
}

console.log(comparaNumeros2(1, 3));
*/

function comparaEsoma(num1, num2) {
  const compara = comparaNumeros(num1, num2);
  const somaEverifica = somaNumeros(num1, num2);

  return `${compara} ${somaEverifica}`
}

function comparaNumeros(num1, num2) {
  let saoIguais = '';

  if (num1 !== num2) {
    saoIguais = 'não';
  }
  return `Os números ${num1} e ${num2} ${saoIguais} são iguais. `
};

function somaNumeros(num1, num2) {
  const soma = num1 + num2;

  let resultado1 = "menor";
  let resultado2 = "menor"

  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if (compara10) {
    resultado1 = "maior"
  }

  if (compara20) {
    resultado2 = "maior"
  }
  return `Sua soma é ${soma}, que é ${resultado1} que 10 e ${resultado2} que 20.`
}

console.log(comparaEsoma(10, 20));