
// Isso é a msm coisa que o codigo abaixo const funcoes = require('./funcoes-auxiliares');
const { gets, print } = require('./funcoes-auxiliares');

const qntdAlunos = gets()
let maiorValor = 0;

for (let index = 0; index < qntdAlunos; index++) {
    const numerosSorteado = gets();

    if(numerosSorteado > maiorValor){
        maiorValor = numerosSorteado;
    }
}

print(maiorValor);