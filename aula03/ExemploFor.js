// Importando a biblioteca
const leia = require('readline-sync')

// Declaração de variáveis
let nome, contador


for (contador = 1; contador < 4; contador++) { // ++ operador de incremento, ou seja, adiciona 1 a variável, contador = contador + 1

  nome = leia.question("Digite um nome: ");
  console.log("O " + contador + "º nome digitado foi: " + nome);
}
