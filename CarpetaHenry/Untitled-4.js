function vegan(invitados) {
  // tu código aquí
  let count = 0;

  for (let nombre in invitados) {
    if (invitados[nombre].vegan) {
      count++;
    }
  }
  return count;
}

var invitados = {
  Luna: {
    vegan: false,
  },
  Sebas: {
    vegan: false,
  },
  Marce: {
    vegan: false,
  },
  Nicky: {
    vegan: true,
  },
};

vegan(invitados);
