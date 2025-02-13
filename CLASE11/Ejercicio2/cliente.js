//Ejercicio 2: Servidor TCP que Normaliza Rutas
//Objetivo: Crear un servidor TCP que normalice las rutas recibidas utilizando path.normalize 
// y envíe la ruta normalizada al cliente.
const net = require('net');

const client = net.createConnection({ port: 8081 }, () => {
    console.log('Conectado al servidor');

    client.write('./Users/../archivo.txt'); 
    client.write('Users/../documents.txt');    
});

client.on('data', (data) => {
    console.log('\nLa ruta normalizada es:', data.toString());
    client.end(); 
});

client.on('end', () => {
    console.log('\nDesconectado del servidor...');
});