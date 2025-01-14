//Ejercicio 5: Generador de iniciales 🅰️
//Consigna:
//Escribe una función que reciba un nombre completo y devuelva las iniciales en mayúsculas.
function inicialesMayusculas(nombre) {


    //•Usa el método split() para dividir el nombre.
    const nombres = nombre.split(' ');
    let iniciales = '';

//•Usa un bucle for y métodos de string.
    for (let i = 0; i < nombres.length; i++) {


    //utilizamos el metodo de string .charArt(0) seleccionar y extraer el primer carácter de esa cadena
    //0 hace referencia al primer caracter de cada cadena y se utiliza .toUpperCase para cambiar a mayúsculas
    iniciales += nombres[i].charAt(0).toUpperCase();
};
return iniciales;
};

//Declaramos la variable con el nombre
let nombreCompleto = "cinthia rodriguez barriga";

//Imprimimos el resultado de la función
console.log("Las letras iniciales en mayúsculas son: ",inicialesMayusculas(nombreCompleto)); 
  