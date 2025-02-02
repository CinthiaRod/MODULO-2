//Ejercicio 9: Servidor de Transferencia de Archivos
//Consigna: Crea un servidor TCP que permita a los clientes enviar un archivo de texto al servidor.
//El servidor debe guardar el archivo en el sistema y notificar al cliente cuando la transferencia se haya completado. 
//Además, el servidor debe verificar que el archivo no exceda un tamaño máximo de 1 MB.
const net = require('net');//Llamamos al modulo net
const fs = require('fs');//llamamos al modulo fs

const server = net.createServer((socket) => { //Creamos el servidor
    console.log("Cliente conectado");
    let espacioArchivo= Buffer.alloc(0);// La función Buffer.alloc() crea un búfer un búfer de memoria con un tamaño determinado. Un búfer es un espacio de memoria temporal que se utiliza para almacenar datos binarios
    let medidaArchivo = 0; //Declaramos una variable para asignar el valor/medida del archivo

//Usa el evento data para recibir el archivo en trozos (chunks).
    socket.on('data', (data) => {
        espacioArchivo = Buffer.concat([espacioArchivo, data]);//la función Buffer.concat() sirve para unir/concatenar varios objetos de buffer en un solo objeto
        medidaArchivo += data.length; 

//Si el archivo excede 1 MB, cierra la conexión y notifica al cliente.
        if (medidaArchivo > 1048576) { // Es la conversión de 1 MB a bytes, para que sea detectado en el sistema binario de forma correcta al trabajar con el búfer
            socket.write("El archivo execede el tamaño permitido");
            socket.end();
            return;
        };

//Usa el método socket.write() para notificar al cliente sobre el progreso de la transferencia.
    socket.write("El total de bytes recibidos es: ", medidaArchivo);   
        });

//Usa el método fs.writeFile() para guardar el archivo en el servidor.
    socket.on('end', () => {
        if (medidaArchivo <= 1048576) {
            fs.writeFile('Archivo.txt', espacioArchivo, (err) => {
                if (err) {
                    console.error("Error al guardar el archivo", err);
                } else {
                    console.log("Se guardo el archivo correctamente");
                };
            });
        };
    });
});
server.listen(3000, () => { //Escuchando el servidor 3000
    console.log("Escuchando el puerto 3000");
});