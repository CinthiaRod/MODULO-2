//Actividad 1: Registro de libros favoritos
//Consigna: ¡Hola! Hoy serás una bibliotecaria digital. 
// Debes crear un programa que permita registrar libros favoritos en un archivo JSON.
// Implementa las siguientes funciones:
//1.Agregar un libro: Se debe agregar un libro a la lista de favoritos. Para esto, el libro tendrá solo un campo: su nombre.
//Llamamos el módulo Fs
const fs = require('fs');

//Llamamos al archivo JSON donde se guardará la información
const filePath = './libros.json';

//Función para leer la información del archivo JSON
const leerLibros = () => {
    //Si el archivo no existe, creamos un archivo vacio con un array
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    };
    const contenido = fs.readFileSync(filePath, 'utf-8');// leemos el archivo
return JSON.parse(contenido); //Convertimos a un array de libros
};

//Función para escribir los libros en el archivo
const escribirLibros = (libros) => {
    fs.writeFileSync(filePath, JSON.stringify(libros, null, 2)); // Escribimos los libros en el archivo
};

//Agregar un libro
const agregarLibro = (nombreLibro) =>{
    const libros = leerLibros();  // leemos libros existentes
    libros.push({id: libros.length + 1, nombre: nombreLibro}); //Agregamos el nuevo libro
    escribirLibros(libros); //Guardamos la lista actualizada
    console.log(`Libro agregado:  "${nombreLibro}"`);
};

//2.Listar los libros: Muestra todos los libros registrados.
const listaLibros = () => {
    const libros =leerLibros();// leemos los libros
    console.log("Lista de libros favoritos");
    libros.forEach(libro =>{
        console.log(`${libro.id}.${libro.nombre}`);
        
    });
};

//EJEMPLO DEL USO DE LAS FUNCIONES
agregarLibro('La Maestría del Amor');
listaLibros();