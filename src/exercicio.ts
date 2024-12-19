// Exercício de TS

// Utilizando o TypeScript e a tipagem escreva duas funções:
// -> uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles,
// -> e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

// A função de multiplicação deverá retornar o resultado da operação com a frase "Olá ${nome}", o resultado da multiplicação é:
function dizOla(nome: string): string {
    return `Olá ${nome}, o resultado da multiplicação é:`;
}

// A função de multiplicação deverá retornar o resultado da operação.
function multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
}

// Testes
console.log(dizOla('Lucas'), multiplicacao(2, 3)); // Olá Lucas, o resultado da multiplicação é: 6

// Como utilizar o codigo
// tsc .\src\exercicio.ts
// node .\src\exercicio.js = isso testará o código