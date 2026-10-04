//Muestra el mensaje de confirmación ¿Deseas continuar?. Según el usuario acepte o rechace, muestra un mensaje distinto.

let bucle = true;

while(bucle){

    let respuesta = prompt("Deseas continuar?");

    switch(true){
        case respuesta == "no":
            alert("Adios")
            bucle = false;
            break;
        case respuesta == "si":
            alert("Buena respuesta");
            break;
        default:
            alert("Las respuestas deben ser si/SI o no/NO");
    }
}