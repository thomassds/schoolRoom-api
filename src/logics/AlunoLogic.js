import AlunoRepository from "../repositories/AlunoRepository.js";

class AlunoLogic {
  maiorIdade() {
    const alunos = AlunoRepository.buscarTodos();

    const resultado = alunos.filter((aluno) => {
      const anoNascimento = aluno.nascimento.getFullYear();
      const anoAtual = new Date().getFullYear();

      const idade = anoAtual - anoNascimento;

      if (idade >= 18) {
        return aluno;
      }
    });

    return resultado;
  }

  menorIdade() {
    const alunos = AlunoRepository.buscarTodos();

    const resultado = alunos.filter((aluno) => {
      const anoNascimento = aluno.nascimento.getFullYear();
      const anoAtual = new Date().getFullYear();

      const idade = anoAtual - anoNascimento;

      if (idade < 18) {
        return aluno;
      }
    });

    return resultado;
  }
}

export default new AlunoLogic();
