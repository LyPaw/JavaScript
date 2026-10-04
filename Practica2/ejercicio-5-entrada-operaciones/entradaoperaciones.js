const edad = Number(prompt("Dime tu edad")) ;
const notaMedia = Number(prompt("Dime tu nota media"));

if(edad > 0 && notaMedia >= 0){

    if(notaMedia >= 0 && notaMedia <= 10){

        console.log(edad | notaMedia.toFixed(3))

        //Muestra la nota con dos decimales.
        console.log(notaMedia.toFixed(2));

        //Calcula y muestra la suma, resta, multiplicación y división de ambos valores.
        console.log(`Suma : ${(edad + notaMedia).toFixed(2)} | Resta : ${(edad - notaMedia).toFixed(2)} | Multiplicacion : ${(edad * notaMedia).toFixed(2)} | Division : ${(edad / notaMedia).toFixed(2)}`);

        //Convierte el resultado de la división a string y muéstralo.
        let division = (edad / notaMedia).toFixed(2);
        console.log(division);

        //Crea una variable booleana con valor true.
        let valor = Boolean(true);

        //Usa typeof para mostrar el tipo de las variables utilizadas.
        console.log(typeof(valor));
        console.log(typeof(division));

        //Comprueba que la edad y la nota sean números válidos, que la nota esté entre 0 y 10 y que no se intente dividir entre cero.
    } else {
        alert("La nota debe ir desde 0 hasta 10")
    }

} else {
    alert("Nos valores deben ser validos")
}

