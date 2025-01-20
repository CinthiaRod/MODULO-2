//Actividad 3: Registro de tareas pendientes
//Consigna: Crea un programa para gestionar tus tareas pendientes. El programa debe permitirte:
const fs = require ('fs');

//Usa un archivo JSON para guardar las tareas.
const filePath = './Tareas.json'

//Función para leer las tareas
const leerTareas = () => {
    if(!fs.existsSync(filePath)){

//Si el archivo no existe, comienza con un arreglo vacío.
            fs.writeFileSync(filePath, '[]');
        };
        const contenido = fs.readFileSync(filePath, 'utf-8');// leemos el archivo
    return JSON.parse(contenido); //Convertimos a un array de tareas
    };

//1.Agregar una tarea: Registrar una tarea pendiente con su descripción.
const escribirTarea = (tareas) => {
    fs.writeFileSync(filePath, JSON.stringify(tareas, null, 2)); // Escribimos las tareas en el archivo
};

const agregarTarea = (nombreTarea) =>{
    const tareas= leerTareas();  // leemos tareas existentes
    tareas.push({id: tareas.length + 1, nombreTarea}); //Agregamos la nueva tarea
    escribirTarea(tareas); //Guardamos la lista actualizada
    console.log(`La tarea registrada es: ${nombreTarea}`);
};

//2.Listar las tareas: Mostrar todas las tareas registradas.
const listaTareas = () => {
    const tareas =leerTareas();// leemos las tareas
    console.log("\nLista tareas pendientes:");
    tareas.forEach(tarea =>{
        console.log(`${tarea.id}. ${tarea.nombreTarea}`); 
    });
};

//3.Eliminar una tarea: Eliminar una tarea de la lista.
const eliminarTarea = (idTarea) => {
    let tareas = leerTareas(); // 
    tareas = tareas.filter(tarea => tarea.id !== idTarea); //Eliminar una tarea se puede hacer por su ID.
    escribirTarea(tareas); // Guardamos la lista actualizada
    console.log(`\n¡Tarea eliminada!`);
};


//Ejemplo
agregarTarea('Limpiar la casa');
agregarTarea('Cocinar la comida');
listaTareas();
eliminarTarea(1);
listaTareas();
