// Arrow Functions em TypeScript = É uma forma mais curta de escrever uma função em JavaScript.
// Não pode ser usado para funções construtoras e métodos, pois não possuem o seu próprio contexto "this".
// Sintaxe:: (lista de parâmetros) => { expressão }
// Se houver apenas um parâmetro, os parênteses podem ser omitidos.
// Se houver apenas uma expressão, as chaves podem ser omitidas e o valor da expressão será retornado automaticamente.

export function main() {

    let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Exibir os itens\n");

// Exibir os itens da Lista sem Arrow Functions
// for(let numero of numeros){

//   console.log(numero);

//}

// numeros.forEach(function (numero : number) { //for.. Each => para .. cada
//    console.log(numero)
//}) 

numeros.forEach(numero => console.log(numero)); // Ou seja, Arrow Function, que é uma função de seta que simplifica a sintaxe da função de callback

console.log("\nExibir os itens somados com eles mesmos\n");

// Exibir os itens da Lista dobrados sem Arrow Functions
//for(let numero of numeros){

//    console.log(numero + numero);

//}

numeros.forEach(numero => console.log(numero + numero));
// numero.forEach = para cada numero na lista numeros, execute a função de seta que recebe o numero e exibe o numero somado com ele mesmo
// ForEach = Serve pra percorrer todos os itens de uma lista (array) e executar alguma ação pra cada item.
// (numero => console.log(numero + numero)) = função de seta que recebe o numero e exibe o numero somado com ele mesmo
// (=> = Lambda) ou Arrow Function = É tipo uma função anônima — ela faz algo, mas não tem nome.

console.log("\nExibir os itens pares da lista\n");

// Exibir apenas os elementos pares da Lista sem Arrow Functions
//for(let numero of numeros){
//    if (numero % 2 == 0)
//       console.log(numero);
//    }
//}

numeros.forEach(item => {
    if (item % 2 == 0) console.log(item)
})

/* 
Explicação: A função forEach percorre todos os elementos do array "numeros" e executa a função de seta para cada elemento. 
A função de seta verifica se o elemento é par e, se for, exibe o elemento no console.
*/

main();

}