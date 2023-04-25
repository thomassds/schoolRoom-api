import { ProfessoresData } from "../Database/Professores.js";

class ProfessorRepository {
  buscarTodos() {
    const professores = ProfessoresData;

    return professores;
  }
}

export default new ProfessorRepository();
