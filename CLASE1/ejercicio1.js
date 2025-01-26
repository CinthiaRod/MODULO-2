//Ejercicio 1: ¿Quién puede entrar al parque?
//Tienes un parque de diversiones que permite la entrada a personas mayores de 12 años y menores de 60. 
//Consigna:


//•Usa un array como entrada de la función.
let edades = [10, 15, 35, 65, 12, 59, 18, 32, 28, 63];

// Escribe una función que reciba una lista de edades y devuelva cuántas personas pueden entrar al parque.
function entradaAlParque(edades){
    let contador= 0;

//•Usa un bucle for y condicionales.
    for(let i =1; i <edades.length; i++){
        if (edades[i] >= 12  &&  edades[i] <= 60){
            contador++;
           
        };
    };
return contador
};

//•Devuelve el número de personas que cumplen con los requisitos.
console.log(`El total de personas que cumplen con los requisitos para ingresar al parque son: ${entradaAlParque(edades)}`);
