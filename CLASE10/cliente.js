//Parte 2: Crear el Cliente TCP
//Descripción: Crea un cliente TCP en Node.js que se conecte al servidor en el puerto 5000. 
// El cliente debe permitir al usuario ingresar mensajes en la consola y enviar esos mensajes al servidor.
const net = require('net');
const readline = require('readline-sync');
//El cliente debe conectarse al servidor en el puerto 5000 y en la dirección localhost.
const client = net.createConnection({ port: 5000, host: 'localhost' });

    client.on('connect', () => { //Utilizamos el evento 'connect' al establecer la conexión
        console.log('Conectado con servidor');
        mensajeUsuario(); //Llamamos a la función
    });

    client.on('data', (data) => { // Utilizamos el evento 'data' para recibir información del servidor
        console.log('Respuesta del servidor: ' + data.toString());
        mensajeUsuario();
    });
    client.on('error', (err) => { //Utilizamos el evento 'error' para el manejo de los posibles errores
        console.log('Error:', err.message);
    });
 
//Declaramos la función para el mensaje del usuario al servidor
function mensajeUsuario() {
        const mensaje = readline.question('Por favor ingresa un mensaje para el servidor: ');
        if (mensaje.toLowerCase() === 'salir') { // Utilizamos una condición en caso de que el mensaje sea 'salir', en caso de que el usuario escriba de una forma distinta la palabra hacemos la conversion usando .toLowerCase()
            client.end(); // Cerramos la conexión
        } else {
            client.write(mensaje);
        };
    };