//Ejercicio 7: Cliente que destruye el socket al fallar
//Crea un cliente que:
//1.Se conecte al servidor.
const net = require ('net');
const PORT = 5000;
const HOST = 'localHost'
const client = net.createConnection({port: PORT, host:HOST},() =>{
    console.log('Conectando con el servidor\n');
    client.write('¡Hola, servidor!')
    client.on('error', (err) => {
        console.error('Error:', err.message);
//2.Si hay un error en la conexión, use client.destroy() y muestre " Conexión destruida".
        if (err){
            console.log(" Conexión destruida");
            client.destroy()

        }
    })

//Ejercicio 8: Cliente con unref/ref para control de procesos
//Crea un cliente que:
//1.Use client.unref() para permitir que Node.js termine si no hay otras tareas.
 setTimeout(() => {
        console.log('terminado conexión...');
        client.unref()
//2.Luego, después de 5 segundos, use client.ref() para evitar que el proceso termine.
        console.log('Cotinuando con el proceso...');
        client.ref();
        }, 5000)
});


