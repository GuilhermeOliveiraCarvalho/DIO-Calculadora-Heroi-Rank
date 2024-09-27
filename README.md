# Desafio de Projeto: Calculadora de Partidas Rankeadas

Este projeto foi desenvolvido como parte do bootcamp **GFT Start #6 - Lógica de Programação** da [DIO](https://www.dio.me/). O tema do projeto é uma **Calculadora de Partidas Rankeadas**, que utiliza conceitos fundamentais de programação, como variáveis, operadores, laços de repetição, estruturas de decisão e funções.

## Sobre o Desafio

O objetivo do desafio era criar uma aplicação em JavaScript que calculasse o saldo de partidas de um jogador com base em suas vitórias e derrotas. A aplicação classifica o jogador em diferentes níveis de acordo com a quantidade de vitórias, exibindo uma mensagem apropriada ao final do cálculo. Além disso, o programa verifica se o jogador possui um saldo negativo e, nesse caso, exibe uma mensagem especial.

### Requisitos

- Utilizar variáveis para armazenar os dados do jogador (número de vitórias e derrotas).
- Implementar operadores para realizar cálculos (saldo de vitórias - derrotas).
- Aplicar laços de repetição e estruturas de decisão para controlar o fluxo do programa e verificar as condições de classificação do jogador.
- Criar funções para organizar o código e dividir responsabilidades, como calcular o saldo e classificar o nível do jogador.

## O Que Foi Implementado

O projeto foi estruturado em três classes principais para organizar e modularizar o código:

1. **Classe `Jogador`**: 
   - Armazena os dados do jogador, como o número de vitórias e derrotas.
   - Contém métodos para calcular o saldo (diferença entre vitórias e derrotas) e para classificar o nível do jogador com base no número de vitórias.

2. **Classe `CalculadoraRank`**:
   - Gerencia a interação com o usuário, solicitando a entrada de vitórias e derrotas.
   - Utiliza a classe `Jogador` para calcular o saldo e determinar o nível do jogador.
   - Adiciona uma verificação para saldo negativo, exibindo uma mensagem específica caso o jogador tenha perdido mais do que ganhou.

3. **Classe `Main`**:
   - Ponto de entrada do programa, inicializando e executando a `CalculadoraRank`.

### Critérios de Classificação
- **Ferro**: Menos de 10 vitórias.
- **Bronze**: Entre 11 e 20 vitórias.
- **Prata**: Entre 21 e 50 vitórias.
- **Ouro**: Entre 51 e 80 vitórias.
- **Diamante**: Entre 81 e 90 vitórias.
- **Lendário**: Entre 91 e 100 vitórias.
- **Imortal**: Maior ou igual a 101 vitórias.


## Como Executar

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório em seu ambiente local.
3. No terminal, navegue até a pasta do projeto e instale a biblioteca `prompt-sync`:
   ```bash
   npm install prompt-sync
