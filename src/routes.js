import { Router } from "express";
import CalculadoraController from "./controllers/CalculadoraController.js";
import AlunoController from "./controllers/AlunoController.js";

class Route {
  getRouter() {
    const router = Router();

    router.post("/calculadora/metodo/:metodo", CalculadoraController.calcular);

    router.get("/calculadora/soma", CalculadoraController.soma);

    router.get("/calculadora/div", CalculadoraController.div);

    router.get("/calculadora/mult", CalculadoraController.mult);

    router.get("/calculadora/sub", CalculadoraController.sub);

    router.get("/alunos/maior-idade", AlunoController.buscarMaiorIdade);

    router.get("/alunos/menor-idade", AlunoController.buscarMenorIdade);
    return router;
  }
}

export default new Route();
