//Pide un número y muestra si es par o impar.

let valor = true

while(valor){

    let numero = Number(prompt("Dime un numero"));

    switch(true){
        case numero %2 == 0:
            alert("El numero es par");
            break;
        case numero %2 !== 0:
            alert("EL numero es impar");
            break;
    }

}

