//Ejercicio 3: ¡Actualiza tu estilo!
//Consigna: ¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar tu perfil! 
const fs = require ('fs');

// Agrega un nuevo atributo hobby a tu perfil y guarda los cambios en el archivo perfil.json.
//Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a escribirlo.
fs.readFile('perfil.json', 'utf-8', (err, data) => {// Leemos el archivo 
    if (err) {
        console.error("No se pudo leer el archivo:", err);
    } else {
        const perfil = JSON.parse(data);   //Parseamos el contenido en un objeto
        perfil.hobby = "Escribir";// Agregamos un nuevo atributo        
        fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), (err) => {// Guardamos lo actualizado 
            if (err) {
                console.error("No se pudo actualizar tu perfil:", err);
            } else {
                console.log("¡Perfil actualizado!");
            }
        });
    }
});
