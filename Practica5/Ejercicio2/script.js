let estado = true;
let mapa = [];
let errores = [];

document.body.innerHTML+=("<h3>1.CrearMapa<br>2.Mover<br>3.Movimiento Fallidos<br>4.Final");
setTimeout(menu, 50); // Lo he tenido que mirar para saber como poder imprimir en el html antes de que el prompt lo bloquee

function menu(){

    if(estado){

        let eleccion = prompt("Que quieres hacer?");

        switch(eleccion){
            case "1":
                let longitud = prompt("Dime la longitud del mapa");
                crearMapa(longitud)
                posicionRobot();
                document.body.innerHTML+=("<h1>"+mapa);
                break;
            case "2":
                let direccion = prompt("Donde quieres moverte?");
                mover(direccion);
                document.body.innerHTML+=("<h1>"+mapa);
                break;
            case "3":
                mostrarErrores();
                break;
            case "4":
                final();
                document.body.innerHTML+=("<h1>"+mapa);
                estado = false;
                break;
            default : 
                alert("Introduce un valor correcto");
        }
        setTimeout(menu, 50);
    }
}

function crearMapa(numero){
    mapa = [];

    for(let i = 0;i < numero;i++){
        mapa[i] = "\".\"";
    }

    const pared = Math.floor(Math.random() * numero);
    mapa[pared] = "\"#\"";

    return mapa;
}

function posicionRobot(){
    let aleatorio = Math.floor(Math.random() * mapa.length);

    while(mapa[aleatorio] === "\"#\""){
        aleatorio = Math.floor(Math.random() * mapa.length);
    }

    mapa[aleatorio] = "\"S\"";
    return aleatorio;
}

function mover(direccion){
    for(let i = 0; i < mapa.length ; i++){
        if(mapa[i] === "\"S\""){
            switch(direccion){
                case "derecha":
                    if(mapa[i + 1] ===  "\"#\"" || i + 1 >= mapa.length){
                        document.body.innerHTML+=("Te has chocado");
                        errores.push("Error al moverme a la derecha");
                    } else {
                        mapa[i + 1] = mapa[i];
                        mapa[i] = "\".\"";
                    }
                    break;

                case "izquierda":
                    if(mapa[i - 1] ===  "\"#\"" || i - 1 < 0){
                        document.body.innerHTML+=("Te has chocado");
                        errores.push("Error al moverme a la izquierda");
                    } else {
                        mapa[i - 1] = mapa[i];
                        mapa[i] = "\".\"";
                    }
                    break;
            }
                    break;
        }
    }
}

function final(){
    for(let i = 0;i < mapa.length;i++){
        if(mapa[i] === "\"S\""){
            mapa[i] = "\"F\""
        } 
    }

    return mapa;
}

function mostrarErrores(){
    document.body.innerHTML+=("<h3>"+errores);
}