//En gestionEstudiantes.js:
//Importa el array desde estudiantes.js.
let estudiantes = require('./estudiantes.js');

//Muestra en la consola los nombres de todos los estudiantes.
    console.log("Los estudiantes son:", estudiantes);


//Calcula y muestra el promedio de notas de un estudiante específico.
let promedioNotas = notas => notas.reduce((a, b)=> a + b, 0) / notas.length;

//Declaramos una variable para definir el nombre del estudiante a buscar 
let nombreEstudiante = 'Ibrahim';

//Utilizamos el método .find() para buscar dentro del array de estudiantes el valor asignado a 
// variable anterior e incluimos una función para que esto sea estrictamente igual
const estudiante = estudiantes.find(e => e.nombre === nombreEstudiante);

//Obtenemos el promedio una vez realizada la busqueda, el resultado dependera si cumple con las condiciones
    if (estudiante){
    const promedio = promedioNotas(estudiante.notas)
    console.log("El promedio del estudiante", nombreEstudiante, "es:", promedio.toFixed(1));// el número uno es para la cantidad de decimales a mostrar
    }else{
    console.log("El estudiante no se encuentra en la lista");
        
    };

//Agrega un nuevo estudiante al array y 
estudiantes. push({nombre:"José", edad:13, curso: "Español", notas: [8, 7, 7, 9, 9]});

// muestra el array actualizado en formato JSON.
let estudiantesActualizado = JSON.stringify(estudiantes, null, 2)
console.log("Lista de estudiantes actualizada:", estudiantesActualizado);
