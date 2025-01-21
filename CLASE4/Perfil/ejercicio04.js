//Ejercicio 4: ¿Existe tu perfil?
//Consigna: Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json existe. 
const fs = require('fs');

// Si no existe, crea uno nuevo con un perfil básico.
//Pista: Usa fs.existsSync para verificar la existencia del archivo.
// Verificamos si el archivo perfil.json existe
if (fs.existsSync('perfil.json')) {
    console.log("Ya existe tu perfil, revisa el archivo 'perfil.json'.");
} else {
    // Si no existe, creamos un archivo con un perfil básico
    const perfilBasico = {
        nombre: "Felipe",
        edad: 32,
        ciudadFavorita: "Miami"
    };

    fs.writeFile('perfil.json', JSON.stringify(perfilBasico, null, 2), (err) => {
        if (err) {
            console.error("No se pudo crear el perfil básico:", err);
        } else {
            console.log("¡Perfil básico creado correctamente!");
        }
    });
}