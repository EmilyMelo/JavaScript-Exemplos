//solucao 1
function verificaPalindromo(palavra) {
  if (!palavra) return "não é palavra!";

  return palavra.split("").reverse().join("") === palavra;
}

//solucao2
function verificaPalindromo2(palavra) {
  if (!palavra) return "não é palavra!";

  for (let i = 0; i < palavra.length / 2; i++) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalindromo2("12121"))