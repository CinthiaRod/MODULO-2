//Ejercicio 1: Sistema de Gestión de Libros
//Consigna:
//Vamos a implementar un sistema de gestión de libros donde el cliente pueda solicitar información sobre un libro específico a través de 
//su ID. El servidor procesará la solicitud, buscará el libro en una base de datos simulada (archivo JSON) 
// y devolverá la información al cliente.

const fs = require ('fs') //IMPORTAMOS EL MODULO 'FS'
const path = require ('path') //IMPORTAMOS EL MODULO 'PATH'

const filePath = path.join(__dirname, './BOOKS.json');
const getBookById = (id) =>{
    try{
        const data = fs.readFileSync (filePath, 'utf-8'); //Leemos el archivo de la ruta indicada
        const books = JSON.parse(data);//Parseamos la información del archivo JSON
        return books.find(book => book.id === id) || null; //Filtramos la busqueda por el número de ID
    } catch(error){ //En caso de error se arrojará el siguiente mensaje
        console.error('Error al leer el archivo JSON:', error);
        return null;
    };
};

module.exports = {getBookById}; //Exportamos el modulo-función creado