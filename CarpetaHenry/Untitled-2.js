function menorMayor(numeros) {
  let menorMayor = [];
  let menor;
  let mayor;

  for (let index = 0; index < numeros.length; index++) {
    let elementMenor = numeros[index];
    for (let j = 0; j < numeros.length; j++) {
      if (elementMenor > numeros[j]) {
        elementMenor = numeros[j];
      }
    }
    menor = elementMenor;
  }
  menorMayor.push(menor);
  for (let index = 0; index < numeros.length; index++) {
    let elementMayor = numeros[index];
    for (let h = 0; h < numeros.length; h++) {
      if (elementMayor < numeros[h]) {
        elementMayor = numeros[h];
      }
    }
    mayor = elementMayor;
  }
  menorMayor.push(mayor);
  return menorMayor;
}

menorMayor([4, 6, 1, 7, 15]);
