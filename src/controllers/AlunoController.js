import AlunoLogic from "../logics/AlunoLogic.js";

class AlunoController {
  buscarMaiorIdade(req, res) {
    const resultado = AlunoLogic.maiorIdade();

    return res.status(200).json(resultado);
  }

  buscarMenorIdade(req, res) {
    const resultado = AlunoLogic.menorIdade();

    return res.status(200).json(resultado);
  }

  buscarPorCaracteres(req, res) {
    const { caracteres } = req.params;

    const resultado = AlunoLogic.buscarPorCaracteres(caracteres);

    return res.status(200).json(resultado);
  }

  buscarPorId(req, res) {
    const { id } = req.params;

    const resultado = AlunoLogic.buscarPorId(id);

    return res.status(200).json(resultado);
  }
}

export default new AlunoController();
