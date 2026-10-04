let nombre = "Manuel";
let apellido = "Fuentes";

let nombreCompleto1 = (nombre + " " + apellido)

//Muestra la concatenación de ambas variables.
console.log(nombreCompleto1);

//Muestra la longitud de la cadena resultante.
console.log(nombreCompleto1.length);

//Extrae los caracteres de las posiciones 7 a 10. Recuerda que los índices empiezan en 0 y que el segundo argumento de slice() no se incluye.
console.log(nombreCompleto1.slice(6,10));


//Reemplaza tu segundo apellido por otro distinto.
apellido = "Cruz";

//Convierte la cadena a mayúsculas.
apellido = apellido.toUpperCase();
let nombreCompleto2 = (nombre + " " + apellido)

//Muestra el último carácter.
console.log(nombreCompleto2.charAt(nombreCompleto2.length - 1))

//Convierte la cadena concatenada en un array, usando el espacio como separador.
let cadenaArray =nombreCompleto2.split(" ");
console.log(cadenaArray[0])
console.log(cadenaArray[1])

//Busca la posición en la que comienza tu apellido.
console.log(nombreCompleto2.indexOf(cadenaArray[1]))

//Usa un template literal para mostrar un mensaje que concatene Bienvenido/a con la cadena creada
console.log(`Bienvenido/a ${nombreCompleto2}`)

//Genera las iniciales del nombre y los apellidos en mayúsculas a partir del array.
console.log(cadenaArray[0].charAt(0).toUpperCase() + "|" + cadenaArray[1].charAt(0).toUpperCase())


