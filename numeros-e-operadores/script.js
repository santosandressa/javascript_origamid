var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

// Precisão para até 15 digitos

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
console.log(isNaN(divisao));

// NAN = NOT A NUMBER
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

/*
    A ordem importa.
    Começa por multiplicação e divisão, depois por soma e subtração.
    Parênteses para priorizar uma expressão
*/

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var num = '10';

console.log(+num + 2);

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

var isFalse = false;
console.log(+isFalse)
//O - antes de um número torna ele negativo

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// 35

// Crie duas expressões que retornem NaN
var notAnumber = 10 / '2x'
var notAnumber2 = '1000x' * 4
console.log(notAnumber, notAnumber2)

// Somar a string '200' com o número 50 e retornar 250
var duzentos = '200';
var cinquenta = 50;
var soma = +duzentos + 50;
console.log(soma)

// Incremente o número 5 e retorne o seu valor incrementado
var increase = 5;
increase++;
console.log(increase)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var result = +numero / 2;
console.log(result)
