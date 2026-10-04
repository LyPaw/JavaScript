//Guarda una contraseña en una variable y pide al usuario que la introduzca hasta que acierte.

let contrasenia = "hola";
let valor

do{
    valor = prompt("Dime la contraseña");
}while(valor !== contrasenia)

    alert("Contraseña encontrada")