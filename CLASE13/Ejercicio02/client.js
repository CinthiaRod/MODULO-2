//2.Cliente TCP (client.js):
//Importar el módulo net.
const net = require('net');
const { v5: uuidv5 } = require('uuid');

//Conectar al servidor TCP, recibir el objeto JSON, parsearlo y mostrar el UUID en la consola.
const client = net.createConnection({ port: 8080}, () =>{
    const name = "Cliente";
    const namespace = uuidv5.URL;
    const generatedUUID = uuidv5(name, namespace); 
    console.log('Conectado al servidor..\n');
    console.log(`UUID V5: ${generatedUUID}`);

});

client.on('data', (data) => { //Evento 'data'
        const response = JSON.parse(data.toString()); // Parseamos la respuesta JSON
        console.log(response);
        client.end();
});
client.on('error', (err) => { //Utilizamos el evento 'error' para el manejo de los posibles errores
    console.log('Error:', err.message);
});

client.on('end', () => {
    console.log('\nDesconectando del servidor...');
});