//Ejercicio 6: Tu lista de metas
//Consigna: Es momento de planear tus metas.
//Crea un archivo llamado metas.json con una lista vacía al principio. 
const fs = require ('fs');
let metas = [];//Agregamos la lista vacia
metas=[ //Luego, agrega metas como: “Aprender Node.js” y “Viajar a Japón”. 
    {nombreMeta: "Aprender Node.js"},
    {nombreMeta: "Viajar a Japón"}
];

//Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la lista.
fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => { //Escribimos la información en el archivo
    if(err){
        console.error("Error al crear la lista de metas", err);
    }else{
        console.log('🔔Lista de metas creada🔔');
    }
});
