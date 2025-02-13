//Ejercicio 3: Servidor TCP que Obtiene Información de la Ruta
//Objetivo: Crear un servidor TCP que acepte una ruta y responda con la base, el directorio, y la extensión del archivo
// usando path.basename, path.dirname, y path.extname.
const net = require('net'); // Modulo 'net'
const path = require('path'); //Modulo 'path'

const server = net.createServer((socket) => { //Creamos el servidor
    console.log('¡Un nuevo cliente se ha conectado!\n');

    socket.on('data', (data) => { //Utilizamos el evento 'data' para compartir información con el cliente
        const inputPath = data.toString().trim();
        const baseName = path.basename(inputPath); //Base del nombre del archivo
        const dirName = path.dirname(inputPath);  //Directorio donde se ubica el archivo
        const extName = path.extname(inputPath); // Nombre de la extensión del archivo
        const answer = `La base del nombre es: ${baseName}\n` +
            `El directorio del archivo es: ${dirName}\n` +
            `La extensión del archivo es: ${extName}`;
        socket.write(answer);
    });
    socket.on('end', () => { //Evento 'end' para cerrar la conexión con el cliente
        console.log('\nCliente desconectado...');
    });
});
server.listen(8082, () => { //Escuchamos el puerto 8082 
    console.log('Servidor escuchando en el puerto 8082');
});