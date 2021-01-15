class Persona {
    constructor() {
      
    }

    hablar() {
        return "Hola!";
    }
}

class Gato {
    constructor() {
      
    }

    hablar() {
        return "Miau!";
    }
}

const animales = [];
animales.push(new Persona());
animales.push(new Gato());
animales.push(new Gato());
animales.push(new Persona());

animales.forEach( (siguienteAnimal) => {
    console.log(siguienteAnimal.hablar());
})