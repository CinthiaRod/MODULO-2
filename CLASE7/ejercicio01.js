//Ejercicio 1: Servidor de Eco
//Consigna: Crea un servidor TCP que actúe como un servidor de eco.
const net = require ('net');

// Cuando un cliente se conecte, el servidor debe recibir los datos enviados por el cliente 
// y devolverlos exactamente igual (hacer un "eco"). 
// Además, el servidor debe imprimir en la consola cada vez que un cliente se conecta, desconecta o envía datos.
const server = net.createServer((socket) => { //Creamos el servidor
    console.log('Un nuevo cliente se ha conectado');

//Usa el evento data para recibir datos del cliente.
    socket.on('data', (data) => {
        console.log("Datos recibidos: ", data.toString());
            socket.write(data); 
    });

//Usa los eventos end y close para manejar la desconexión del cliente.
    socket.on('end', () => {
        console.log('El cliente se ha desconectado');
    });

    socket.on('close', () => {
        console.log('Conexión cerrada');
    });
});    

//Usa el evento connection para detectar nuevas conexiones.
server.on('connection', (socket) => {
    console.log(`Se ha establecido una nueva conexión`);
});
const port = 3000; 
server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

