//Ejercicio 3: Ordenando números
//Crea una función que reciba un array de números y devuelva un nuevo array con los números ordenados de menor a mayor.
//Consigna:
//•Usa el método sort().

//Creamos un array de números
let numeros= [5, 2, 9, 1, 7];

//Declaramos una función
function ordenarNumeros (numeros){

    //Declaramos un nuevo array utilizando el operador de propagación
    let numerosOrdenados=[...numeros];

    //utilizamos el metodo sort para ordenar los numeros
    numerosOrdenados.sort()

    //regresará el nuevo array 
    return numerosOrdenados
};

//Imprimimos el resultado
console.log("Los números en orden son: ", ordenarNumeros(numeros));
