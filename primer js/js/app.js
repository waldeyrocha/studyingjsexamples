
// var nombre = prompt("Ingresa tu nombre:");
// var edad = prompt("Ingresa tu edad:");

// console.log("Hello World!!!");

// alert("Tu nombre es " + nombre + " y tu edad es " + edad + " años.");
// alert("Hello World");

let carro = 'Gol';

console.log(carro);

let anoFabricao = 2021;
console.log(anoFabricao);

// objeto
let paisB = [ 
  {
  nome: 'Francia',
},

{
  nome: 'Brasil',
}


];

console.log(paisB[1]);

// tipo variavel

// console.log(typeof pais);

let carroF = 'Fusca';
let ano = 1967;

console.log("O carro com nome " + carro + " foi fabricado no ano de "+ ano);

// template string concatenar 

let carroFa = 'Fusca';
let anoo = 1967;

console.log(`Primeiro carro: ${carroFa} e ano do carro: ${anoo}`);


// numeros e operadores

let anoNascimento = 1991;

// numero decimal com .
let pi = 3.14; 

// not a number

let numero = 10;

let medida = 'litros';

let qtdCombustivel = numero + medida;

let resultado = `${numero / 2} litros`;

console.log(resultado);

// orden de operacao primeiro divisao e multiplicacao e depois soma e subtracao
// se tem divisao e multiplicao linha da esquerda para direita

let resultadoM = (10 - 3) * 6;

console.log(resultadoM);

// operador urinario

let incrementar = 10;

console.log(incrementar++); //nao sera incrementado na hora
console.log(incrementar);
console.log(++incrementar); //sera incrementado na hora

// condicional if else

let carroVendido = true;

if (carroVendido) {
  console.log("O carro foi vendido");
}

else{
  console.log("O carro nao foi vendido");
}

// condicional if else if else

// let possuiMoto = true;
// let possuiCarro = false;

// if (possuiMoto) {

//   console.log("Ele tem uma moto");
  
// }else if(possuiCarro){
  
//   console.log("Ele tem um carro");

// } else{

//   console.log("Ele nao tem veiculo");

// }

// negacao valor contrario ao que e utilizar !

// operadores de comparacao

// if(20 > 5) true

// if(5 > 20) false

// if(20 <= 20) true

// if(20 >= 21) false

// == verifica so o numero 20 == '20' true

// === verifica o tipo por exemplo 20 number === '20' tipo string

// != diferente if(20 != 25) true

// if (20 !== '20') true diferente tipo string e numero

// operador logico && (And)

// true && true  true
// true && false false
// false && true false

// Operador lógico || or

// true||true; true
// true||false; true
// false||true; true
// false||false; true


// Diferença entre var e let
// let dentro do bloco
// var global hoisting
// function example() {
//   var a = 1;
//   let b = 2;

  // if (true) {
    // var a = 3; // a é definida novamente no mesmo escopo
    // let b = 4; // b é definida apenas dentro do bloco do if
    // console.log(a); // 3
    // console.log(b); // 4
  // }

  // console.log(a); // 3
  // console.log(b); // 2
// }

// example();

// multiplos argumentos na funcao

// console.log(name, age, isHuman)

// Object

// const person = {
//   name = 'Jhon',
//   age: 30,
//   weight: 88.6,
//   isAdmin: true
// }

// console.log(`${person.name} tem ${person.age} anos`)

// Array

// const animals = [

//   'Lion',
//   'Money',
//   'Cat',

// ]

// Acessar valores dentro do Array

// console.log(animals[0])

// let name, age, stars, isSubscribed;

// name = "Fran";

// age = 20;

// stars = 30.20;

// isSubscribed = true;


// students = [

//   student
// ]

// console.log(students);

// declaration - declaracao da funcao
// function createPhrases() {

//   console.log('Estudar é muito bom')
//   console.log('Estudar é muito bombom')
//   console.log('Estudar é muito ruim')

// }

//executar a funcao
// translate to spanish 

// createPhrases()

// function expression
// function anonynous

// parameteres number1 number2
// const sum = function(number1, number2){

//   console.log(number1 + number2)

// }

// sum(2, 3) //arguments
// sum(4, 5)

// let total = 0

// const sum = function(number1, number2){

//   let total = number1 + number2
//   return total

// }

// let number1 = 34
// let number2 = 25

// console.log(`A some è ${sum(number1, number2)}`)
// console.log(total)

// function (nombre) {
//   console.log(`Hello ${nombre}!`)
// }

// nombre('Fran', 'Jhon', 'Bob')

// let x = 5;
// let y = "5";
// console.log(x === y); // false
// En este ejemplo, x es un número entero, mientras que y es una cadena de caracteres. El operador === compara ambos valores y, 
// como son diferentes en tipo de dato, devuelve false. 
// Si se utilizara == en su lugar, la comparación sería verdadera ya que los valores son iguales en valor.

// Programa para ingresar un número y mostrar si es par o impar

let number = parseInt(prompt("Ingrese un número: "));

if (number >= 5) {

  alert("Apto");

} else {

  alert("No apto");

};




