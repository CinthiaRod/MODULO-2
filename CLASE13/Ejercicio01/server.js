//Ejercicio 1: Servidor TCP con UUID v4
//Objetivo:
//Crear un servidor TCP que asigne un UUID v4 único a cada conexión y envíe el UUID de vuelta al cliente.
//Pasos:
//1.Servidor TCP (server.js):
//Importar los módulos net y uuid.
const net = require ('net');
const {v4: uuidv4} = require ('uuid')

//Crear un servidor TCP que genere un UUID v4 para cada conexión y envíe el UUID al cliente.
const server = net.createServer((socket) => { //Creamos el servidor
    const idv4 = uuidv4()
    console.log('¡Un nuevo cliente se ha conectado!\n');
    console.log(`UUID V4(Aleatoria): ${idv4}`);

    socket.on('error', (err) => { //Utilizamos el evento 'Error' para el manejo de errores en el servidor
        console.error('Error en el servidor:', err);
    });
});

server.listen(5000, () => { //Escuchamos el puerto 5000
    console.log('Servidor escuchando en el puerto 5000');
});