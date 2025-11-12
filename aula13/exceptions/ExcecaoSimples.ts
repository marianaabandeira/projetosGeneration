export class ExcecaoSimples extends Error { // cria uma classe de exceção personalizada que herda da classe Error

    constructor(mensagem: string) { // construtor da classe
        super() // chama o construtor da classe Error
        this.name = "Exceção Simples" // nome da exceção, fazendo referencia à classe ExcecaoSimples
        this.message = mensagem // mensagem da exceção

// Ou seja, o que eu fiz aqui foi criar uma exceção personalizada chamada ExcecaoSimples que pode ser usada para lançar erros com uma mensagem específica.
// ExcecaoSimples herda de Error, então ela tem todas as propriedades e métodos de um erro padrão em JavaScript/TypeScript.

    }

}