//Ejercicio 2: Conversión de Objetos JavaScript a JSON
//2.Crea un objeto en JavaScript que represente a un estudiante con las siguientes propiedades: 
//nombre, edad, curso, notas (un array de números).
let estudiante={
    nombre: "Emma",
    edad: 7,
    curso: "Inglés",
    notas: [9, 10, 9, 8]
};

//Instrucciones:
//• Convierte este objeto a una cadena JSON usando JSON.stringify().
let objeto=JSON.stringify(estudiante);

//• Muestra la cadena JSON en la consola.
console.log("La cadena JSON es", objeto);


//• Luego, convierte la cadena JSON de nuevo a un objeto utilizando
//JSON.parse() y muestra el objeto en la consola.
let convertirCadena = JSON.parse(objeto);
console.log("La cadena JSON convertida a objeto es:", convertirCadena);
