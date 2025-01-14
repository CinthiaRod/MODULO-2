//Ejercicio 6: Calculadora de promedio
//Consigna:
//Escribe una función que reciba un array de números y devuelva el promedio.
let numeros = [8, 9, 10, 7, 6];
function calcularPromedio(numeros) {
    let suma = 0;

//•Usa un bucle for para sumar los números.
    for(let i=0 ; i < numeros.length; i++){
        //Sumamos los números del array
        suma += numeros[i];
    };

//•Divide la suma total entre la cantidad de elementos del array.
    return suma / numeros.length;
};

//Imprimimos el resultado
console.log("El promedio es: ",calcularPromedio(numeros));
