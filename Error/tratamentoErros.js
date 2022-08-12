function validaArray(array, num) {
  try {

    if (!array && !num) throw new ReferenceError("Sem parâmetros! Envie os parâmetros!!");
    if (typeof array !== 'object') throw new TypeError("Seu array precisa ser do tipo object");
    if (typeof num !== 'number') throw new TypeError("Precisa ser um numero");
    if (array.length != num) throw new RangeError("Tamanho invalido! O tamanho do seu array deve ser o mesmo que o numero apresentado.");

    return array;
  }
  catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Este erro é um ReferenceError');
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log('Este erro é um TypeError');
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log('Este erro é um RangeError');
      console.log(e.message);
    } else {
      console.log('Tipo de erro nao esperado:' + e);
    }
  }
}

console.log(validaArray(["aa", 22, "d4"], 3));


