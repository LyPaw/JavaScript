let estado = true;
let total = 0;
let pasos = 0;
let primeraEntrada = true;
let notaMaxima = 0;
let notaMinima = 10;

while(estado){

    let nota = prompt("Dime una nota");

    if(nota === null || nota.trim() === ""){
        console.log("No has puseto ningun valor");
        continue;
    }

    nota = Number(nota);

    if(nota === -1){
        if(primeraEntrada){
            console.log("El primer numero ha sido -1");
        }

        console.log("Adios")
        estado = false;
        break;
    } 

    primeraEntrada = false;

    let notaValida = comprobar(nota);
    if(notaValida !== false){
        pasos++;
        total += notaValida;
        console.log("Clasificacion : "  + clasificar(nota));
        console.log("Media : " + media(total,pasos))

        if(notaValida > notaMaxima){
            notaMaxima = notaValida;
        }
        if(notaValida < notaMinima){
            notaMinima = notaValida;
        }

        console.log("Nota maxima : " + notaMaxima);
        console.log("Nota minima : " + notaMinima)

    } else {
        console.log("Nota no valida");
    }   
}

function comprobar(numero){
    if(Number.isFinite(numero) && numero >= 0 && numero <= 10){
        return numero;
    }
    return false;
}

function clasificar(numero){
    let mensaje = "null";
    switch(true){
        case (numero >= 0 && numero < 5):
            return mensaje = "Suspenso";
        case (numero >= 5 && numero < 7):
            return mensaje = "Aprobado";
        case (numero >= 7 && numero < 9):
            return mensaje = "Notable";
        case (numero >= 9 && numero <= 10):
            return mensaje = "Sobresaliente";
        default : 
            return mensaje = "Error";
    }
}

function media(a,b){
   return (Number(a/b).toFixed(2));
}