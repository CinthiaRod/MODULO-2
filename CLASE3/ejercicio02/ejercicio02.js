//Actividad 2: Seguimiento de series de televisión
//Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa que permita:
const { log } = require('console');
const fs = require('fs');
const filePath = './series.json';

//Función para leer la información del archivo JSON
const leerSeries = () => {

    //Pistas:
//•Usa un archivo JSON para almacenar la información de las series.
//•Si el archivo no existe, comienza con un arreglo vacío.
    //Si el archivo no existe, creamos un archivo vacio con un array
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');
    };
    const contenido = fs.readFileSync(filePath, 'utf-8');// leemos el archivo
return JSON.parse(contenido); //Convertimos a un array de libros
};
//1.Registrar una serie: Se debe registrar una serie con su nombre y la cantidad de temporadas.
const escribirSerie = (series) => {
    fs.writeFileSync(filePath, JSON.stringify(series, null, 2)); // Escribimos las series en el archivo
};

const agregarSerie = (nombreSerie, temporadas) =>{
    const series= leerSeries();  // leemos series existentes
    series.push({id: series.length + 1, nombre: nombreSerie, temporada: temporadas}); //Agregamos la nueva serie
    escribirSerie(series); //Guardamos la lista actualizada
    console.log(`La serie registrada es:  "${nombreSerie}" y tiene ${temporadas} temporadas.`);
};
//2.Listar las series: Muestra todas las series registradas.
const listaSeries = () => {
    const series =leerSeries();// leemos las series
    console.log("\nLista series favoritas:");
    series.forEach(serie =>{
        console.log(`${serie.id}. ${serie.nombre} - ${serie.temporada} temporadas`);
        
    });
};

//3.Actualizar las temporadas de una serie: Permite actualizar la cantidad de temporadas de una serie.
 const actualizarSerie = (idSerie, nuevaTemporada) =>{
    const series =leerSeries();// leemos las series
    const serie = series.find(Se => Se.id ===idSerie); //buscamos la serie por su número de id
    if (serie){
        serie.temporada =parseInt (nuevaTemporada); //actualizamos la temporada
        escribirSerie(series);
        console.log(`\nLa serie ${serie.nombre} fue actualizada, nueva temporada ${serie.temporada}\n`);
    }else{
        console.log('Serie no encontrada en la lista');  
    };
 };

//Ejemplos
agregarSerie("Supernatural", 14);
listaSeries();
actualizarSerie(1, 15)
listaSeries();


