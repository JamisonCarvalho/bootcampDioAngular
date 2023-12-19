const numero = 2;

const isNumeroPar = (numero % 2) === 0;

if (numero === 0){
    console.log('Numéro inválido.')
} else if (isNumeroPar){
    console.log('Par');
} else {
    console.log('Impar');
}
