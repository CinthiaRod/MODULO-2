//Ejercicio 3: Módulos y require
//1.Dentro de la carpeta clase2, crea un archivo llamado datos.js que contenga un objeto con información sobre un curso, 
// similar a los ejemplos anteriores.
//Instrucciones:
//• En datos.js, define un objeto que tenga información como nombreCurso, duracion, y temas (array de cadenas).
let curso ={
    nombreCurso: "Ciberseguridad",
    duracion: "6 meses",
    temas: ["Hacking ético", "Vulnerabilidad", "Ataques"]
};
//• Exporta este objeto para que pueda ser utilizado en otros archivos.
module.exports= curso;