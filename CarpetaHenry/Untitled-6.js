function ideas(listaDeIdeas) {
  // tu código aquí
  let count = 0;
  for (let index = 0; index < listaDeIdeas.length; index++) {
    const element = listaDeIdeas[index];
    if (element === 'buena') {
      count++;
    }
  }
  if (count > 0 && count < 3) {
    return 'Activa!';
  } else if (count >= 3) {
    return 'Jackpot!';
  } else {
    return 'Fail!';
  }
}
