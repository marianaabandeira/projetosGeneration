// Importando a biblioteca
const leia = require('readline-sync')

// Variáveis
let celsius, fahrenheit

// Entrada de dados
celsius = leia.questionFloat("Digite a temperatura em Celsius: ")

// Processamento
fahrenheit = celsius * 1.8 + 32

// Saída dos dados
console.log("\nA temperatura em Fahrenheit é: " + fahrenheit + " °F")
console.log("A temperatura em Fahrenheit é: %f °F", fahrenheit)

