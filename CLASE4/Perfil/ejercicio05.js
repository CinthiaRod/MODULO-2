//Ejercicio 5: ¡Despídete de tu perfil!
//Consigna: ¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json. 
const fs = require('fs');
if (fs.existsSync('perfil.json')) {// Verifica que el archivo existe antes de intentar borrarlo.

//Pista: Usa fs.unlink para eliminar archivos
fs.unlink('perfil.json', (err) => {
    if (err) {
        console.error("No se elimino tu perfil", err);
    } else {
        console.log("Perfil eliminado correctamente");
    }
});
} else {
console.log("El archivo 'perfil.json' no existe");
}