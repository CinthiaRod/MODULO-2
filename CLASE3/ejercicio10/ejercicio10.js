//Actividad 10: Gestión de compras
//Consigna: Crea un programa que registre las compras realizadas. El programa debe permitirte:
const fs = require('fs');
//Usa un archivo JSON para guardar las compras
const filePath = './Compras.json'

//Función para leer las compras
const leerCompras = () => {
    if(!fs.existsSync(filePath)){

//Si el archivo no existe, comienza con un arreglo vacío.
            fs.writeFileSync(filePath, '[]');
        };
        const contenido = fs.readFileSync(filePath, 'utf-8');// leemos el archivo
    return JSON.parse(contenido); //Convertimos a un array de compras
    };

//1.Agregar una compra: Registrar una compra con su nombre y precio
const escribirCompra = (compras) => {
    fs.writeFileSync(filePath, JSON.stringify(compras, null, 2)); // Escribimos las compras en el archivo
};

const agregarCompra = (nombre, precio) =>{
    const compras= leerCompras();  // leemos compras existentes
    compras.push({id: compras.length + 1, nombre: nombre, precio: precio}); //Agregamos la compra
    escribirCompra(compras); //Guardamos la lista actualizada
    console.log(`Se agrega la compra de ${nombre}`);
};
//2.Listar las compras: Mostrar todas las compras registradas.
const listaCompras = () => {
    const compras =leerCompras();// leemos las compras existentes
    console.log("\nLista de compras:");
    compras.forEach(compra =>{
        console.log(`${compra.id}. ${compra.nombre} $ ${compra.precio}`); 
    });
};

//3.Eliminar una compra: Eliminar una compra de la lista.
const eliminarCompras = (idCompra) => {
    let compras = leerCompras(); // 
    compras = compras.filter(compra => compra.id !== idCompra); //Eliminar compra 
    escribirCompra(compras); // Guardamos la lista actualizada
    console.log(`\n¡Compra eliminada!`);
};

//EJEMPLOS
agregarCompra('Pantalon', 350);
agregarCompra('Blusa', 140);
listaCompras();
eliminarCompras(1);
listaCompras();