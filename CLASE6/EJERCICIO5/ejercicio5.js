//Ejercicio 5: Convierte temperaturas como un profesional
//Consigna: Crea un programa interactivo que permita convertir temperaturas de grados Celsius a Fahrenheit.
//Requisitos del programa:
const readline = require ('readline');
//Usa una variable de entorno llamada WELCOME_MESSAGE para mostrar un mensaje inicial. 
// Si no se define, usa "¡Bienvenido al conversor de temperaturas!" por defecto.
require('dotenv').config();
const message = process.env.WELCOME_MESSAGE || "¡Bienvenido al conversor de temperaturas!"

//Usa el módulo readline para solicitar al usuario una temperatura en grados Celsius.
const rl = readline.createInterface({ //Creamos la interfaz
    input: process.stdin, //Entrada
    output: process.stdout//Salida
});
rl.question('Ingresa los grados Celsius: ', (respuesta) =>{
    const fahrenheit = (respuesta * 9/5) + 32; //Calcula la conversión a Fahrenheit usando la fórmula:
    console.log(`${respuesta} grados Celsius es igual a ${fahrenheit} grados Fahrenheit.`); //Muestra el resultado en la consola.
    rl.close();
});

//Despídete del usuario al final.
rl.on('close', () =>{
    console.log("\n¡Gracias por haber utilizado nuestro conversor!");  
});