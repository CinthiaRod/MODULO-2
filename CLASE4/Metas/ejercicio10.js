//Ejercicio 10: ¡Haz un respaldo de tus metas!
//Consigna: Nunca está de más guardar una copia de seguridad. 
const { log } = require('console');
const fs = require('fs');

//Escribe un programa que copie el contenido de metas.json en un archivo llamado respaldo_metas.json.
//Pista: Usa el método fs.copyFile para copiar archivos de manera sencilla.
fs.copyFile('metas.json','respaldo_metas.json',(err) => {
    if (err) {
        console.error("Error al crear el respaldo del archivo 'metas.json': ", err);
    } else {
        console.log('Se creo un respaldo del archivo "metas.json"🔐');
    }
});
