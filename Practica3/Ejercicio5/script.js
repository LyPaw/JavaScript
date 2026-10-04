//Usa un bucle para pedir números y calcular su suma y su media. Cuando el usuario introduzca un número negativo, muestra los resultados; no incluyas ese número en los cálculos.

let total = 0;
let numeros = 0;

for(let i = 0;i <= 5;i++){
    let valor = Number(prompt("Dame un valor"));
    if(valor > 0){
        total = total + valor;
        numeros++;
        console.log(`El valor ${valor} se cuenta`)
    }else{
        console.log(`El valor ${valor} no se tiene en cuenta`)
    }
}

console.log(`Total de la suma : ${total}`);
console.log(`Media : ${(total / numeros).toFixed(2)}`)