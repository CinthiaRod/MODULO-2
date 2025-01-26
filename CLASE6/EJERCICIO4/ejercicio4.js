//Ejercicio 4: Mensaje de despedida personalizado
//Consigna: Crea un programa interactivo que pregunte al usuario su nombre y lo use en un mensaje de despedida. 
//Requisitos del programa:
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Usa una variable de entorno llamada START_MESSAGE para configurar el saludo inicial.
require('dotenv').config();
const saludoInicial = process.env.START_MESSAGE || "¡Bienvenido!"
console.log(saludoInicial);

//Usa readline para preguntar el nombre del usuario.
rl.question('¿Cúal es tu nombre? ', (respuesta) =>{
    console.log(`Mucho gusto ${respuesta}, gracias por haber utilizado nuestro sistema.`);
    rl.close();
});

//Despídete del usuario con un mensaje personalizado
rl.on('close', () =>{
    console.log("¡Hasta luego!"); 
});