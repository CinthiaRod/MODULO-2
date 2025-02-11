//DESAFÍO 3: Cliente con Timeout y Destrucción de Conexión
//Objetivo: Implementar un timeout que cierre la conexión si no recibe datos en 10 segundos.
const net = require('net');

//El cliente debe: 
//Conectarse y enviar un mensaje inicial. 
const client = net.createConnection({ port: 5000, host:'localHost'}, () => { //Conectarse al servidor
    console.log('Conectado al servidor');
    client.write('Hola servidor'); //Enviar un mensaje inicial
});

//Configurar un setTimeout() de 10 segundos para cerrar la conexión si no recibe datos. 
setTimeout(() => {
    console.log('Respuesta no recibida en 10 segundos. Destruyendo conexión...');
//Si no recibe datos en 10 segundos, usar client.destroy() y mostrar un mensaje en consola.
    client.destroy();
    console.log('¡Conexión destruida!');
}, 10000);

//Escuchar el evento 'data' y cancelar el timeout si recibe información. 

client.on('data', (data) => {
    console.log('📩 Datos recibidos:', data.toString());
    clearTimeout(timeout); // Se utiliza si se desea cancelar el tiempo de espera que ya se ha establecido antes de que se produzca 
});

//Manejo de errores
client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
});

