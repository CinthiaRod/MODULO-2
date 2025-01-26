//Ejercicio 8: Contador de letras
//Consigna:
//Crea una función que reciba una cadena de texto y una letra, y devuelva cuántas veces aparece esa letra en la cadena.
let frase = "Estoy aprendiendo backend";
function buscandoUnaLetra (texto, letra){
    let contador = 0;

//•Haz que la búsqueda no distinga entre mayúsculas y minúsculas.
    texto = texto.toLowerCase(); //Convertimos la frase a minúsculas
    letra = letra.toLowerCase(); //Convertimos la letra de la busqueda a minúscula

//•Usa un bucle for y condicionales.
    for (let i=0; i <= texto.length; i++ ){
        if (texto[i] === letra){
            contador++
        };
    };
    return contador
};

//Imprimimos el resultado
console.log("Dentro de la frase",'"', frase, '",', 'la letra "e" se repite:',  buscandoUnaLetra(frase, "e"), "veces.");
