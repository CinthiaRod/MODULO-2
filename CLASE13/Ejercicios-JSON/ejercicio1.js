//Ejercicio 1: Crear y Mostrar un Objeto JSON
//Objetivo: Crear un objeto JSON simple y mostrarlo en la consola.
//Instrucciones:
//2.Define un objeto JSON que represente a una persona (incluye campos como nombre, edad, y email).
const objetoJson = {
    nombre : "Cinthia",
    edad : 28,
    email : "Cinthiarb28@gmail.com" 
};
//3.Convierte el objeto JSON a una cadena y muéstralo en la consola.
const cadenaJson = JSON.stringify(objetoJson);
console.log("El objeto JSON convertido a una cadena es:", cadenaJson);