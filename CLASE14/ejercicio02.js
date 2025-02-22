//Ejercicio 2: Menú Interactivo con readline-sync
//Crea un script de Node.js que muestre un menú de opciones usando readline-sync. 
const readlineSync = require ('readline-sync');

// El menú debe permitir al usuario elegir entre tres acciones: ver un mensaje de bienvenida,
// generar un hash de un texto, o salir.
const options = ['Mensaje de bienvenida', 'Generar un hash de un texto', 'Salir']
const menuOptions = readlineSync.keyInSelect(options, 'Selecciona una de las opciones indicadas:');
if(menuOptions === -1){
    console.log('No has seleccionado una opción valida');
}else{
    console.log(`Seleccionaste la opción: ${options[menuOptions]}`);
    
}
