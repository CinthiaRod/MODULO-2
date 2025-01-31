//Ejercicio 6: Servidor de Comandos
//Consigna: Crea un servidor TCP que permita a los clientes enviar comandos simples.
//  Dependiendo del comando recibido, el servidor debe realizar una acción específica:
const net = require ('net');
const server = net.createServer((socket) => { //creamos el servidor
    console.log(`Nuevo cliente conectado`);

    socket.on('data', (data) => { //Usa el evento data para recibir y procesar los comandos.
        const comando = data.toString().trim(); // declaramos una variable para el ingreso de datos.

//Si el cliente envía "fecha", el servidor debe responder con la fecha y hora actual.
switch (comando) {
    case "fecha":
        socket.write(`La fecha y hora actual es: ${new Date().toLocaleString()}\n`); //Usa el método socket.write() para enviar respuestas, new Date()  crea un nuevo objeto de fecha, que representa la fecha y hora actual
        break;
//Si el cliente envía "ip", el servidor debe responder con la dirección IP del cliente.
    case "ip":
         socket.write("Tu IP es:", socket.remoteAddress); // utilizamos socket.remoteAdress para obter la dirección
         break;

//Si el cliente envía "salir", el servidor debe cerrar la conexión.
    case 'salir':
        socket.write('Cerrando la conexión');
        socket.end();//Usa el método socket.end() para cerrar la conexión cuando el cliente envíe "salir".
        break;

//Para cualquier otro comando, el servidor debe responder "Comando no reconocido".
    default:
    socket.write('Comando no reconocido');
    }
});

    socket.on('end', () => {
    console.log('Conexión cerrada');   //usamos el evento "end" para cerrar la conexión
    });
});

const port = 3000; 
server.listen(port, () => { //Declaramos el puerto que estamos escuchando
    console.log(`Servidor escuchando en el puerto ${port}`);
});
