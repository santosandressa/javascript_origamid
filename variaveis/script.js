// Variavéis
// Responsáveis por guardar dados na memória
// Inicia com a palavra var,let ou const

var nome = "Andressa";
var bias = "Bang Yongguk";
var possuiFaculdade = true;

console.log(`
    Nome: ${nome}
    Bias: ${bias}
    Possui Faculdade: ${possuiFaculdade}
`);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(`Total: ${totalPreco}`);

var sobrenome = 'Santos'
cidade = 'São Paulo'
    
console.log(sobrenome, cidade);

var semDefinir;
console.log(semDefinir);
    
// Hoisting - Variaveis e funções são "listadas" no topo do código,
// porém não são inicializadas com o valor atribuido a elas.
// Isso acontece com o var, mas não com o let.

console.log(comida);
var comida = 'Pizza'; // undefined
console.log(comida);

/*
    Mudar o valor atribuido a variavel
    É possível mudar os valores atribuidos a variaveis declaradas com var e let.
    Porém não é possível modificar valores de variaveis declaradas com const.
*/

var idade = 28;
idade = 29;

console.log(idade);

let preco2 = 50;
preco2 = 25;

console.log(preco2);

// const possuiFaculdade2 = true;
// possuiFaculdade2 = false; // erro

var time = 'Palmeiras';
time = 'Corinthians';

console.log(time);

// Exercícios

// Declarar uma variável com o seu nome
var nome = 'Andressa';
console.log(nome)

// Declarar uma variável com a sua idade
var idade = 28;
console.log(idade)

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var comidaFavorita;

// Atribuir valor a sua comida favorita
comidaFavorita = 'Gnocchi';

// Declarar 5 variáveis diferentes sem valores
var cep, rua, numero, bairro, cidade;  


