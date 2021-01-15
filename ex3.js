class DNI {
  /**
   * @param {string} titular Indica el titular del Dni
   * @param {string} numero  Código en formato 12345678A
   * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
   */
  constructor(titular, numero, caducidad) {
    this.titular = titular;
    this.numero = numero;
    this.caducidad = caducidad;
  }

  estaCaducado() {
    // CURRENT DATE
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    if (month.toString().length < 2) {
      month = month.toString();
      month = `0${month}`;
    }

    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = year + "-" + month + "-" + day;

    // DNI DATE

    let dniYear = Number(this.caducidad.substr(0, 4));
    let dniMonth = this.caducidad.substr(5, 2);
    let dniDay = this.caducidad.substr(8, 2);

    if (dniYear < year) {
      return true;
    } else if (dniYear == year) {
      if (dniMonth > month) {
        return false;
      } else if (dniMonth < month) {
        return true;
      } else if (dniMonth == month) {
        if (dniDay < day) {
          return true;
        } else if (dniDay > day) {
          return false;
        } else if (dniDay == day) {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  esDniFormatoValido() {
    let reg = /\d{8}[A-Z]/;
    let result = this.numero.match(reg);
    return result !== null ? true : false;
  }

  calculaLetraDni(dni) {
    let letras = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
      "T",
    ];

    let numero = dni;
    let reg = /\d{8}/;
    let result = numero.toString().match(reg);

    if (result != null) {
      let letraCalculada = letras[numero % 23];
      return numero + letraCalculada;
    } else {
      return "El formato de numero no es válido, deben ser 8 numeros";
    }
  }
}

const midni = new DNI("Pedro Vallés", "1234567A", "1990-01-13");

console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());
console.log(midni.calculaLetraDni(10987434));
