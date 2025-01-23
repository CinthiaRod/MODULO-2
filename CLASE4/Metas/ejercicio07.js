//Ejercicio 7: Encuentra tu meta perdida
//Consigna: Revisa tu lista de metas en el archivo metas.json. 
const fs = require('fs');
//Revisa tu lista de metas en el archivo metas.json. 
fs.readFile('metas.json', 'utf-8', (err, data) => { //leemos el archivo
    if (err) {
        console.error("Error al leer el archivo:", err);
    };
    const metas = JSON.parse(data);//Parsemaos el archivo

 //Busca si una meta específica, como “Viajar a Japón”, ya está incluida. 
    const buscar = metas.find(meta => meta.nombreMeta === "Viajar a Japón");
    if (buscar) {
        console.log('La meta "Viajar a Japón" ya está en la lista.');
        //Si no, agrégala
    } else {
        metas.push("Viajar a Japón"); //Mandamos el dato en caso de no existir
        fs.writeFile('metas.json', JSON.stringify(metas), (err) => { //Guardamos la información
            if (err) {
                console.error("Error al escribir en el archivo:", err);
            } else {
                console.log('Meta agregada correctamente.');
            }
        });
    }
});