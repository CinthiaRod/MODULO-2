//Ejercicio 10: Invertir palabras
//Consigna:
//Crea una función que reciba una cadena de texto y devuelva otra cadena con las palabras en orden inverso.
let frase = "Aprender backend es divertido";
function fraseInvertida (texto){

    //•Usa el método split() para separar las palabras.
    const palabrasSeparadas = texto.split('');

    //•Usa el método reverse() para invertir el array.
     const invertirPalabra= palabrasSeparadas.reverse()

    //•Usa el método join() para unir las palabras en una nueva cadena.
    const nuevafrase=  invertirPalabra.join('');
return nuevafrase
};


console.log(`El resultado de invertir las palabras de la frase "${frase}" es:`, fraseInvertida(frase));

