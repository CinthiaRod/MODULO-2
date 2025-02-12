//Ejercicio 1: Servidor TCP que Valida Rutas
//Objetivo: Crear un servidor TCP que acepte comandos desde el cliente para validar si una ruta es absoluta o relativa,
// y responder con la información correspondiente.

const net = require('net') // Modulo 'net'
const client = net.createConnection({ port: 8080}, () =>{
    console.log('Conectado al servidor..\n');
    client.write('/home/Users/archivo.txt') //ruta absoluta
    client.write('archivo.txt') //ruta relativa
});

client.on ('data', (data) =>{ //Evento 'data' para recibir la respuesta
    console.log(data.toString()); //convertimos la información 'data' recibida
    client.end() //Cerramos la conexión después de recibir la información
});
client.on('error', (err) => { //Utilizamos el evento 'error' para el manejo de los posibles errores
    console.log('Error:', err.message);
});

client.on('end', () =>{ //Cerramos conexión y mandamos mensaje al servidor
    console.log('\nDesconectando del servidor...');
});
