// Implementa el tipo de dato 'Array' que ofrece JavaScript; y algunos de sus métodos

// El constructor no tiene parámetros, sin embargo, debe inicializar una propiedad, por ejemplo this.elements como un valor de tipo array vació.

// Método 'addNew'. Añade un nuevo elemento al array. Puedes utilizar el método 'push' de JavaScript

// Implementa el método 'findIndex'. El método findIndex devuelve la posición un elemento se encuentra dentro del array. En caso de no estar, devuelve un -1. NO puedes utilizar el método 'findIndex' de JavaScript!

// Implementa el método 'join'. El método 'join' devuelve un string, con todos los elementos del array concatenadors por un separados, que debes pasar como argumento

class Array {
  constructor(elements) {
    this.elements = elements;
  }
  addNew(gato) {
    return this.elements.push(gato);
  }
}

// PRUEBAS
const gatos = new Array([]);
gatos.addNew("Michi");
gatos.addNew("Cuki");
gatos.addNew("Loki");
console.log(gatos);

// Debe devolver un 1

function find(gato) {
  return gato === "Cuki";
}
console.log(gatos.elements.findIndex(find), "el indice de Cuki");

// Debe devolver 'Michi-Cuki-Loki'
console.log(gatos.elements.join("-"));
