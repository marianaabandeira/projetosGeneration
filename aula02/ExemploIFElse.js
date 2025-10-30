// Importando a biblioteca
const leia = require('readline-sync')

// Variável 
let nota1, nota2, media

// Entrada de dados
nota1 = leia.questionFloat("Digite a primeira nota: ")
nota2 = leia.questionFloat("Digite a segunda nota: ")

// Processamento - IF...ELSE
media = (nota1 + nota2) / 2 
if (media >= 6) {
    console.log("\nVocê foi aprovado(a)!")

}else if (media == 5) {
    console.log("\nVocê está de recuperação!")
    
}else {
    console.log("\n Você foi reprovado(a)!")
}