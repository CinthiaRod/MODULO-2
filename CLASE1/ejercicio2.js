//Ejercicio 2: El menú del día 
//Consigna:
//Escribe una función que reciba un objeto con platos y precios, y 
function preciosMenu (menu){

    //•Usa un bucle for...in.
    let platillosBaratos=[];
    
    //Utilizamos un ciclo for y condiciones
        for(let plato in menu){
            if (menu[plato] < 20){
                platillosBaratos.push(plato);
            };
    };
    return platillosBaratos 
    };
    
    //•Usa objetos y arrays.
    let menu={
        "Pizza": 80,
        "Pasta": 19,
        "Dedos de queso": 10,
        "Pan de ajo": 8,
        "Lasaña": 40,
        "Canelones":15
    };
    
    //devuelva los platos cuyo precio sea menor a $20.
    console.log("Los platillos más baratos son: ", preciosMenu(menu));
    