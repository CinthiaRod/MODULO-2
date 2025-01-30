//Ejercicio 2: Servidor con Timeout
//Consigna: Crea un servidor TCP que cierre automáticamente la conexión con un cliente si no recibe datos en un período de 10 segundos. 
// Si el cliente envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar el contador de tiempo.
const net = require ('net');
const server = net.createServer((socket) => {//Creamos el servidor
    console.log('Un cliente se ha conectado.');

//Requisitos:
//•Usa el método socket.setTimeout() para establecer un tiempo de espera.
    socket.setTimeout(10000);//Definimos los 10 segundos de timeout

//•Usa el evento timeout para cerrar la conexión si se alcanza el tiempo límite.
    socket.on('timeout', () => {
        console.log('Se hago el tiempo de espera, la conexión se cerrará');
        socket.end();
    });

//•Usa el evento data para reiniciar el contador de tiempo cada vez que se reciben datos
    socket.on('data', (data) => {
        console.log("Datos recibidos: ", data.toString());
    
        socket.setTimeout(10000); // Reiniciamos el timeout
    });
});
const port = 3000; 
server.listen(port, () => { //Indicamos el puerto que estamos escuchando
    console.log(`Servidor escuchando en el puerto ${port}`);
});