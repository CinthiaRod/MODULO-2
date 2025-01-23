//Ejercicio 4: ¿Existe tu perfil?
//Consigna: Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json existe. 
const fs = require('fs');

//Pista: Usa fs.existsSync para verificar la existencia del archivo.
if (fs.existsSync('perfil.json')) {// Verificamos si el archivo perfil.json existe
    console.log("Ya existe tu perfil, revisa el archivo 'perfil.json'.");
} else {
    const perfilBasico = {// Si no existe, creamos un archivo con un perfil básico
        nombre: "Felipe",
        edad: 32,
        ciudadFavorita: "Miami"
    };
    fs.writeFile('perfil.json', JSON.stringify(perfilBasico, null, 2), (err) => {//Guardamos el perfil básico en el archivo
        if (err) {
            console.error("No se pudo crear el perfil básico:", err);
        } else {
            console.log("¡Perfil básico creado correctamente!");
        }
    });
}