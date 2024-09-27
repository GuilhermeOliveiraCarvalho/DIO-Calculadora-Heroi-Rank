
const CalculadoraRank = require('./CalculadoraRank');

class Main {
  static executar() {
    const calculadora = new CalculadoraRank();
    calculadora.iniciar();
  }
}


Main.executar();
