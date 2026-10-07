let palabras = ["sol", "montaña", "río", "bosque", "mariposa", "luz", "montaña"];


console.log(contarVeces("sol"));
console.log(masdeCuatro(palabras));
buscarPosicion("bosque");

function contarVeces(palabra){

    let total = 0;

    for(let i = 0;i < palabras.length ; i++){
        if(palabras[i] === palabra){
            total++;
        }
    }

    return total;

}

function masdeCuatro(){

    let nuevoArray = [];

    for(let i = 0;i < palabras.length ; i++){
        let valor = palabras[i];
        const d = [...valor];

        if(d.length >= 4){
            nuevoArray[i] = valor;
            //nuevoArray.push(palabras[i])
        }
    }
    return nuevoArray;
}

function buscarPosicion(palabra){
    for(let i = 0;i < palabras.length ; i++){
        if(palabras[i] === palabra){
            const indice = i;
            console.log(i);
        } 
    }

    //return palabras.indexOf(palabra);
}