//Ejercicio 1: Sistema de Gestión de Libros
//Consigna:
//Vamos a implementar un sistema de gestión de libros donde el cliente pueda solicitar información sobre un libro específico a través de 
//su ID. El servidor procesará la solicitud, buscará el libro en una base de datos simulada (archivo JSON) 
// y devolverá la información al cliente.

const formatBookAnswer = (book) => { //Funcion para formatear la información del archivo JSON
    if (!book) { //Condición en caso de ser diferente a 'book'
        return JSON.stringify({ error: 'Libro no encontrado' }); //Convertimos la info de JavaScrtip a JSON
    }
    return JSON.stringify(book, null, 2); // Respuesta en caso de ser 'book', se agrega formato para mejor presentación
    
};

module.exports = { formatBookAnswer }; //Exportamos el modulo-función creado