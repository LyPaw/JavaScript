//El adivino: genera un número aleatorio entre 1 y 10 y pide al usuario que lo adivine. Repite la pregunta hasta que acierte e indica si cada intento es menor o mayor que el número secreto.

let numeroRandom = Number(Math.random() * 10).toFixed(2);
console.log(numeroRandom);
alert("Adivina el numero");

let estado = true;

while(estado){

    let respuesta = Number(prompt("Dime el valor"));

    switch(true){
        case respuesta > numeroRandom:
            alert("El numero que buscamos es menor");
            break;
        case respuesta < numeroRandom:
            alert("El numero que buscamos es mayor");
            break;
        case respuesta == numeroRandom:
            alert("Numero encontrado");
            estado = false;
    }
}
