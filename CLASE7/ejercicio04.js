//Ejercicio 4: Servidor con Manejo de Errores
//Consigna: Crea un servidor TCP que maneje errores de conexión de manera adecuada. 
const net = require('net');
const server = net.createServer((socket) => { //Creamos el servidor
    console.log('Un cliente se ha conectado');

// Si ocurre un error en la conexión con un cliente, el servidor debe imprimir un mensaje de error en la consola 
// y cerrar la conexión con ese cliente. Además, el servidor debe seguir funcionando y aceptando nuevas conexiones.
socket.on('error', (err) => {  //Usa el evento error para detectar errores en la conexión.
    console.error(`Error en la conexión: ${err.message}`);
    socket.destroy(); //Usa el método socket.destroy() para cerrar la conexión en caso de error.
});
});

//•Asegúrate de que el servidor siga escuchando nuevas conexiones después de manejar el error.
server.listen(3000, () => {
console.log('El servidor está escuchando el puerto 3000');
});



