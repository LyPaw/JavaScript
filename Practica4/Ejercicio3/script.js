function spreadEjercicio(valor1 , valor2 , valor3 ,valor4){
    let total = valor1 + valor2 + valor3 + valor4;
    return total;
}

const numero = [1,3,5,6];


alert(spreadEjercicio(...numero));