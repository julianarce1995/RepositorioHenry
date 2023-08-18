/*
 * Completa la clase 'Libro' a continuación.
 *
 * No modifiques nada por fuera del cuerpo de los métodos.
 */

class Libro {
  constructor(titulo, autor, traducciones) {
    // Inicializar las propiedades del libro con los valores recibidos como argumento
    // tu código aquí
    this.titulo = titulo;
    this.autor = autor;
    this.traducciones = traducciones;
    this.dum = [];
  }

  getTitulo() {
    // tu código aquí
    return this.titulo;
  }

  getAutor() {
    // tu código aquí
    return this.autor;
  }

  getTraducciones() {
    // Retornar un arreglo con los idiomas de las traducciones
    // tu código aquí
    for (let index = 0; index < this.traducciones.length; index++) {
      this.dum.push(this.traducciones[index].idioma);
    }
    return this.dum;
  }

  addTraduccion(idioma, editorial) {
    // Agregar un objeto: { idioma: idioma, editorial: editorial }
    // al arreglo de traducciones del libro.
    // tu código aquí
    this.traducciones.push({ idioma: idioma, editorial: editorial });
  }
}

var traduccionesDeHP = [
  {
    idioma: 'español',
    editorial: 'Santillana',
  },
  {
    idioma: 'frances',
    editorial: 'Mystique',
  },
  {
    idioma: 'aleman',
    editorial: 'Scholastic',
  },
];

var nuevoLibro = new Libro(
  'Harry Potter y la Piedra Filosofal',
  'J.K. Rowling',
  traduccionesDeHP,
);

let lun = nuevoLibro.getAutor();
let lun2 = nuevoLibro.getTitulo();
let lun3 = nuevoLibro.getTraducciones();
console.log(nuevoLibro, '1', lun, '2', lun2, '3', lun3);
