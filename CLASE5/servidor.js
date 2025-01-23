//Ejercicio 1: Crear el servidor básico
//Objetivo: Configurar un servidor TCP que escuche en el puerto 5000.
//Guía paso a paso:
//Crea un archivo llamado servidor.js.
//Importa el módulo que te permite trabajar con servidores TCP (net).
const { Socket } = require('dgram');
const { createServer } = require('http');
const net = require ('net');

//Usa el método que crea un servidor
        //Ejercicio 2: Detectar conexiones de clientes
//Objetivo: Mostrar en la consola cuando un cliente se conecta al servidor.
//Dentro de esa función, agrega un mensaje en la consola que diga: "¡Un cliente se ha conectado!".
//erifica que el mensaje aparezca cuando el servidor recibe una conexión.
const clientesConectados= 0; //declara una variable llamada clientesConectados e inicialízala en 0.
const server = net.createServer((socket) => {
console.log("¡Un cliente se ha conectado!");
        clientesConectados++;//En la función que se ejecuta cuando un cliente se conecta, incrementa la variable clientesConectados.
        console.log("Un cliente se ha conectado. Clientes conectados:", clientesConectados); //Muestra un mensaje en la consola
        
    //Ejercicio 3: Recibir y mostrar datos del cliente
    //Objetivo: Mostrar en la consola cualquier mensaje que el cliente envíe al servidor.
    //Usa el evento data para detectar cuando el cliente envía datos.
        socket.on('data', (data) => {  // 2.En el callback del evento, convierte los datos recibidos (buffer) en texto usando .toString().
            const texto = data.toString();

    //Muestra el mensaje en la consola con un texto como: "Mensaje recibido del cliente: <mensaje>".
            console.log("Mensaje recibido del cliente:", texto);

     //Ejercicio 4: Responder al cliente
    //Objetivo: Enviar una respuesta al cliente después de recibir un mensaje.
        //Dentro del evento data, agrega una línea para enviar datos al cliente.
        //Usa el método que permite escribir datos en el socket.
        //Escribe un mensaje que diga: "¡Hola, cliente! Tu mensaje fue recibido correctamente." 
        // Verifica que el cliente reciba esta respuesta después de enviar un mensaje.
            socket.write("¡Hola, cliente! Tu mensaje fue recibido correctamente.");
           
            // Ejercicio 5: Detectar cuando el cliente se desconecta
            //Objetivo: Mostrar en la consola un mensaje cuando el cliente cierra la conexión.
            //Usa el evento end para detectar cuándo el cliente se desconecta.
            socket.on('end', () =>{
                //Dentro del callback del evento, agrega un mensaje en la consola que diga: "El cliente se ha desconectado."
               console.log("El cliente se ha desconectado.");
                clientesConectados--; //En el evento end, decrementa el valor de la variable clientesConectados.
                console.log("Un cliente se ha desconectado. Clientes conectados:", clientesConectados); //Muestra un mensaje
                
            });

        });
});

//Configura el servidor para que escuche en el puerto 5000.
//Pista: Usa el método que pone al servidor "a escuchar".
server.listen(5000,  () => {
//Agrega un mensaje en la consola para confirmar que el servidor está listo.
    console.log("Servidor conectado, escuchando el puerto 5000");
});
