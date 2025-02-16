//Ejercicio 1: Sistema de Gestión de Libros
//Consigna:
//Vamos a implementar un sistema de gestión de libros donde el cliente pueda solicitar información sobre un libro específico a través de 
//su ID. El servidor procesará la solicitud, buscará el libro en una base de datos simulada (archivo JSON) 
// y devolverá la información al cliente.

const net = require('net'); //Importamos el modulo 'net'
const { handleBookRequest } = require('./CONTROLLERS/BOOKCONTROLLERS');

const PORT = 4000;
const server = net.createServer((socket) => { //Creamos el servidor
    console.log('¡Un nuevo cliente se ha conectado!\n');

    socket.on('data', (data) => {
        const bookId = data.toString().trim();
        console.log(`Solicitud recibida para el libro con número de ID: ${bookId}`);

        const answer = handleBookRequest(bookId);
        socket.write(answer);
        socket.end(); // Cerramos la conexción después de responder
    });

    socket.on('end', () => { //Utilizamos el evento end para cerrar la conexión
        console.log('\nCliente desconectado...');
    });

    socket.on('error', (err) => { //Utilizamos el evento 'Error' para el manejo de errores en el servidor
        console.error('Error en el servidor:', err);
    });
});

server.listen(4000, () => { //Escuchamos el puerto 4000
    console.log('Servidor escuchando en el puerto 4000');
});