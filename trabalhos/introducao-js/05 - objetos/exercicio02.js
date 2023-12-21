/*
    Crie uma classe para reprpesentar pessoas.
    Para cada pessoa teremos os atributos:
    - Nome;
    - Peso;
    - Altura;

    As pessoas devem ter a capacidade de dizer valor do seu IMC (IMC = peso / (altura*altura));
    Instancie uma pessoa chamada José que tenhoa 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (Math.pow(this.altura, 2));
    }

    classificarImc(){
        const imc = this.calcularImc() 

        if (imc < 18.5){
            return `Me chamo ${this.nome} e meu IMC é ${imc.toFixed(2)} e estou abaixo do peso.`;
        } else if (imc >= 18.5 && imc < 25){
            return `Me chamo ${this.nome} e meu IMC é ${imc.toFixed(2)} e meu peso é normal.`;    
        } else if (imc >= 25 && imc < 30){
            return `Me chamo ${this.nome} e meu IMC é ${imc.toFixed(2)} e estou acima do peso.`;    
        } else if (imc >= 30 && imc <= 40){
            return `Me chamo ${this.nome} e meu IMC é ${imc.toFixed(2)} e estou obeso.`;    
        } else {
            return `Me chamo ${this.nome} e meu IMC é ${imc.toFixed(2)} e estou classificado com obesidade grave.`;    
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
const jamison = new Pessoa('Jamison', 74.650, 1.71);

console.log(jose.classificarImc());
console.log(jamison.classificarImc());