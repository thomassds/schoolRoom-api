import { AlunosData } from "../Database/Alunos.js";

class AlunoRepository {
  buscarTodos() {
    const alunos = AlunosData;

    return alunos;
  }
}

export default new AlunoRepository();
