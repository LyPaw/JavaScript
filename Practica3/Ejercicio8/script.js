//Pide al usuario una palabra y calcula cuántas vocales contiene.

let palabra = prompt("Dime una palabra");
let seccion = palabra.toLowerCase().split("");
let total = 0;

for(let i = 0 ; i <= seccion.length ; i++){
    if(seccion[i] === "a" || seccion[i] === "e" || seccion[i] === "i" || seccion[i] === "o" || seccion[i] === "u"){
        total++;
    }
}
console.log(total);