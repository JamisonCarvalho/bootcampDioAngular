// Função onde imprime o nome digitado;
function sayMyName(name){
    console.log('Your name is: ' + name);
}

sayMyName('Jamison');
sayMyName('Tiana');

// Função onde imprime o quadrado de um número;
function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

// Função onde imprime o valor com juros, dependendo do número de parcelas;
function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100,10));