class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const persona1 = new Persona("Pedro");

// los objetos se pasan por referencia !!
if (1==1) {
    let persona_otra = persona1;
}
    
persona1.nombre = "Eduardo";
console.log(persona_otra);