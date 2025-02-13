//Ejercicio 2: Servidor TCP que Normaliza Rutas
//Objetivo: Crear un servidor TCP que normalice las rutas recibidas utilizando path.normalize 
// y envíe la ruta normalizada al cliente.
const net = require('net');
const path = require('path');

const server = net.createServer((socket) => {
    console.log('\n¡Cliente conectado!\n');        

    socket.on('data', (data) => {
        const inputPath = data.toString().trim();
        const normalizedPath = path.normalize(inputPath);
        socket.write(normalizedPath);
    });

    socket.on('end', () => {
        console.log('Cliente desconectado...');
    });
});

server.listen(8081, () => {
    console.log('Servidor escuchando en el puerto 8081');
});