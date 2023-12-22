/**
 * Crie um programa que seja capax de percorrer uma lista de números e imrpima cada número par encontrado.
 */

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroPar = [];

for (let index = 0; index < numeros.length; index++){
    if(numeros[index] % 2 === 0){
        numeroPar.push(numeros[index]);
    }
}
console.log(numeroPar);