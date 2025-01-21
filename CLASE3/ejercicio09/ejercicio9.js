//Actividad 9: Registro de eventos
//Consigna: Crea un programa para registrar eventos. El programa debe permitirte:
const fs = require('fs');
//Usa un archivo JSON para guardar la información de los eventos
const filePath = './Eventos.json'

//Función para leer los eventos
const leerEventos = () => {
    if(!fs.existsSync(filePath)){

//Si el archivo no existe, comienza con un arreglo vacío.
            fs.writeFileSync(filePath, '[]');
        };
        const contenido = fs.readFileSync(filePath, 'utf-8');// leemos el archivo
    return JSON.parse(contenido); //Convertimos a un array de eventos
    };

//1.Agregar un evento: Registrar un evento con nombre, fecha y lugar.
const escribirEventos = (eventos) => {
    fs.writeFileSync(filePath, JSON.stringify(eventos, null, 2)); // Escribimos los eventos en el archivo
};

const agregarEventos = (nombre, fecha, lugar) =>{
    const eventos= leerEventos();  // leemos eventos existentes
    eventos.push({id: eventos.length + 1, nombre: nombre, fecha: fecha, lugar: lugar}); //Agregamos el evento
    escribirEventos(eventos); //Guardamos la lista actualizada
    console.log(`El nuevo evento agregado es: ${nombre}`);
};
//2.Listar los eventos: Mostrar todos los eventos registrados.
const listaEventos = () => {
    const eventos =leerEventos();// leemos los eventos registrados
    console.log("\nLista de eventos registrados");
    eventos.forEach(evento =>{
        console.log(`${evento.id}. ${evento.nombre} - ${evento.fecha} / ${evento.lugar}`); 
    });
};

//3.Eliminar un evento: Eliminar un evento de la lista.
const eliminarEvento = (idEvento) => {
    let eventos = leerEventos(); // 
    eventos = eventos.filter(evento => evento.id !== idEvento); //Eliminar evento
    escribirEventos(eventos); // Guardamos la lista actualizada
    console.log(`\n¡Evento eliminado!`);
};

//EJEMPLOS
agregarEventos('Carnaval', '27-feb-25', 'Ensenada, México');
agregarEventos('Rocking Baja Festival', '18-mar-25', 'Ensenada, México');
listaEventos();
eliminarEvento(2);
listaEventos();