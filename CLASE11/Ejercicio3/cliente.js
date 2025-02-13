//Ejercicio 3: Servidor TCP que Obtiene Información de la Ruta
//Objetivo: Crear un servidor TCP que acepte una ruta y responda con la base, el directorio, y la extensión del archivo
// usando path.basename, path.dirname, y path.extname.
const net = require('net'); //Modulo 'net

const client = net.createConnection({ port: 8082 }, () => { //Conectamos con el servidor 
    console.log('Conectado al servidor..\n');
    client.write('/home/Users/Documents/archivo.txt'); 
});
client.on('data', (data) => { //Utilizamos evento 'data' 
    console.log('La información de la ruta es:\n', data.toString());
    client.end(); // Cerramos la conexión
}); 
client.on('error', (err) => { //Utilizamos el evento 'error' para el manejo de los posibles errores
    console.log('Error:', err.message);
});

client.on('end', () =>{ //Cerramos conexión y mandamos mensaje al servidor
    console.log('\nDesconectando del servidor...');
});
