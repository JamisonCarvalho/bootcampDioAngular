/*  Faça um programa para calcular o valor de um viagem.

    Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - Tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

    Para finalizar, imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoGasolina = 6.80;
const carroGasolina = 1;
const precoEtanol = 5.79;
const carroEtanol = 2;
const kmPorLitro = 10;
const kmViagem = 100;

const litrosConsumidos = kmViagem/kmPorLitro;
let valorGasto = 0;
const tipoCombustivel = 2;

if (tipoCombustivel === carroGasolina){
    valorGasto = litrosConsumidos * precoGasolina
    console.log("O valor gasto dessa viagem é R$" + valorGasto.toFixed(2));
} else {
    valorGasto = litrosConsumidos * precoEtanol
    console.log("O valor gasto dessa viagem é R$" + valorGasto.toFixed(2));
}