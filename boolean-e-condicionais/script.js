/*
    Existem dois valores booleanos false ou true.
*/

var possuiGraduacao = true;
var possuiDoutorado = false;

var possuiGraduacao = true;

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado


/*
    Com o switch você pode verificar se uma variável é igual à diferentes valores
    utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e
    utilizar a palavra chave break; para cancelar a continuação. 
    O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
*/

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

/*
    TRUTHY E FALSY
    Existem valores que retornam true e outros que retornam false quando verificados
    em uma expressão booleana.
*/

// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('')

// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})

/*
    OPERADOR LÓGICO DE NEGAÇÃO !
    O operador !, nega uma operação booleana. Ou seja, !true é igual a false
*/

// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if (!!''); // false

// Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

/*
    OPERADORES DE COMPARAÇÃO
    O == faz uma comparação não tão estrita e o === faz uma comparação estrita, 
    ou seja, o tipo de dado deve ser o mesmo quando usamos ===
*/

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

/*
    OPERADORES LÓGICOS &&
    && Compara se uma expressão e a outra é verdadeira

    Se ambos os valores forem true ele irá retornar o último valor verificado 
    Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar 
    os próximos
*/

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

/*
    OPERADORES LÓGICOS ||
    || Compara se uma expressão ou outra é verdadeira

    Retorna o primeiro valor true que encontrar
*/

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

// Exercícios
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idade = 28;
var idadeParente = 19;

if (idade > idadeParente) {
    console.log('É maior')
} else if (idade < idadeParente){
    console.log('É menor')
} else {
    console.log('É igual')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// 3 

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true 
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

console.log(!!nome);
console.log(!!idade);
console.log(!!possuiDoutorado);
console.log(!!empregoFuturo);
console.log(Boolean(dinheiroNaConta));


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil == china) {
    console.log('igual')
} else {
    console.log('desigual')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Verifique se a sua altura é maior do que um amigo
var altura = 1.66;
var alturaAmigo = 1.70;

if (altura == alturaAmigo) {
    console.log('Temos a esma altura')
} else if (altura > alturaAmigo) {
    console.log('sou mais alta')
} else if (altura < alturaAmigo) {
    console.log('meu amigo(a) é mais alto')
}

// etc
var condicional = (5 - 10) && (5 + 5)
if (condicional) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}

if ((5 >= 5) || (3 <= 6) && (5 > 8)) {
    console.log(true)
} else {
    console.log(false)
}