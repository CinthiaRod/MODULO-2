//Ejercicio 8: Cuenta tus metas
//Consigna: ¿Sabes cuántas metas has establecido? 
const fs = require('fs');

// Escribe un programa que lea tu archivo metas.json y cuente cuántas metas tienes actualmente.
  fs.readFile('metas.json', 'utf-8', (err, data) => { //leemos el archivo
    if (err) {
      console.error('Error al leer la información del archivo:', err);
    }
      const metas = JSON.parse(data);//Parseamos el arcchivo

//Pista: Usa length para obtener la cantidad de elementos en la lista.
      console.log(`🔺Hay un total de ${metas.length} metas dentro de la lista 🔻`);
  });
