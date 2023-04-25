import ProfessorLogic from "../logics/ProfessorLogic.js";

class ProfessorController {
  buscarIdadeAula(req, res) {
    const { idade, aula } = req.params;

    const resultado = ProfessorLogic.buscarIdadeAula(idade, aula);

    return res.status(200).json(resultado);
  }
}

export default new ProfessorController();
