function cuentaPorFavor(orden) {
  // tu código aquí
  console.log(orden);
  let total = 0;
  for (let index = 0; index < orden.length; index++) {
    const cantidad = orden[index].cantidad;
    const precio = orden[index].precio;
    total = total + precio * cantidad;
  }
  console.log(total);
}

var comidas = [
  {
    nombre: 'pizza',
    cantidad: 6,
    precio: 5,
  },
  {
    nombre: 'coca-cola',
    cantidad: 3,
    precio: 1,
  },
];

cuentaPorFavor(comidas);
