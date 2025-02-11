//DESAFÍO 2: Cliente con Pausa y Reanudación de Datos
//Objetivo: Simular un cliente que pausa la recepción de datos por 5 segundos y luego la reanuda.
const net = require('net');

//El cliente debe: 
//Conectarse al servidor y enviar un mensaje inicial.
const client = net.createConnection({ port: 5000, host:'localHost'}, () => { //Conectarse al servidor
    console.log('Conectado al servidor');
    client.write('Hola servidor'); //Enviar un mensaje inicial
});

//Escuchar el evento 'data' y mostrar los datos en consola.
client.on('data', (data) => { //Para recibir información "data" del servidor
    console.log('Este es un mensaje del servidor:', data.toString());
});

//Pausar la recepción de datos usando client.pause() a los 3 segundos.
setTimeout(() =>{
    console.log('Pausando la recepción de datos...');
    client.pause()
}, 3000);

//Reanudar la recepción de datos con client.resume() a los 8 segundos.
setTimeout(() =>{
    console.log('Reanudando la recepción de datos...');
    client.resume()
}, 8000);

//Finalizar la conexión tras 15 segundos.
setTimeout(() =>{
    console.log('Finalizando la conexión...');
    client.end()
}, 15000);

//Manejo de errores
client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
});