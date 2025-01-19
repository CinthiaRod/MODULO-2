//Actividad 5: Registro de contactos
//Consigna: Crea un programa que permita registrar contactos con nombre, teléfono y correo electrónico. El programa debe permitirte:
const fs = require ('fs');

//Usa un archivo JSON para guardar las tareas.
const filePath = './Contactos.json'

//Función para leer los contactos
const leerContactos = () => {
    if(!fs.existsSync(filePath)){

//Si el archivo no existe, comienza con un arreglo vacío.
            fs.writeFileSync(filePath, '[]');
        };
        const contenido = fs.readFileSync(filePath, 'utf-8');// leemos el archivo
    return JSON.parse(contenido); //Convertimos a un array de contactos
    };

//1.Agregar un contacto: Registrar un nuevo contacto.
const escribirContacto = (contactos) => {
    fs.writeFileSync(filePath, JSON.stringify(contactos, null, 2)); // Escribimos los contactos en el archivo
};

const agregarContacto = (nombreContacto, telefono, correo) =>{
    const contactos= leerContactos();  // leemos contactos existentes
    contactos.push({id: contactos.length + 1, nombre: nombreContacto, telefono: telefono, correo: correo}); //Agregamos el nuevo contacto
    escribirContacto(contactos); //Guardamos la lista actualizada
    console.log(`Contacto registrado: ${nombreContacto}`);
};

//2.Listar los contactos: Mostrar todos los contactos registrados.
const listaContactos = () => {
    const contactos =leerContactos();// leemos los contactos
    console.log("\nLista contactos agregados:");
    contactos.forEach(contacto =>{
        console.log(`${contacto.id}. ${contacto.nombre}`); 
    });
};

//3.Eliminar un contacto: Eliminar un contacto de la lista.
const eliminarContacto = (idContacto) => {
    let contactos = leerContactos(); // 
    contactos = contactos.filter(contacto => contacto.id !== idContacto); //Eliminar un contacto se puede hacer por su ID.
    escribirContacto(contactos); // Guardamos la lista actualizada
    console.log(`\n¡Contacto eliminado!`);
};

//EJEMPLOS
agregarContacto('Emma', 6641234567, 'emma@mail.com');
agregarContacto('Jayden', 6647654321, 'jayden@mail.com');
listaContactos();
eliminarContacto(1);
listaContactos();