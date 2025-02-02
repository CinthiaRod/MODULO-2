//Ejercicio 10: Servidor con Historial de Mensajes
//Consigna: Crea un servidor TCP que almacene un historial de los últimos 10 mensajes enviados por los clientes. 
const net = require('net');//Llamamos al modulo net

const server = net.createServer((socket) => { // Creamos servidor
    console.log("Cliente conectado");

//Usa un array para almacenar el historial de mensajes.
let historialMensaje = []; //Declaramos una variable con un array vacio, en este guardaremos la información

//Cuando un nuevo cliente se conecte, el servidor debe enviarle el historial de mensajes. 
//Usa el método socket.write() para enviar el historial al cliente cuando se conecta.
if (historialMensaje.length > 0) {
        socket.write('\nHistorial de mensajes:\n');
        historialMensaje.forEach((mensaje, index) => {
        socket.write(`${index + 1}: ${mensaje}\n`);
            });
    }else{
         socket.write("No se encontraron mensajes en el historial");
};

//Usa el evento data para recibir mensajes y actualizar el historial.
socket.on('data', (data) => {
    const mensaje = data.toString();
    historialMensaje.push(mensaje);//Mandamos la información ingresada al array vacio

    //Los mensajes deben almacenarse en memoria y actualizarse cada vez que un cliente envía un nuevo mensaje.
    //Limita el historial a los últimos 10 mensajes.
    if (historialMensaje.length > 10) {
        historialMensaje.shift();// Cuando exceda a 10 se eliminará el primer mensaje (index 0)
    };
    socket.write(`Mensaje recibido: ${mensaje}\n`);
        });

    //Cerramos la conexión
    socket.on('end', () => {
        console.log("Cliente desconectado");
        });
    });

    server.listen(3000, () => { //Escuchando el servidor 3000
        console.log("Escuchando el puerto 3000");
 });
