//Actividad 8: Seguimiento de proyectos
//Consigna: Crea un programa para gestionar proyectos. El programa debe permitirte:
const fs = require('fs');

//Usa un archivo JSON para guardar la información de los proyectos
const filePath = './proyectos.json'

//Función para leer los proyectos
const leerProyectos = () => {
    if(!fs.existsSync(filePath)){

//Si el archivo no existe, comienza con un arreglo vacío.
            fs.writeFileSync(filePath, '[]');
        };
        const contenido = fs.readFileSync(filePath, 'utf-8');// leemos el archivo
    return JSON.parse(contenido); //Convertimos a un array de proyectos
    };

//1.Agregar un proyecto: Registrar un proyecto con su nombre y estado (pendiente o en progreso).
const escribirProyecto = (proyectos) => {
    fs.writeFileSync(filePath, JSON.stringify(proyectos, null, 2)); // Escribimos los proyectos en el archivo
};

const agregarProyecto = (nombre, estado) =>{
    const proyectos= leerProyectos();  // leemos proyectos existentes
    proyectos.push({id: proyectos.length + 1, nombre: nombre, estado: estado}); //Agregamos el proyecto
    escribirProyecto(proyectos); //Guardamos la lista actualizada
    console.log(`El nuevo proyecto pendiente es: ${nombre}`);
};


//2.Listar los proyectos: Mostrar todos los proyectos registrados.
const listaProyectos = () => {
    const proyectos =leerProyectos();// leemos los proyectos
    console.log("\nLista de proyectos");
    proyectos.forEach(proyecto =>{
        console.log(`${proyecto.id}. ${proyecto.nombre} - ${proyecto.estado}`); 
    });
};

//3.Actualizar el estado de un proyecto: Cambiar el estado de un proyecto a "finalizado" o "en progreso".
const actualizarEstado = (idProyecto, nuevoEstado) => {
    const proyectos = leerProyectos(); // Leemos los proyectos
    const proyecto = proyectos.find(P => P.id === idProyecto); // Buscamos el proyecto por ID
    if (proyecto) {
        proyecto.estado = nuevoEstado; // Actualizamos el estado
        escribirProyecto(proyectos); // Guardamos la lista actualizada
        console.log(`El proyecto ${proyecto.nombre} fue actualizado, nuevo estado: ${proyecto.estado}`);
    } else {
        console.log('Proyecto no encontrado');
    }
};

// EJEMPLOS
agregarProyecto('Escribir un libro', 'En progreso');
listaProyectos();
actualizarEstado(1, 'Finalizado');
listaProyectos();