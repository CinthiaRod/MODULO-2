//Ejercicio 7: Filtrar palabras largas
//Consigna:
//Escribe una función que reciba un array de palabras y un número, y devuelva las palabras que tienen más caracteres que el número dado.
let palabras = ["BackEnd", "JavaScript", "Json", "Programación", "Paracutirimicuaro", "Cinthia"];

//•Usa una función flecha para simplificar el código.
let palabrasLargas = (palabras, numero) => {

//•Usa el método filter()., utilizamos .length para contar las letras de cada palabra
    return palabras.filter(palabra => palabra.length > numero);
  };

// Imprimimos el resultado
console.log("Las palabras más largas a 8 letras son: ", palabrasLargas(palabras, 8));
