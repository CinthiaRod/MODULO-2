//Ejercicio 1: Servidor TCP que Valida Rutas
//Objetivo: Crear un servidor TCP que acepte comandos desde el cliente para validar si una ruta es absoluta o relativa,
// y responder con la información correspondiente.

const net = require ('net'); //Modulo 'net'
const path = require ('path'); //Modulo 'path'

const server = net.createServer((socket) => { //Creamos el servidor
    console.log('¡Un nuevo cliente se ha conectado!\n');
    socket.on('data', (data) => { //evento 'data' para recibir y mostrar mensajes de los clientes
        const inputPath = data.toString().trim(); //convertimos la información recibida
        const isAbsolute = path.isAbsolute(inputPath); // Validamos si la ruta es absoluta
        const answer = isAbsolute ? 'La ruta es absoluta\n' : 'La ruta es relativa\n'; //Utilizamos un operador condicional ternario '?', ':'
        socket.write(answer) //Enviamos respuesta al cliente con el metodo 'write'
        });
        socket.on ('end', () =>{ //Cerramos la conexión con el cliente con el evento 'end'
            console.log('\nCliente desconectado...');
        });
});

server.listen(8080, () => { // Escuchando el servidor 8080
    console.log('El servidor esta escuchando en el puerto 8080');
});
