//Ejercicio 9: Cliente que reconecta automáticamente
//Crea un cliente que:
const net = require ('net');
const PORT = 5000;
const HOST = 'localHost'
const client = net.createConnection({ port: PORT, host: HOST }, () => {
    console.log('Conectando con el servidor\n');

    client.on('error', (err) => {
        console.error('Error:', err.message);
//1.Si la conexión falla, reintente conectarse cada 3 segundos hasta que tenga éxito.
        if (err) {
            // Intenta reconectar después de 3 segundos
            setTimeout(() => {
                console.log('Tiempo de espera alcanzado, reconectando conexion...');
                client = net.createConnection({ port: PORT, host: HOST }); //Llama a net.createConnection() dentro del reintento.
            }, 3000);
        }
    });

//Ejercicio 10: Cliente que detecta pérdida de conexión
//1.Si deja de recibir datos durante 10 segundos, muestre " No hay datos del servidor" y cierre la conexión.
setTimeout(() => {
    console.log('No hay datos del servidor');
// Si pasan 10 segundos sin mensajes, cierra con client.end().    
    client.end()
client.write('Cerrando la conexión, no se encontraron datos durante el tiempo de espera.')
}, 10000)
});
        