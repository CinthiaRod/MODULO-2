//DESAFÍO 1: Cliente con Reconexión Automática
//Objetivo: Crear un cliente TCP que se conecte a un servidor,
// pero si la conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
// cliente debe: 
const net = require('net');


    const client = net.createConnection({ port: 5000, host:'localHost'}, () => { //Conectarse al servidor en el puerto 5000. 
        console.log('✅ Conectado al servidor');
        client.write('¡Hola, servidor!'); //Enviar un mensaje inicial: "¡Hola, servidor!".
    });

//Escuchar el evento 'close' y volver a conectarse tras 3 segundos. 
client.on('data', (data) => { //Para recibir información "data" del servidor
    console.log('Este es un mensaje del servidor:', data.toString());
});
client.on('close', () => { //Cerramos la conexión con 'close'
    console.log('Cerrando conexión, intente en 3 segundos...');
    client.setTimeout(3000, () => {
        console.log('Conectando nuevamente, espere un momento...');
        client.on('Connect', () => { //conectamos de nuevo con el evento 'Connect'
            console.log('¡Cliente conectado!');
        });
    });
});

// Escuchar y manejar 'error', mostrando el mensaje en consola.
client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
});


