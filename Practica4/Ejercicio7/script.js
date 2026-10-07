let estado = true;

while(estado){

    let eleccion = Number(prompt(
        "1. Celsius-Fahrenheit\n" +
        "2. Kilometros-Milla\n" +
        "3. Euros-Dolares\n" +
        "4. Fahrenheit-Celsius\n" +
        "5. Milla-Kilometros\n" +
        "6. Dolar-Euro"
    ));

    switch(true){
        case eleccion === 1:
            mostrarDatos("Celsius-Fahrenheit : ", celsiusFahrenheit(12));
            break;

        case eleccion === 2:
            mostrarDatos("Kilometros-Millas : ", kilometroMillas(200));
            break;

        case eleccion === 3:
            mostrarDatos("Euro-Dolar : ", euroDolar(12, 1.4));
            break;

        case eleccion === 4:
            mostrarDatos("Fahrenheit-Celsius : ", fahrenheitCelsius(100));
            break;

        case eleccion === 5:
            mostrarDatos("Millas-Kilometros : ", millaKilometro(124.27));
            break;

        case eleccion === 6:
            mostrarDatos("Dolar-Euro : ", dolarEuro(16.8, 1.4));
            break;

        default :
            alert("Las opciones deben ser del 1 al 6");
            break;
    }
}


function celsiusFahrenheit(numero){
    return (numero * 1.8 + 32).toFixed(2);
}

function kilometroMillas(numero){
    return (numero * 0.621371).toFixed(2);
}

function euroDolar(numero, tasa = 1.13){
    return (numero * tasa).toFixed(2);
}

function fahrenheitCelsius(numero){
    return ((numero - 32) / 1.8).toFixed(2);
}

function millaKilometro(numero){
    return (numero / 0.621371).toFixed(2);
}

function dolarEuro(numero, tasa = 1.13){
    return (numero / tasa).toFixed(2);
}

function mostrarDatos(texto, funcion){
    alert(texto + " " + funcion);
}
