//Ejercicio 1: Creación y Manipulación de un Objeto JSON
//En este archivo, crea un objeto JSON que represente un libro. El objeto
//debe tener las siguientes propiedades: titulo, autor, año, genero (puede ser un array de géneros).
let libro = {
    "titulo": "Los cuatro acuerdos", 
    "autor": "Miguel Ruiz", 
    "anio": 1998, 
    "genero": ["Autoayuda", "Filosofía"]
};

//Instrucciones:
//• Muestra en la consola el título y el autor del libro.
console.log("El titulo del libro es", libro.titulo, "su autor es", libro.autor);

//• Actualiza el año del libro a un valor más reciente.
libro.anio = 2025;

//• Añade una nueva propiedad llamada páginas que indique el número de páginas del libro.
libro.paginas = 153

//• Muestra el objeto actualizado en la consola.
console.log(libro);
