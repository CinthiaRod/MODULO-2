//Ejercicio 3: Servidor de Mensajes Personalizados
//Consigna: Crea un servidor TCP que permita a los clientes enviar mensajes.
const net = require('net');
const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

//El servidor debe responder con un mensaje personalizado dependiendo del contenido del mensaje recibido:
socket.on('data', (data) => { //•Usa el evento data para recibir y procesar los mensajes del cliente.
    const message = data.toString().trim();

    if (message === 'Hola') {
        socket.write('¡Bienvenido!\n'); //•Si el cliente envía "Hola", el servidor debe responder "¡Bienvenido!"
    } else if (message === 'Adiós') { //•Si el cliente envía "Adiós", el servidor debe responder "¡Hasta luego!" y cerrar la conexión.
        socket.write('¡Hasta luego!\n');
        socket.end(); ///•Usa el método socket.end() para cerrar la conexión cuando el cliente envíe "Adiós".
    } else {
        socket.write("Mensaje recibido: ", message); //•Para cualquier otro mensaje, el servidor debe responder "Mensaje recibido: [mensaje del cliente]".
    }
    });
});
const port = 3000; 
server.listen(port, () => { //Indicamos el puerto que estamos escuchando
    console.log(`Servidor escuchando en el puerto ${port}`);
});
