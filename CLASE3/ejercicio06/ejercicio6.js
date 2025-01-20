//Actividad 6: Gestión de un diario personal
//Consigna: Crea un programa que te permita gestionar un diario personal. El programa debe permitirte:
const fs = require('fs');
//Usa un archivo JSON para guardar la informacipon del diario
const filePath = './Diario.json'

//Función para leer las entradas del diario
const leerDiario = () => {
    if(!fs.existsSync(filePath)){

//Si el archivo no existe, comienza con un arreglo vacío.
            fs.writeFileSync(filePath, '[]');
        };
        const contenido = fs.readFileSync(filePath, 'utf-8');// leemos el archivo
    return JSON.parse(contenido); //Convertimos a un array de contactos
    };

//1.Agregar una entrada al diario: Registrar una nueva entrada con la fecha y el texto.
const escribirDiario = (entradas) => {
    fs.writeFileSync(filePath, JSON.stringify(entradas, null, 2)); // Escribimos las entradas del diario en el archivo
};

const agregarEntrada = (fecha, texto) =>{
    const entradas= leerDiario();  // leemos entradas existentes
    entradas.push({id: entradas.length + 1, fecha: fecha, texto: texto}); //Agregamos la entrada
    escribirDiario(entradas); //Guardamos la lista actualizada
    console.log(`La nueva entrada se ingreso: ${fecha}`);
};
//2.Listar las entradas: Mostrar todas las entradas registradas.
const listaEntradas = () => {
    const entradas =leerDiario();// leemos las entradas al diario
    console.log("\nLista de entradas al diario");
    entradas.forEach(entrada =>{
        console.log(`${entrada.id}. ${entrada.fecha} - ${entrada.texto}`); 
    });
};

//3.Eliminar una entrada: Eliminar una entrada específica por su ID.
const eliminarEntrada = (idEntrada) => {
    let entradas = leerDiario(); // 
    entradas = entradas.filter(entrada => entrada.id !== idEntrada); //Eliminar entrada se puede hacer por su ID.
    escribirDiario(entradas); // Guardamos la lista actualizada
    console.log(`\n¡Entrada eliminada!`);
};

//EJEMPLOS
agregarEntrada('17-ene-25', 'Querido diario hoy avance a mis ejercicios de back');
agregarEntrada('19-ene-25', 'Querido diario hoy termine el ejercicio 6');
listaEntradas();
eliminarEntrada(1);
listaEntradas();