//Muestra una sola vez el siguiente menú y, según la opción elegida, indica el nivel del usuario. Usa switch.
//1. Usuario principiante
//2. Usuario intermedio
//3. Usuario avanzado
//4. Salir

alert("1.Usuario principiante\n2.Usuario intermedio\n3.Usuario avanzado\n4.Salir");

let eleccion;


while(eleccion != 4){

    eleccion = prompt("Diga su eleccion");

    switch(true){
    case eleccion == 1 :
        alert("Eres principiante");
        break;
    case eleccion == 2 :
        alert("Eres intermedio");
        break;
    case eleccion == 3 :
        alert("Eres avanzado");
        break;
    case eleccion == 4 :
        alert("Adios");
    }

}
