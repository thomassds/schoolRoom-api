import ProfessorRepository from "../repositories/ProfessorRepository.js";

class ProfessorLogic {
  buscarIdadeAula(idade, aula) {
    const professores = ProfessorRepository.buscarTodos();

    const resultado = professores.filter((professor) => {
      const anoNascimento = professor.nascimento.getFullYear();
      const anoAtual = new Date().getFullYear();

      const idadeProfessor = anoAtual - anoNascimento;

      const materia = professor.materia.toUpperCase();

      if (idadeProfessor > idade && materia == aula.toUpperCase()) {
        return professor;
      }
    });

    return resultado;
  }
}

export default new ProfessorLogic();
