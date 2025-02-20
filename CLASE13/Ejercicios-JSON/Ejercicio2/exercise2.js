//Objetivo: Leer datos de un archivo JSON, modificarlos y guardarlos nuevamente.
//Instrucciones:
// Lee el archivo data.json, modifica el campo age a un nuevo valor, y guarda el archivo modificado.

const fs = require('fs');
fs.readFile('data.json', 'utf8', (err, data) => { //Leemos el archivo
  if (err) { //Condición en caso de error al leer
    console.error('Error al leer el archivo:', err);
    return;
  };
    const jsonData = JSON.parse(data); //Parseamos la información
    jsonData.age = 48; //Modificamos el valor de "age"
    const updatedJsonData = JSON.stringify(jsonData, null, 2)
    fs.writeFile('data.json', updatedJsonData, 'utf8', (err) => { // guardamos la nueva información
      if (err) { //en caso  de algún error al intentar guardar la nueva modificación
        console.error('Error al guardar el archivo:', err);
        return;
      }

      console.log('Archivo data.json modificado correctamente');
    });
});