//Ejercicio 2: Servidor TCP con UUID v5 y JSON
//Objetivo:
//Crear un servidor TCP que responda con un objeto JSON que contenga un UUID v5 basado en un nombre fijo y un espacio de nombres.
//Pasos:
//1.Servidor TCP (server.js):
//Importar los módulos net y uuid.
const net = require('net');
const { v5: uuidv5 } = require('uuid');

//Creamos el servidor
const server = net.createServer((socket) => {
    console.log('¡Un nuevo cliente se ha conectado!\n');

    socket.on('data', (data) => {
        const name = "Cliente";
        const namespace = uuidv5.URL;
        const generatedUUID = uuidv5(name, namespace); 
   
//Enviar un objeto JSON con el UUID al cliente.
        const response = {
            uuid: generatedUUID
        };

        socket.write(JSON.stringify(response));
    });

    socket.on('end', () => { // Evento 'end'
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => { //Manejo de errores con el evento 'err'
        console.error('Error en el socket:', err);
    });
});

server.listen(8080, () => { //Escuchamos el puerto 8080
    console.log('Servidor escuchando en el puerto 8080');
});