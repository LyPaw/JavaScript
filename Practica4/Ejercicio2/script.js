function concatenar(valor1 , valor2 , valor3 , ...valor){
    return valor.map((valor) => `${valor1},${valor2},${valor3},${valor}`);
}

console.log(concatenar("Hola","Holo","Hilo","Helo","Hole","Holi"))