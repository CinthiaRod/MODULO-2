//Ejercicio 9: Filtra tus metas completas
const fs = require('fs');

//Pista: Modifica las metas para que sean objetos con un atributo estado. 
// Usa el método filter para obtener las completas.
fs.readFile('metas.json', 'utf-8', (err, data) => { //leemos el archivo
  if (err) {
    console.error('Error al leer el archivo:', err);
  }
    const metas = JSON.parse(data) //Parseamos el archivo
    metas[0].estado = "Completa" //agregamos el estado al indice "0"
    metas[1].estado = "Pendiente"//agregamos el estado al indece "1"
fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => { //Guardamos la información en el archivo
            if (err) {
                console.error("No se pudo actualizar tus metas:", err);
            }
        });

// Filtra las metas que ya completaste y muéstralas en la consola.
      const metasCompletadas = metas.filter(meta => meta.estado === "Completa");
        console.log("Metas completadas:");
        metasCompletadas.forEach(meta => {
        console.log(`${meta.nombreMeta}✅`);//Imprimimos el resultado
      });
  });
