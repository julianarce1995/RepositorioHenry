function soloStrings(arregloMixto) {
  // tu código aquí
  let arr = [];
  for (let index = 0; index < arregloMixto.length; index++) {
    const element = arregloMixto[index];
    if (typeof element === 'string') {
      arr.push(element);
    }
  }
  return arr;
}
