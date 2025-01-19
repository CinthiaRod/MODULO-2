//Actividad 4: Control de inventario
//Consigna: Crea un programa para llevar el control de un inventario. El programa debe permitirte:
const { log } = require('console');
const fs = require ('fs');
const filePath = './inventario.json'

//Funcion para leer el inventario
const leerInventario = () =>{
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]');//Agregamos el array vacio
    };
    const contenido = fs.readFileSync(filePath, 'utf-8');//leemos el archivo
    return JSON.parse(contenido)
};

//1.Agregar un producto: Registrar un producto con su nombre y cantidad disponible.
 const escribirInventario = (productos) =>{
    fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));
 };
const agregarProductos = (nombreProducto, cantidadDisponible) => {
    const productos = leerInventario();
    productos.push({id: productos.length +1, nombre: nombreProducto, cantidad: cantidadDisponible});
    escribirInventario(productos);
    console.log(`Se agrego el producto ${nombreProducto}, la cantidad disponible es: ${cantidadDisponible}`);
     };

//2.Listar los productos: Mostrar todos los productos registrados.
const listaInventario = () => {
    const productos = leerInventario();
    console.log("\nLista de productos en inventaro es:");
    productos.forEach(productos =>{
        console.log(`${productos.id}. ${productos.nombre} - ${productos.cantidad}`);
    });
};

//3.Actualizar la cantidad de un producto: Modificar la cantidad de un producto en el inventario.
const actualizarCantidad = (idProducto, nuevaCantidad) =>{
    const productos =leerInventario();// leemos el inventario
    const producto = productos.find(P => P.id ===idProducto); //buscamos el producto por su número de id
    if (producto){
        producto.cantidad =parseInt (nuevaCantidad); //actualizamos la temporada
        escribirInventario(productos);
        console.log(`\nLa cantidad del producto ${producto.nombre} fue actualizada, nueva cantidad disponible ${producto.cantidad}\n`);
    }else{
        console.log('Producto no encontrado en la lista de inventario');  
    };
 };

 //Ejemplo
 agregarProductos('Café', 3)
 listaInventario();
actualizarCantidad(1, 2)
listaInventario();
