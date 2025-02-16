//Ejercicio 1: Sistema de Gestión de Libros
//Consigna:
//Vamos a implementar un sistema de gestión de libros donde el cliente pueda solicitar información sobre un libro específico a través de 
//su ID. El servidor procesará la solicitud, buscará el libro en una base de datos simulada (archivo JSON) 
// y devolverá la información al cliente.

const { getBookById } = require('../MODELS/BOOKMODELS'); //Importamos el modulo creado en la ruta dentro de la carpeta de MODELS
const { formatBookAnswer } = require('../VIEWS/BOOKVIEW'); //Importamos el modulo creado en la ruta dentro de la carpeta de VIEWS

const handleBookRequest = (bookId) => { //Función para manejar las solicitudes de los libros-respuesta
    const book = getBookById(bookId);
    return formatBookAnswer(book); //retorna la respuesta de acuerdo a la función creada en VIEWS
};

module.exports = { handleBookRequest }; //Exportamos el modulo-función creado