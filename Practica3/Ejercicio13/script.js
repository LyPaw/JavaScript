//Pide un número al usuario y muestra todos sus divisores.

let numero = Number(prompt("Dime un numero"));

for(let i = 0;i <= numero ; i++){
    if(Number.isInteger(numero / i)){
        console.log(i)
    }
}


