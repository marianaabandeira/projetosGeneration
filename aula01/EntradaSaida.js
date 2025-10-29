// Importando a biblioteca
const leia = require('readline-sync')

// Declarnado Variaveis
let nome, distancia

// Entrada de dados
console.log("Digite o seu nome: ")
nome = leia.question() // Lendo uma string

console.log("\nDigite a distancia percorrida em sua corrida: ")
distancia = leia.questionFloat() // Lendo um numero real, quebrado (float)

// Saída dos dados
console.log("\nBom dia, " + nome)
console.log("\nA distancia percorrida foi de " + distancia + " km.")
// Poderia ser: console.log("Bom dia" + nome + "A distancia percorrida foi de " + distancia + "Km.")

