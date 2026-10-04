let fecha = new Date();

//El día del mes.
console.log(fecha.getDate());

//El mes. Ten en cuenta que getMonth() devuelve valores de 0 a 11.
console.log(fecha.getMonth());

//El año.
console.log(fecha.getFullYear());


//Muestra la fecha completa, incluido el día de la semana, con Intl.DateTimeFormat para la región es-ES.
let formatoFecha = new Intl.DateTimeFormat("es-ES", {dateStyle : "long"}).format(fecha);
console.log(formatoFecha);