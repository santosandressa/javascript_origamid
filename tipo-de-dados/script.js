var nome = "André"; // String
console.log(typeof nome);
var idade = 28; // Number
console.log(typeof idade);
var possuiFaculdade = true; // Boolean
console.log(typeof possuiFaculdade);
var time; // Undefined
console.log(typeof time);
var comida = null; // Null
console.log(typeof null); // retorna objeto *bug
var simbolo = Symbol(); // Symbol
console.log(typeof simbolo);
var novoObjeto = {}; // Object
console.log(novoObjeto);

/*
    Todos são primitivos exceto os objetos.
    Primitivos são dados imutáveis.
*/

var nome = "Andressa";
var sobrenome = "Santos";
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase + " - " + typeof frase);

var gols = 2023;
var frase2 = `Estamos no ano de ${2023}`; // Utilizando Template String
console.log(frase2);

// Declare uma variável contendo uma string
var thisIsmyString = "Eu sou uma string";
console.log(typeof thisIsmyString);

// Declare uma variável contendo um número dentro de uma string
var numeroDentroString = `Eu sou uma string com o número ${1}`;
console.log(typeof numeroDentroString);

// Declare uma variável com a sua idade
var idade = 28;
console.log(typeof idade)

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome1 = "Andressa ";
var sobrenome1 = "Santos";
var nomeSobrenome = nome1 + sobrenome;
console.log(nomeSobrenome);

// Coloque a seguinte frase em uma variável: It's time
var frase3 = `It's time`;
console.log(frase3);

// Verifique o tipo da variável que contém o seu nome
var tipoVar = typeof nome1;
console.log(tipoVar);
