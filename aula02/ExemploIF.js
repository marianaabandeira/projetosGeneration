// Importando a biblioteca
const leia = require('readline-sync')

// Variável
let idade

// Entrada de dados
console.log("Digite a sua idade: ")
idade = leia.questionInt()

// Processamento - IF
if (idade < 18) {
    console.log("\nVocê não pode dirigir!")
}  
console.log("\nFim no programa.")