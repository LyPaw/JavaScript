const numero1 = prompt("Introduce el primer numero");
const numero2 = prompt("Introduce el segundo numero");

var texto;

try{
    if (numero1 !== null && numero2 !== null){

    switch(texto){
        case (numero1 === numero2) :
            texto = "Son iguales";
            break;
        case (numero1 > numero2) :
            texto = "El numero 1 es mayor que el numero 2";
            break;
        case (numero2 > numero1) : 
            texto = "El numero 2 es mayor que el numero 1";
            break
        default:
            texto = "Numeros no validos"
    }
    alert(texto)

    } else{
        throw new Error("Uno de los valores es null")
    }
} catch ( error){
    console.error(error.message);
}



