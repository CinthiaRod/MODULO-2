//Ejercicio: Creación de un Chat Simple en TCP:
//Objetivo: Crear un servidor y un cliente TCP que se comuniquen entre sí. 
const net = require ('net');
const server = net.createServer((socket) => { //Creamos el servidor
    console.log('Un nuevo cliente se ha conectado');

    server.on('connection', (socket) => { //Debe manejar el evento connection para aceptar nuevas conexiones de clientes.
        console.log('Un nuevo cliente se ha conectado:', socket.remoteAddress, ":", socket.remotePort);// Dirección y puerto remoto del que se conecta el cliente
        });
    socket.on('data', (data) => { //Debe manejar el evento data para recibir y mostrar mensajes de los clientes
        console.log('Mensaje del cliente: ',  socket.remoteAddress,  ':',  socket.remotePort, ':' ,  data.toString());
        socket.write('Mensaje recibido'); //el servidor debe responder a cada mensaje con una confirmación que diga "Mensaje recibido".
        });

    socket.on('close', () => { // Debe manejar el evento close para saber cuándo un cliente se desconecta.
        console.log('El cliente se ha desconectado:', socket.remoteAddress, ':', socket.remotePort);
        });

    socket.on('error', (err) => { //Debe manejar el evento error para mostrar cualquier error que ocurra.
        console.log('Error:', err.message);
        });
});

//El servidor debe escuchar en el puerto 5000.
const port = 5000; 
server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});