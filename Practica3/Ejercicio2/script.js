//Amplía el ejercicio anterior: comprueba que ambos valores sean números válidos y distintos de cero antes de compararlos. Si algún valor no es válido, muestra un mensaje de error.

const numero1 = Number(prompt("Introduce el primer numero"));
const numero2 = Number(prompt("Introduce el segundo numero"));

let texto;
if (!Number.isFinite(numero1) || numero1 <= 0 || !Number.isFinite(numero2) || numero2 <= 0){
    texto = "Numeros no validos";
    alert(texto);
}
else {
    switch(true){
        case (numero1 === numero2) :
            texto = "Son iguales";
            break;
        case (numero1 > numero2) :
            texto = "El numero 1 es mayor que el numero 2";
            break;
        case (numero1 < numero2) : 
            texto = "El numero 2 es mayor que el numero 1";
            break;
    }
    alert(texto);
} 


