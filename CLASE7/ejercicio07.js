//Ejercicio 7: Servidor de Chat Grupal
//Consigna: Crea un servidor TCP que permita a múltiples clientes conectarse y enviar mensajes. 
// Cada mensaje enviado por un cliente debe ser retransmitido a todos los demás clientes conectados. 
// El servidor debe notificar cuando un cliente se conecta o desconecta.
//Requisitos:
const net = require('net'); //llamamos al modulo net
const clientes = [];//Usa un array para almacenar las conexiones de los clientes.

const server = net.createServer((socket) => { //Creamos el servidor
    clientes.push(socket);//Agregamos los clientes al array vacio
    console.log("Un nuevo cliente se ha conectado");
    clientes.forEach(C => { //utilizamos forEach para separar cada impresión del nuevo cliente
        if (C !== socket) {
            C.write("Un nuevo usuario se ha conectado en el chat");//Usa el evento end para eliminar a un cliente del array cuando se desconecta.
        }
    });
    socket.on('data', (data) => { // Usa el evento data para recibir mensajes y retransmitirlos a todos los clientes.
        const mensaje = data.toString();
            clientes.forEach(cliente => {
            if (cliente !== socket) {
                cliente.write("Mensaje: ", mensaje);
            };
        });
    });

//Usa el evento end para eliminar a un cliente del array cuando se desconecta.
    socket.on('end', () => {
        clientes.splice(clientes.indexOf(socket), 1);
        console.log("Un cliente se ha desconectado");
        clientes.forEach(cliente => {
        cliente.write("Un usuario se desconecto del chat");
        });
    });
});

    server.listen(3000, () => { //Escuchando el servidor 3000
    console.log("Escuchando el puerto 3000");
});