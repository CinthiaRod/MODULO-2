//Ejercicio 1: Sistema de Gestión de Libros
//Consigna:
//Vamos a implementar un sistema de gestión de libros donde el cliente pueda solicitar información sobre un libro específico a través de 
//su ID. El servidor procesará la solicitud, buscará el libro en una base de datos simulada (archivo JSON) 
// y devolverá la información al cliente.

const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const requestBook = (bookId) => { 
    const client = net.createConnection({ port: 4000, host: 'localhost' }, () => { 
        console.log('Conectado al servidor..\n')
        console.log(`Solicitar información del libro con ID: ${bookId}`);
        client.write(bookId);
    });

    client.on('data', (data) => {
        console.log('La respuesta del servidor es:', data.toString());
        client.end(); // Cierra la conexión después de recibir la respuesta
    });
    client.on('error', (err) => { //Utilizamos el evento 'error' para el manejo de los posibles errores
        console.log('Error:', err.message);
        rl.close()
    });

    client.on('end', () =>{ //Cerramos conexión y mandamos mensaje al servidor
        console.log('\nDesconectando del servidor...');
    });
    
};

rl.question('Por favor ingrese el número de ID del libro que desea consultar: ', (bookId) => { //Solicitamos al usuario ingresar un dato
    requestBook(bookId);
});