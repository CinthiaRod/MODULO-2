//Cliente TCP (client.js):
//Importar el módulo net.
const net = require('net');
const {v4: uuidv4} = require ('uuid');
//Conectar al servidor TCP, recibir el UUID y mostrarlo en la consola.
const client = net.createConnection({ port: 5000}, () =>{
    const idv4 = uuidv4()
    console.log('Conectado al servidor..\n');
    console.log(`UUID V4(Aleatoria): ${idv4}`);

});

client.on ('data', (data) =>{ //Evento 'data' para recibir la respuesta
    console.log(data.toString()); //convertimos la información 'data' recibida
    client.end() //Cerramos la conexión después de recibir la información
});
client.on('error', (err) => { //Utilizamos el evento 'error' para el manejo de los posibles errores
    console.log('Error:', err.message);
});

client.on('end', () =>{ //Cerramos conexión y mandamos mensaje al servidor
    console.log('\nDesconectando del servidor...');
});
