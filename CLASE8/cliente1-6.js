//EJERCITACION:
//Ejercicio 1: Conectar y enviar un mensaje al servidor 
//Crea un cliente TCP que:
const net = require ('net');
const PORT = 5000;
const HOST = 'localHost'

//1.Se conecte a un servidor en localhost:5000.
const client = net.createConnection({port: PORT, host:HOST},() =>{
    console.log('Conectando con el servidor\n');

//2.Cuando la conexión se establezca, envíe el mensaje: "¡Hola, servidor!".
    client.write('¡Hola, servidor!')

//Ejercicio 2: Implementar un timeout en la conexión
//Modifica el cliente del Ejercicio 1 para que:
//1.Si después de 5 segundos no ha recibido una respuesta, cierre la conexión.
    client.setTimeout(5000,() =>{
//2.Muestre " Tiempo de espera agotado" en la consola antes de cerrar.
        console.log("Tiempo de espera agotado");
        client.end();
    });
    
//Ejercicio 3: Pausar y reanudar la recepción de datos
//Crea un cliente TCP que:
//1.Reciba mensajes continuamente del servidor.
//2.Al recibir el primer mensaje, pause la recepción durante 3 segundos.
setTimeout(() => {
    console.log('Pausando la recepcion de datos...');
    client.pause()

//3.Luego de los 3 segundos, reanude la recepción y siga mostrando los mensajes.
    setTimeout(() => {
        console.log('Reanudando la recepcion de datos...');
        client.resume()
        client.write('Se ha reanudado la recepción de datos de forma correcta')
        }, 3000)
    }, 3000)

//Ejercicio 4: Manejo de errores en la conexión
//Modifica el cliente para que:
//1.Si ocurre un error (como un servidor no disponible), lo detecte y lo muestre con " Error: [mensaje]".
    client.on('error', (err) => {
        console.error('Error:', err.message);
    })
//2.Si la conexión se cierra inesperadamente, muestre " Conexión cerrada inesperadamente".
    client.on('close', () => {
        console.console.log("Conexión cerrada inesperadamente");
    });

//Ejercicio 5: Detectar cuando el servidor cierra la conexión
//Crea un cliente que:
//1.Se conecte y envíe "¿Sigues ahí, servidor?".
client.write("¿Sigues ahí, servidor?", () =>{
//2.Cuando el servidor cierre la conexión, muestre " Servidor cerró la conexión".
    client.end("Servidor cerró la conexión");
    });

//Ejercicio 6: Cliente interactivo con la usuaria
//Crea un cliente donde la usuaria pueda escribir mensajes en la consola y enviarlos al servidor.
const readline = require ('readline');
const rl = readline.createInterface({ //Creamos la interfaz
    input: process.stdin, //Entrada
    output: process.stdout//Salida
});
    rl.question('Ingresa tu mensaje: ', (respuesta) =>{
//Después de cada mensaje, la usuaria puede escribir otro.
// Si escribe "salir", el cliente se desconecta.
        if(respuesta.toLocaleLowerCase() === 'salir'){
            client.end();
            console.log("Cliente desconcectado")
            rl.close()
         }else{
            console.log("Mensaje recibido:", respuesta)
            rl.question('ingresa el siguiente mensaje: ', (mensaje))
            client.write(mensaje)
         }
    });
});

