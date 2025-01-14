//Ejercicio 4: Contando vocales 
//Consigna:
//Crea una función que reciba una cadena de texto y devuelva cuántas vocales contiene.
let frase = "¡Me encanta back!";
function vocalesDeLaFrase(texto){
let contador= 0;

//•Considera vocales mayúsculas y minúsculas (a, e, i, o, u).
const vocales = "aeiouAEIOU"

//•Usa un bucle for y condicionales.
    for(let i =0; i <frase.length; i++){
        
        //Validamos en la condición si la frase tiene vocales al contar en cada vuelta 
        // utilizando el metodo .includes()
        if (vocales.includes(texto[i])){
            contador++;
        };
    };
return contador 
};

//Imprimimos el resultado
console.log("La cantidad de vocales en la frase es:",vocalesDeLaFrase(frase));
