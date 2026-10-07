let total = 0;
let conjunto = [2,3,2,1,2,3,9,3,2,1,-2]

analizar(...conjunto)

function analizar(...numeros){

    for(let i = 0;i < numeros.length;i++){

        if(numeros.length === 0){
            "No has puesto valores, conjunto vacio"
        }

        if(Number.isFinite(numeros[i])){
           console.log(`Valor ${numeros[i]} es valido `)
        } else {
            alert("Valores no validos")
        }
    }

    mostraDatos("Suma : " , suma(...numeros));
    mostraDatos("Media : " , media(total,...numeros).toFixed(2));
    mostraDatos("Maximo : " , maximo(...numeros));
    mostraDatos("Minimo : " , minimo(...numeros));
}

function suma(...numeros){
    for(let i = 0;i < numeros.length;i++){
        total += numeros[i];
    }
    return total;
}

function media(total , ...numeros){
    return (total / numeros.length);
}

function maximo(...numeros){
    return (Math.max(...numeros))
}

function minimo(...numeros){
    return (Math.min(...numeros))
}

function mostraDatos(texto , funcion){
    alert(texto + funcion)
}