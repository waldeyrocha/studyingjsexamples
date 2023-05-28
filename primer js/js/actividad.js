// actividad1
// let number1 = parseFloat(prompt("Digite o primeiro número")).toFixed(2);
// let number2 = parseFloat(prompt("Digite o segundo número")).toFixed(2);
// alert(`O primeiro é ${number1} e o segundo é ${number2}`);

// actividad2
// let a = 2;
// a = a *2;
// let x = 1 + a;
// console.log(a);
// console.log(x);

// actividad3
// let a = parseInt(prompt("Primer numero", 1));
// let b = parseInt(prompt("Primer numero", 2));
// alert(a + b);


// actividad4
// let apples = "2";
// let oranges = "3";
// alert( +apples + +oranges );

// actividad5
// let radio = prompt("Ingresa el radio del círculo:");
// radio = Number(radio);
// let longitud = 2 * Math.PI * radio;
// alert("La longitud de la circunferencia es: " + longitud.toFixed(2));

// actividad6
// let raizCuadrada = 256 ** (1/2);

// console.log(raizCuadrada);

// let raizCubica = 8 ** (1/3);

// console.log(raizCubica);

// actividad7
// let numero = 256;
// let raizCubica = Math.pow(numero, 1/3);

// console.log(raizCubica);

// actividad8
// let manzanas = "2";
// let peras = "3";

// alert( +manzanas + +peras );


// pedir que el usuario ingrese el valor de 3 productos y retornar a media de los valores dividos por 3

// let producto1 = prompt("Digite el valor del primero produto");
// let producto2 = prompt("Digite el valor del segundo produto");
// let producto3 = prompt("Digite el valor del tercero produto");

// let media = +producto1 + +producto2 + +producto3 / 3;

// alert(`A média dos valores é ${media.toFixed(2)}`);

// let hijaRecoge = false;

// if (hijaRecoge) {
//     console.log("La hija ha regogido la habitación");
//     alert(`La hija recibie 10€`);
// } else {
//     console.log("La hija no ha regogido la habitación");
//     alert(`La hija recibie 5€`);
// };

// let daughterRoom = prompt("¿La hija recogió la habitación?");
//  if (daughterRoom == "si") {
//      alert("La hija recibie 10€");
//  } else {
//       alert("La hija recibie 5€");
//   };  

// convertir un string a número y mostrar la cantidad de caracteres que tiene
// let word = "hola";
// console.log(word.length);

// convertir un número a string y mostrar la cantidad de caracteres que tiene
// let number = 1234;
// console.log(String(number).length);

// let edad = Number(prompt("¿Cuál es tu edad?"));

// if (edad >= 18) {
//     alert("Eres mayor de edad");
// } else {
//     alert("Eres menor de edad");
// };

// sustituir el punto por la coma
// let number = 345.6789;
// alert(number.toFixed(2).replace(".", ","));

// convertir un string a mayúsculas y a minúsculas
// let word = "Programar es muy divertido";  
// console.log(word.toUpperCase().toLowerCase());

// ejemplo utilizando .split() y .join()
// let word = "Programar es muy divertido";
// let wordArray = word.split(" ");
// let wordJoined = wordArray.join("_");
// alert(wordJoined.toUpperCase());

// si numero es mayor que 5 e no maximo 10 mostrar "apto" si no mostrar "no apto"

// let number = parseInt(prompt("Ingrese un número: "));

// if (number >= 5 && number <= 10) {

//   alert("Apto");

// } else if (isNaN(number)) {
  
//   alert("Digite un número")

// } else {

//   alert("No apto");

// };

// si numero es mayor que 5 e no maximo 10 mostrar "apto" si no mostrar "no apto" caso sea digitado una string mostrar digite un número

// let number = parseInt(prompt("Ingrese un número: "));
// if (number >= 5 && number <= 10) {
//   alert("Apto");
// } else if (isNaN(number)) {
//   alert("Digite un número");
// } else {
//   alert("No apto");
// };


// si numero es mayor que 5 ou 10 mostrar "apto" si no mostrar "no apto"

// let number = parseInt(prompt("Ingrese un número: "));
// if (number > 5 || number < 10) {
//   alert("Apto");
// } else {
//   alert("No apto");
// };

// Verificar si un texto tiene una palabra determinada

// let phrase = "La programación es muy divertida";
// console.log(phrase.includes("programación"));


// crear un array con constructor

// let myArray = new Array("a", "b", "c");
// console.log(myArray);

// contar elementos de un array

// let myArray = ["a", "b", "c"];
// console.log(myArray.length);

// Operador condicional ternario
// let numero1 = parseInt(prompt("Digite el primero número"));
// let numero2 = parseInt(prompt("Digite el segundo número"));


// alert(`${numero1 >= numero2 ? "El numero 1 es mayor" : "El numero 2 es mayor"}`);


// let edad = Number(prompt("¿Cuál es tu edad?"));
// alert(`${edad >=18 ? 

//   "Eres un adulto" 
//   : 

//   "Eres un niño"}`);

// let answer = prompt("¿Cuál es el nombre oficial de Javascript?");

// if (answer == "ECMASCRIPT") {
//   alert("¡Correcto!");
// } else {
//   alert(answer.toUpperCase() + " No lo sabes es: ECMASCRIPT");
// };


// alert(answer.toUpperCase == "ECMASCRIPT" ? "¡Correcto!" : " No lo sabes es: ECMASCRIPT");


  
// let accesoLegal = confirm("Eres mayor de edad");

// alert(accesoLegal == true ? 
  
//   "Puedes continuar" 

// : 

// "Lo sentimos, no puedes acceder legalmente a los contenidos");


// let var1 = parseFloat(prompt('Ingresa un número')).toFixed(2);
// let var2 = parseFloat(prompt('Ingresa otro número')).toFixed(2);

// alert(`La suma de los números es: ${parseFloat(var1) + parseFloat(var2)}`);


// let controlAcceso;
// let age = prompt("¿Cuál es tu edad?");

// alert(age >= 18 ? 

//   controlAcceso = "Acceso permitido" 
//   : 
//   controlAcceso = "Acceso denegado"
  
//   );

// let age = prompt("¿Cuál es tu edad?");
// let accessAllowed = (age >= 18) ? true : false;
// alert(accessAllowed);

// function someName(param1, param2){

   
//   var a = param1 + "love" + param2;
//   return a;
//   }
  

//   alert(someName("Me", "You"));

  // function para sumar dos números

  // function sumar() {
  //   let a = 2;
  //   let b = 3;
  //   return a + b;
  // }

  // alert(sumar());


  // function para crear media de dos números

  // function media() {
  //   let a = Number(prompt("Digite el primer número"));
  //   let b = Number(prompt("Digite el segundo número"));
  //   return (a + b) / 2;
  // }

  // alert(media());

  // function para que aplique el iva de 21% a un producto

  // function iva() {
  //   let a = Number(prompt("Digite el valor del producto"));
  //   return a * 1.21;
  // }

  // alert(iva());

 



// function iva() {
//   let producto = Number(prompt("pon el coste del producto"));
//   let productoConIVA = producto + producto * 1.21;

//   alert(`El valor de producto con IVA es: ${productoConIVA}`);
// }

// crea una funcion que se el usuario tenga 18 años me lleva a otra pagina por windows.location

// function mayorEdad() {
//   if (confirm("¿Eres mayor de edad?")) {
//     window.open("https://www.youtube.com");
//   }else{
//   window.open("https://www.youtube.com");
// };



// function nombre() {
//   let nombre = prompt("¿Cuál es el nombre oficial de Javascript?");
//   if (nombre == "JAVASCRIPT") {
//     window.open("https://www.elmundodelgato.com/");
//   } else {
//     window.open("https://www.mozilla.org/es-ES/");
//   }
// }

// ejemplo utilizando phrase.includes es case sensitive

// let phrase = "La programación es muy divertida";
// console.log(phrase.includes("programación"));

// ejemplo crear un array con constructor

// let myArray = new Array("a", "b", "c");
// console.log(myArray);

// crear una funcion potenciaCuadrada(num) que devuelva el numero al cuadrado de dos número con math.pow y tenga dos variables nro1 y nro2 con un prompt preguntando cual es el número que quiere elevar al cuadrado


// function potenciaCuadrada() {
  
//   Math.pow(nro1, nro2); 
//   return Math.pow(nro1, nro2);
// }

// let nro1 = Number(prompt("Digite el primer número"));
// let nro2 = Number(prompt("Digite el segundo número"));

// alert(`El resultado del numero ${nro1} elevado a ${nro2} es: ${potenciaCuadrada()}`);


// function calcularPotencia() {
//   let nro1 = Number(prompt("Digite el primer número"));
//   let nro2 = Number(prompt("Digite el segundo número"));

//   let resultado = Math.pow(nro1, nro2);

//   alert(`El resultado del numero ${nro1} elevado a ${nro2} es: ${resultado}`);
// }

// calcularPotencia();



// let items = [];

// for(let item = 0; item < 5; item++) {
//   let itemName = prompt("Digite el nombre del item" + (item + 1));
//   items[item] = itemName;
// }
//  alert(items);

// let items = [];

// crear un juego que tiene que adivinar un numero del 0 al 10

// let numero = Math.floor(Math.random() * 10) + 1;
// let intentos = 0;

// while (true) {
//   let adivinar = Number(prompt("Digite un numero del 1 al 10"));

//   if (adivinar == numero) {
//     alert("Adivinaste el numero");
//     break;
//   } else {
//     intentos++;
//     alert("No adivinaste el numero");
//   }
// }




// Media bimestre de um aluno
// let nomeAluno = prompt("Digite o nome do aluno");

// let nota1 = Number(prompt("Digite a nota 1 bimestre"));
// let nota2 = Number(prompt("Digite a nota 2 bimestre"));
// let nota3 = Number(prompt("Digite a nota 3 bimestre"));

// let media = (nota1 + nota2 + nota3) / 3;

// if (media > 6) {
//   alert(`O aluno ${nomeAluno} foi aprovado com a media ${media.toFixed(2)}`);
// }else{
//   alert(`O aluno ${nomeAluno} foi reprovado, mas pode se superar na prova de recuperacao`);


// Almacenamiento de valores con el operador de asignación

// let a = 5;
// let b = 10;
// let c = "I am a";

// a = a + 1;
// b = b + 5;
// c = c + " String!";
// console.log(a);
// console.log(b);
// console.log(c);


// crear una function utilizando throw try catch finally

// function myFunction() {
//   let message, x;
//   message = document.getElementById("p01");
//   message.innerHTML = "";

//   x = document.getElementById("demo").value;
//   try {
//     if (x == "") throw "empty";
//     if (isNaN(x)) throw "not a number";
//     x = Number(x);
//     if (x < 5) throw "too low";
//     if (x > 10) throw "too high";
//   } catch (err) {
//     message.innerHTML = "Input is " + err;
//   } finally {
//     document.getElementById("demo").value = "";
//   }

// }

// make a function using switch to return the day of the week

// function dayOfTheWeek() {
//   let day = prompt("What day is today?");
//   let text;

//   switch (day) {
//     case "Monday":
//       text = "Today is Monday";
//       break;
//     case "Tuesday":
//       text = "Today is Tuesday";
//       break;
//     case "Wednesday":
//       text = "Today is Wednesday";
//       break;
//     case "Thursday":
//       text = "Today is Thursday";
//       break;
//     case "Friday":
//       text = "Today is Friday";
//       break;
//     case "Saturday":
//       text = "Today is Saturday";
//       break;
//     case "Sunday":
//       text = "Today is Sunday";
//       break;
//     default:
//       text = "Looking forward to the Weekend";
//   }
//   document.getElementById("demo").innerHTML = text;
// }




// const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// alert(myStr);


// let numberOne = prompt("Digite el primer número");
// let numberTwo = prompt("Digite el segundo número");

// let resultado = Number(numberOne) + Number(numberTwo);

// alert(`El resultado de la suma es: ${resultado}`);


// let numerOne = prompt("Digite el primer número");
// let numerTwo = prompt("Digite el segundo número");

// numerOne = Number(numerOne);

// numerTwo = Number(numerTwo);

// const resultadoSuma = numerOne + numerTwo;

// const resultadoResta = numerOne - numerTwo;

// const resultadoMultiplicacion = numerOne * numerTwo;

// const resultadoDivision = numerOne / numerTwo;

// const resultadoModulo = numerOne % numerTwo;

// alert(`El resultado de la suma es: ${resultadoSuma} El resultado de la resta es: ${resultadoResta} El resultado de la multiplicación es: ${resultadoMultiplicacion} El resultado de la división es: ${resultadoDivision} El resultado del módulo es: ${resultadoModulo}`);




// crear una funcion que no prompt utilize touppercase

// function nombre() {
//   let nombre = prompt("¿Cuál es el nombre oficial de Javascript?").toUpperCase;


//   if (nombre === "JAVASCRIPT") {
//     window.open("https://www.elmundodelgato.com/");
//   } else {
//     window.open("https://www.mozilla.org/es-ES/");
//   }
// }

//Adivina el número del 1 al 10 

// let result = prompt("Adivina el número del 1 al 10");

// let number = Math.round(Math.random() * 10);

// let xAttempts = 1;

// while (Number(result) != number) {

//   result = prompt("Erro tente novamente");

//   xAttempts++;

// }

// alert(`Parabéns você acertou o número ${result} em ${xAttempts} tentativas`);

// Math.round(); //redondea al numero mas cercano
// Math.ceil(); //redondea al numero mayor
// Math.floor();    //redondea al numero menor
// Math.random();  //genera un numero aleatorio entre 0 y 1


// function suma() {
//   let nro1 = document.getElementById("radio").value
//   let nro2 = document.getElementById("radio2").value;

//   let resultado = Number(nro1) + Number(nro2);

//   document.getElementById("resultado").innerHTML = resultado;

//   alert(`El resultado de la suma es: ${resultado}`); 

// }



// function button() {
//   let confirmar = document.getElementById("mayor").innerHTML = "Suma realizada";
//   confirmar.classList.add("mayor");

 // utilizando DOM para mudar cor do botao 
// function botonConfirmacion() {

//   let confirmar = document.getElementById("boton");
//   confirmar.value = "mensaje enviado";
//   confirmar.classList.Add("confirmacion");
//   alert("mensaje enviado");
  
// }



// function esconder() {
//   let texto = document.getElementById("vermas");
//   texto.classList.toggle("vermas");
// }


// make a function that hidden a menu in html and show it when you click on a button

// function hiddenMenu() {
//   let menu = document.getElementById("drop");
//   menu.classList.toggle("menu");
// }

// function envioConfirmado() {
          
//     document.querySelector("div.confirmado").innerHTML = "<h1>Formulario enviado</h1><p>gracias!</p>";


// }


// let usuario;

// let lista = [];

// while (usuario != 3) {

//   usuario = Number(prompt(`Olá Usuario 

//   Digite 1 para adicionar um produto ou 
  
//   Digite 2 para mostrar
  
//   Digite 3 para sair`));

// switch (usuario) {
//   case 1:
//     let producto = prompt("Digite o produto");
//     lista.push(producto);
//     alert(`O produto ${producto} foi adicionado`);
//     break;

//   case 2:
//     if(lista.length == 0) {
//       alert("Não há produtos na lista");
//     }else{
//       alert(`Os produtos são: ${lista}`);
//     }
//     break;

//     case 3:
//       alert("Obrigado por utilizar nosso sistema");
//       break;
//   default:
//       alert("Opção inválida");
    
// }
// };


// while (usuario != 3) {

//   usuario = Number(prompt(`Olá Usuario 

//   Digite 1 para adicionar um produto ou 
  
//   Digite 2 para mostrar
  
//   Digite 3 para sair`));

//   if (usuario == 1) {
  
//     let producto = prompt("Digite o produto");
  
//     lista.push(producto);
  
//     alert(`O produto ${producto} foi adicionado`);
    
    
//   } else if (usuario == 2) {
  
//     if(lista.length == 0) {
//       alert("Não há produtos na lista");
//     }else{
//       alert(`Os produtos são: ${lista}`);
//     }
  
// }

// }

// if (usuario == 3) {
//   alert("Obrigado por usar nosso sistema");
// }


// const patientsList = [
//   {
//     firstName: 'Juan',
    
//     age: 28,
//     weight: 80,

//   },

//   {
//     firstName: 'Fran',
//     age: 30,
//     weight: 90,

//   },

// ];

// let patientsNames = [];

// for(let patient of patientsList){
//   patientsNames.push(patient.firstName);
//   patientsNames.push(patient.age);
//   patientsNames.push(patient.weight);

// }

// alert(`

// O nome primeiro e: ${patientsNames[0]} e a idade e: ${patientsNames[1]} e o peso e: ${patientsNames[2]} 

// O nome segundo e: ${patientsNames[3]} e a idade e: ${patientsNames[4]} e o peso e: ${patientsNames[5]}`);


// using if else ask a user for two numbers and calculate the sum, subtraction, multiplication division and module, and show the result in a alert

// let nro1 = Number(prompt("Digite o primeiro número"));
// let nro2 = Number(prompt("Digite o segundo número"));

// let sum = nro1 + nro2;
// let subtraction = nro1 - nro2;
// let multiplication = nro1 * nro2;
// let division = nro1 / nro2;
// let module = nro1 % nro2;

// if (sum % 2 == 0) {
//   alert(`A soma dos números é: ${sum} e é par`);


// } else {
//   alert(`A soma dos números é: ${sum} e é impar`);
// }

// if(nro1 == nro2) {
//   alert(`Os números são iguais`);

// } else {

//   alert(`Os números são diferentes`);

// }

// alert(`A soma dos números é: ${sum}
// A subtração dos números é: ${subtraction}
// A multiplicação dos números é: ${multiplication}
// A divisão dos números é: ${division}
// O resto dos números é: ${module}`);


// let students = [{
//   firstName: "Juan",
//   resultTest: 7,
//   resultTest2: 5,
// },
// {
//   firstName: "Fran",
//   resultTest: 15,
//   resultTest2: 10,
// }
// ];

// function mediaTest() {
// let student1Avg = (students[0].resultTest + students[0].resultTest2) / 2;
// let student2Avg = (students[1].resultTest + students[1].resultTest2) / 2;

// if (student1Avg >= 7) {
//   alert(`O aluno ${students[0].firstName} foi aprovado`);
// } else {
//   alert(`O aluno ${students[0].firstName} foi reprovado`);
// }

// if (student2Avg >= 7) {
//   alert(`O aluno ${students[1].firstName} foi aprovado`);
// } else {
//   alert(`O aluno ${students[1].firstName} foi reprovado`);
// }
// }

// mediaTest();

//funcion para crear area de un trapecio utilizando document.getElementById

function areaTrapecio() {

  let baseMayor = document.getElementById("radio").value;
  let baseMenor = document.getElementById("radio2").value;
  let altura = document.getElementById("radio3").value;

  let resultado = ((Number(baseMayor) + Number(baseMenor)) / 2) * Number(altura);

  document.getElementById("resultado").innerHTML = resultado;

  alert(`El resultado del area del trapecio es: ${resultado}`);

}



















