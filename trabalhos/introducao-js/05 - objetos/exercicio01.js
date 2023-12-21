/**
 * Crie uma classe para representar carros.
 * Os carros possuem:
 * - Marcar;
 * - Cor;
 * - Gasto médio de combustível por KM;
 * 
 * Crie um método que dado a quantidade de quilímetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
 */

class Carro{
    nome;
    marca;
    cor;
    gastoMedioKm;
    
    constructor(nome,marca,cor,gastoMedioKm){
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularValorViagem(distanciaKm, precoCombustivel){
       return distanciaKm * this.gastoMedioKm * precoCombustivel;
    }
}

const uno = new Carro('Uno','Fiat', 'Branca', 1/12);
const palio = new Carro('Palio', 'Fiat', 'Preto', 1/10);


console.log(uno.calcularValorViagem(70, 5));
console.log(palio.calcularValorViagem(70, 5));
