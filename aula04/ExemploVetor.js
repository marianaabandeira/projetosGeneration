// Importando a biblioteca
const leia = require('readline-sync')

//let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"]

//console.log(vetorStrings[0]) // Acessando o primeiro elemento do vetor
//console.log(vetorStrings[1]) // Acessando o segundo elemento do vetor
//console.log(vetorStrings[2]) // Acessando o terceiro elemento do vetor
//console.log(vetorStrings[3]) // Acessando o quarto elemento do vetor
//console.log(vetorStrings[4]) // Acessando o quinto elemento do vetor

let vetorstring = [
    "Boxer",
    "Pastor Alemão",
    "Pinscher",
    "Husky Siberiano",
    "Corgi"
  ];
  
  for (let indice = 0; indice < 5; indice++)
  {
      console.log(`${indice + 1}º elemento: ${vetorstring[indice]}`); 
  }
  