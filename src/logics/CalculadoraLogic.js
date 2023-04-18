class CalculadoraLogic {
  calcular({ metodo, numero1, numero2 }) {
    let resultado;
    if (metodo == "soma") {
      resultado = numero1 + numero2;
    }

    if (metodo == "sub") {
      resultado = numero1 + numero2;
    }

    if (metodo == "mult") {
      resultado = numero1 * numero2;
    }

    if (metodo == "div") {
      resultado = numero1 / numero2;
    }

    return resultado;
  }

  soma(numero1, numero2) {
    const resultado = numero1 + numero2;

    return resultado;
  }

  div(numero1, numero2) {
    const resultado = numero1 / numero2;

    return resultado;
  }

  mult(numero1, numero2) {
    const resultado = numero1 * numero2;

    return resultado;
  }

  sub(numero1, numero2) {
    const resultado = numero1 - numero2;

    return resultado;
  }
}

export default new CalculadoraLogic();
