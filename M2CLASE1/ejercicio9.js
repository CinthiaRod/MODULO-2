//Ejercicio 9: Números únicos
//Consigna:
//Escribe una función que reciba un array de números y devuelva un nuevo array sin números repetidos.
let numeros =[1, 3, 4, 2, 3, 2, 5, 1];
function numerosSinRepetir (numeros){

//•Usa el objeto Set para eliminar duplicados.
let numerosUnicos = new Set(numeros);

//•Convierte el Set a un array usando el operador spread (...).
 numerosUnicos= [... numerosUnicos];
return numerosUnicos;
};

//Imprimimos el resultado
console.log("El array en orden sin números repetidos es: ",numerosSinRepetir(numeros));
