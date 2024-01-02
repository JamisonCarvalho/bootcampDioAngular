const jamison = {
    nome: 'Jamison Carvalho',
    idade: 31,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// jamison.altura = 1.71;

// delete jamison.nome;

jamison.descrever();

console.log(jamison['nome']);
