class Coche {
  /**
   *
   * @param {string} modelo Representa el modelo de coche (marca, serie, etc)
   * @param {string} matricula Mátricula
   * @param {boolean} gps Indica si lleva navegación GPS integrada
   * @param {number} deposito Indica cuan lleno está el depósito. 100 indica que está completamente lleno, 0 que esta vacío.
   */
  constructor(modelo, matricula, gps) {
    this.modelo = modelo;
    this.matricula = matricula;
    this.gps = gps;
  }

  // Llena el deposito a 100 unidades de gasolina
  llenarDeposito() {
    return (this.deposito = 100);
  }

  // Consume una unidad del deposito
  usar() {
    return this.deposito--;
  }

  estaDepositoVacio() {
    return this.deposito === 0;
  }
}

const astra = new Coche("Opel Astra", "1984 GI", false, 100);
const ibiza = new Coche("Seat Ibiza", "2021 AZ", false);

// PRUEBAS
console.log("EMPIEEZA AQUI");
//1. El console.log debería mostrar una instancia del tipo 'Coche', con el modelo, matrícula e indicando si posee o no gps.
console.log("Coche Astra:", astra);

//2. Despúes de invocar el método 'usar', el depósito del coche debería tener 99 unidades

astra.deposito = 100;
astra.usar();
console.log("Coche Astra después de usarlo:", astra.usar());

// 3. Después de invocar el método 'llenarDeposito', el coche debería tener 100 unidades de gasolina en el deposito
astra.llenarDeposito();
console.log("Coche Astra después de rellenarlo:", astra.llenarDeposito());

// //4. Implementa un NUEVO MÉTODO en la clase Coche. Este método se va a llamar 'estaDepositoVacio'. Debe devolver 'true' si al deposito le quedan 0 unidades de gasolina
ibiza.deposito = 0;
ibiza.estaDepositoVacio();
console.log(
  "El deposito del Ibiza debería estar vacío",
  ibiza.estaDepositoVacio()
);
