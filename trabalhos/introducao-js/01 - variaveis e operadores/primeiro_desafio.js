/*  Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância aem Km da viagem;
*/

const valorCombustive = 5.79;
const kmPorLitro = 12;
const kmViagem = 1580;

const litrosConsumidos = kmViagem/kmPorLitro;
const valorGasto = litrosConsumidos * valorCombustive;
console.log(valorGasto.toFixed(2));