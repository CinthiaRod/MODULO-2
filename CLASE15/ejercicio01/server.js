const net = require ('net');
const fs = require ('fs');
const path = require ('path');

const rutaMensajes = path.join(__dirname, 'mensaje.json');
if(!fs.existsSync(rutaMensajes)){
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8');
}
const server= net.createServer((socket) => {
    console.log('Cliente conectado');
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        if (mensaje === '/historial'){
            const historial = fs.readFileSync(rutaMensajes, 'utf-8');
            socket.write(`Historial de mensajes: \n${historial}`);
        }else{
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8') || '[]');
            mensajes.push({fecha: new Date().toISOString(), mensaje});
            fs.writeFilesSync(rutaMensajes, JSON.stringify(mensajes, null, 2), 'utf-8');
            socket.write('Mensaje guardado correctamente')
        };
    });
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
})
 server.listen (3000, () =>{
    console.log('Escuchando el puerto 3000');
 });