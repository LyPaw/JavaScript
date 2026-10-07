let estado = true;
let total = 0;
let pasos = 0;

while(estado){

    let nota = Number(prompt("Dime una nota"));
    if(nota === -1){

        if(total === 0){
            console.log("El primer numero ha sido -1");
        }

        console.log("Adios")
        estado = false;

    } else {

        comprobar(nota);
        total = total + nota;
        pasos++;
        
    }

    media(total/pasos)

}

function comprobar(numero){
    if(typeof numero === "string"){
        return false;
    }

    const nota = Number(numero);

    if(Number.isFinite(numero) && nota >= 0 && nota <= 10){
        return nota;
    }
}

function clasificar(numero){
    let mensaje;
    switch(true){
        case (nota >= 0 && nota < 5):
            return mensaje = "Suspenso";
        case (nota >= 5 && nota < 7):
            return mensaje = "Aprobado";
        case ( nota >= 7 && nota < 9):
            return mensaje = "Notable";
        case ( nota >= 9 && nota <= 10):
            return mensaje = "Sobresaliente";
        default : 
            return mensaje = "Error";
    }
}

function media(a,b){
   console.log(Number(a/b).toFixed(2));
}