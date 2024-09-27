class Jogador {
    constructor(vitorias, derrotas) {
      this.vitorias = vitorias;
      this.derrotas = derrotas;
    }
  
    
    calcularSaldo() {
      return this.vitorias - this.derrotas;
    }
  
    
    classificarNivel() {
      if (this.vitorias < 10) {
        return 'Ferro';
      } else if (this.vitorias >= 11 && this.vitorias <= 20) {
        return 'Bronze';
      } else if (this.vitorias >= 21 && this.vitorias <= 50) {
        return 'Prata';
      } else if (this.vitorias >= 51 && this.vitorias <= 80) {
        return 'Ouro';
      } else if (this.vitorias >= 81 && this.vitorias <= 90) {
        return 'Diamante';
      } else if (this.vitorias >= 91 && this.vitorias <= 100) {
        return 'Lendário';
      } else {
        return 'Imortal';
      }
    }
  }
  
  module.exports = Jogador;
  