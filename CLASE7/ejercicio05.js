//Ejercicio 5: Servidor con Contador de Conexiones
//Consigna: Crea un servidor TCP que lleve un contador de cuántos clientes se han conectado. 
// Cada vez que un nuevo cliente se conecta, el servidor debe enviarle un mensaje indicando cuántos clientes
// se han conectado hasta ese momento. Cuando un cliente se desconecta, el servidor debe reducir el contador.
const net = require ('net')
let count = 0;///Usa una variable global para mantener el contador de conexiones.
const server = net.createServer((socket) => { //creamos el servidor
    console.log(`Nuevo cliente conectado, el total de conexiones es: ${count}`);

//Usa el evento connection para incrementar el contador y enviar el mensaje al cliente.
server.on('connection', (socket) => {
    count++; // Incrementamos el contador.
    console.log(`Se ha establecido una nueva conexión`);
});

//Usa el evento close para reducir el contador cuando un cliente se desconecta.
socket.on('close', () => {
    count--; //Decrementamos el contador
    console.log('Conexión cerrada');
});
});

const port = 3000; 
server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
