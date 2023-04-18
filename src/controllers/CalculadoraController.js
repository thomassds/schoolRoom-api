import CalculadoraLogic from "../logics/CalculadoraLogic.js";

class CalculadoraController {
  calcular(req, res) {
    const { metodo } = req.params;
    const { numero1, numero2 } = req.body;

    const resultado = CalculadoraLogic.calcular({ metodo, numero1, numero2 });

    if (!resultado) {
      return res.status(422).json("Metodo invalido");
    }

    return res.status(200).json(resultado);
  }

  soma(req, res) {
    const numero1 = 10;
    const numero2 = 30;

    const resultado = CalculadoraLogic.soma(numero1, numero2);

    return res.status(200).json(resultado);
  }

  div(req, res) {
    const numero1 = 90;
    const numero2 = 30;

    const resultado = CalculadoraLogic.div(numero1, numero2);

    return res.status(200).json(resultado);
  }

  mult(req, res) {
    const numero1 = 20;
    const numero2 = 10;

    const resultado = CalculadoraLogic.mult(numero1, numero);

    return res.status(200).json(resultado);
  }

  sub(req, res) {
    const numero1 = 20;
    const numero2 = 10;

    const resultado = CalculadoraLogic.sub(numero1, numero2);

    return res.status(200).json(resultado);
  }
}

export default new CalculadoraController();
