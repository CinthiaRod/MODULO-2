//Ejercicio 8: Servidor con Autenticación Simple
//Consigna: Crea un servidor TCP que requiera que los clientes se autentiquen antes de poder enviar mensajes. 
// El servidor debe solicitar un nombre de usuario y una contraseña. 
// Si las credenciales son correctas, el servidor debe permitir que el cliente envíe mensajes. Si no, debe cerrar la conexión.
//Requisitos:
const net = require('net'); //llamamos al modulo net

const server = net.createServer((socket) => { //creamos el servidor
    console.log("Un cliente se ha conectado");

    let auntenticacion = false; //Declaramos una variable como booleano

    socket.write("Ingrese su nombre de usuario:"); //Usa el método socket.write() para solicitar credenciales y enviar mensajes de éxito/error.

//Usa el evento data para recibir las credenciales y validarlas.
    socket.on('data', (data) => {
        if (!auntenticacion) {
        const entradaDatos = data.toString();
        if (entradaDatos === 'usuario: nombre') { 
            auntenticacion = true; 
            socket.write("Autenticación validada correctamente");
        } else {
            socket.write("Información incorrecta, cerrando la conexión...");
            socket.end();
        }
    } else {
        const mensaje = data.toString();
        socket.write("Mensaje recibido: ", mensaje);
    }
});

//Usa el método socket.end() para cerrar la conexión si las credenciales son incorrectas.
    socket.on('end', () => {
     console.log("El cliente se ha desconectado");
    });
});

const port = 3000; 
server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
