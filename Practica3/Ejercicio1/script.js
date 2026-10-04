//Pide al usuario dos números. Comprueba si son iguales, si el primero es mayor que el segundo o si el segundo es mayor que el primero. Muestra un mensaje de alerta con el resultado.

const numero1 = prompt("Introduce el primer numero");
const numero2 = prompt("Introduce el segundo numero");

if(numero1 === numero2){
    alert("Los dos son iguales");
}
if(numero1 > numero2){
    alert(`El numero ${numero1} es mayor que el ${numero2}`);
} 
if(numero2 > numero1) {
    alert(`El numero ${numero2} es mayor que el ${numero1}`);
}