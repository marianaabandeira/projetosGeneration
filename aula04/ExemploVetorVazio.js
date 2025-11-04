// Importando a biblioteca
const leia = require('readline-sync')


// Entrada de iformações
let vetorIntteiros = new Array(5) // Criando um vetor vazio com 5 posições

for (let indice = 0; indice < 5; indice++){
    vetorIntteiros[indice] = leia.questionInt(`Digite um número ${indice + 1}: `)

}

// saída de informações
for (let indice = 0; indice < 5; indice++){
    console.log(`O ${indice + 1}º número é: ${vetorIntteiros[indice]}`)
}

