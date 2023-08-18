/*
 * Completa la función 'sumaTodosPrimos' a continuación.
 *
 * La función debe retornar un ENTERO.
 * La función recibe un ARREGLO DE ENTEROS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function sumaTodosPrimos(numeros) {
  // tu código aquí
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    let isPrimo = (numero) => {
      if (numero <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return true;
    };
    if (isPrimo(numero) === true) {
      suma = suma + numero;
    }
  }
  console.log(suma);
  return suma;
}

// suma de 5 + 2 + 3 + 11
sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]);
