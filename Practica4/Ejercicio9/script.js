let numeroSecreto = 0;
let estado = true;
let puntuacion = 0;

while(estado){

    let eleccion = Number(prompt("1.Dificil(20 intentos)\n2.Medio(10 intentos)\n3.Facil(5 intentos)"));

    switch(true){

        case eleccion === 1:
            generarNumero();
            alert(numeroSecreto);
            probarSuerte(intentosRestantes(eleccion));
            break;

        case eleccion === 2:
            generarNumero();
            probarSuerte(intentosRestantes(eleccion));
            break;
        
        case eleccion === 3:
            generarNumero();
            probarSuerte(intentosRestantes(eleccion));
            break;
    }
}

function intentosRestantes(numero){
    if(numero === 1){
        return 20;
    }
    if(numero === 2){
        return 10;
    }
    if(numero === 3){
        return 5;
    }
}

function generarNumero(){
    return numeroSecreto = Number(Math.random() * 100).toFixed(0);
}

function validarEleccion(numero){
    if(numero < 0 && numero > 100){
        console.log("El numero esta entre el 0 y el 100");
    }
}

function comprobarResultado(numero){
    if(Number(numero).toFixed(0) === Number(numeroSecreto).toFixed(0)){
        alert("Has acertado");
        puntuacion = puntuacion + 100;
        generarNumero();
    }

    if(numero < numeroSecreto){
        alert("EL numero que buscas es mayor");
        puntuacion = puntuacion - 10;
    }
    if(numero > numeroSecreto){
        alert("El numero que buscas es menor");
        puntuacion = puntuacion - 10;
    }
    
}

function probarSuerte(intentos){
    while(intentos > 0){
        let valor = Number(prompt(`Dime el numero | ${intentos}  | ${puntuacion}`));

        intentos--;
        validarEleccion(valor);
        comprobarResultado(valor);
    }
}