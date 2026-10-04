let radio = 3.5;
const pi = Number(Math.PI.toFixed(5))

let area = (pi * (radio * radio));

//Muestra el área por consola.
console.log(area);

//Convierte el resultado a string y muéstralo.
console.log(area.toString());

//Muéstralo como string con tres decimales.
console.log(area.toFixed(3).toString());

// Convierte el área en un entero y muéstralo.
console.log(Number.parseInt(area));

//Redondea el área al entero más cercano con Math.
console.log(Math.round(area));

//Multiplica el área por un entero aleatorio entre 1 y 20.
console.log(Math.floor(Math.random() * 20) + 1)

// Comprueba con Number.isFinite() que el valor guardado en la variable del radio sea finito y positivo antes de calcular el área.
console.log(Number.isFinite(radio));