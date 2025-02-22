//Ejercicio 1: Uso Básico de readline-sync
//Crea un script en Node.js que utilice el módulo readline-sync para 
const readline = require ('readline-sync');

// solicitar al usuario que ingrese su nombre y edad. 
const name = readline.question('Por favor ingrese su nombre: ');
const age = readline.questionInt('Ingrese su edad: ');

// Luego, muestra un mensaje de saludo personalizado que incluya el nombre y la edad del usuario.
console.log(`Hola, mucho gusto ${name}, tu edad es ${age} años.`);

