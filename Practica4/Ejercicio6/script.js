let distanciaViaje = Number(prompt("Dime la distancia del viaje en Km"));
let consumoVehiculo = Number(prompt("Dime el consumo en litros cada 100km"));
let precioLitro = Number(prompt("Dime el precio del litro de conbustible"));
let viajeros = Number(prompt("Dime el numero de viajeros totales"));




while(distanciaViaje <= 0 && consumoVehiculo <= 0){
    alert("La distancia y consumo deben ser mayores a 0");
    distanciaViaje = Number(prompt("Dime la distancia del viaje en Km"));
    consumoVehiculo = Number(prompt("Dime el consumo en litros cada 100km"));
} 

while(precioLitro <= 0 && viajeros <= 0){
    alert("Debes dar valores validos en precio y valores");
    precioLitro = Number(prompt("Dime el precio del litro de conbustible"));
    viajeros = Number(prompt("Dime el numero de viajeros totales"));
}



console.log("Litros totales : " + calculoLitros(distanciaViaje,consumoVehiculo));
console.log("Coste total : " + calculoCosteTotal(calculoLitros(distanciaViaje,consumoVehiculo),precioLitro));
console.log("Coste viajero : " + costeViajero(calculoCosteTotal(calculoLitros(distanciaViaje,consumoVehiculo), precioLitro),viajeros).toFixed(2));



function calculoLitros(a,b){
    return ((a / 100) * b);
}

function calculoCosteTotal(a,b = 1.80){
    return (a*b);
}

function costeViajero(a,b){
    return (a/b);
}

//No entiendo que quiere decir esto:
//Añade una función que reciba otra función de cálculo para poder mostrar el coste total o el coste compartido sin duplicar el formato del informe.



