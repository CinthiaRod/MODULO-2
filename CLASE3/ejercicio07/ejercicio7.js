//Actividad 7: Control de tareas diarias
//Consigna: Crea un programa para gestionar tus tareas diarias. El programa debe permitirte:
const fs = require('fs');

//Usa un archivo JSON para guardar la información de las tareas
const filePath = './Tareas-Diarias.json'

//Función para leer las tareas diarias
const leerTareas = () => {
    if(!fs.existsSync(filePath)){

//Si el archivo no existe, comienza con un arreglo vacío.
            fs.writeFileSync(filePath, '[]');
        };
        const contenido = fs.readFileSync(filePath, 'utf-8');// leemos el archivo
    return JSON.parse(contenido); //Convertimos a un array de tareas
    };

//1.Agregar una tarea diaria: Registrar una nueva tarea con su descripción y estado.
const escribirTarea = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2)); // Escribimos las tareas diarias en el archivo
};

const agregarTarea = (descripcion, estado) =>{
    const tareas= leerTareas();  // leemos tareas existentes
    tareas.push({id: tareas.length + 1, descripcion: descripcion, estado: estado}); //Agregamos la tarea
    escribirTarea(tareas); //Guardamos la lista actualizada
    console.log(`La nueva tarea pendiente es: ${descripcion}`);
};

//2.Listar las tareas diarias: Mostrar todas las tareas con su estado.
const listaTareas = () => {
    const tareas =leerTareas();// leemos las tareas
    console.log("\nLista de tareas");
    tareas.forEach(tarea =>{
        console.log(`${tarea.id}. ${tarea.descripcion} - ${tarea.estado}`); 
    });
};

//3.Marcar una tarea como completada: Cambiar el estado de una tarea de "pendiente" a "completada".
const actualizarEstado= (idTarea) =>{
    const tareas =leerTareas();// leemos las tareas
    const tarea = tareas.find(T => T.id ===idTarea); //buscamos la tarea por su número de id
    if (tarea){
        tarea.estado = 'Completada'; //actualizamos el estado
        escribirTarea(tareas);
        console.log(`\nLa tarea "${tarea.descripcion}" fue actualizada, nuevo estado ${tarea.estado}\n`);
    }else{
        console.log('Tarea no encontrada en la lista');  
    };
 };


//EJEMPLOS
agregarTarea("Realizar los pagos al puerto", 'Pendiente');
listaTareas();
actualizarEstado(1)
listaTareas();