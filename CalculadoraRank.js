
const Jogador = require('./Jogador');
const prompt = require('prompt-sync')();

class CalculadoraRank {
  constructor() {
    this.jogador = null;
  }

  
  iniciar() {
    const vitorias = parseInt(prompt("Digite a quantidade de vitórias: "));
    const derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));

    
    this.jogador = new Jogador(vitorias, derrotas);

    
    const saldo = this.jogador.calcularSaldo();

    
    if (saldo < 0) {
      console.log("Você perdeu demais, você é indigno de ser chamado herói com essa pontuação, vá chorar para sua mamãe.");
    } else {
      
      const nivel = this.jogador.classificarNivel();
      console.log(`O Herói tem um saldo de ${saldo} e está no nível ${nivel}.`);
    }
  }
}

module.exports = CalculadoraRank;

