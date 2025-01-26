//Ejercicio 1: ¡Personaliza tu saludo con Node.js!
//Consigna: En este ejercicio, crearás un programa que salude al usuario. 
//Indicaciones:
const { log } = require('console');
const readline = require ('readline');

//Usa el paquete dotenv para cargar las variables de entorno desde un archivo .env.
require('dotenv').config();

//Configura un saludo predeterminado en el archivo .env con la clave GREETING.
//1.Una variable de entorno llamada GREETING que define el tipo de saludo (por ejemplo, "Hola", "Bienvenido" o "¡Buenos días!").
//Si no se proporciona un saludo en las variables de entorno o un nombre en la línea de comandos, el programa usará valores predeterminados.
const defaultGreeting = process.env.GREETING || "Hello"

//2.El nombre del usuario, que se obtendrá como argumento desde la línea de comandos.
//Si el usuario no proporciona un nombre, el programa debe usar "Invitado" como nombre por defecto.
const argument = process.argv. slice (2)
const userName = argument[0] || "invitado"

//Ejecuta el programa desde la terminal y verifica los diferentes resultados al cambiar las variables de entorno y los argumentos.
console.log(defaultGreeting, userName);

//Ejercicio 2: Descubre tu entorno de trabajo
//Requisitos del programa:
//Debe mostrar la plataforma del sistema operativo (Linux, macOS o Windows).
//Debe mostrar el directorio actual desde donde se ejecuta el programa.
//Usa los métodos process.platform y process.cwd() para obtener esta información.
console.log("Información sobre el sistema de ejecución del programa:");
console.log("La platafora del sistema operativo es:", process.platform);//Imprimimos información sobre la plataforma
console.log("El directorio actual es:", process.cwd())//imprimimos el directorio actual
