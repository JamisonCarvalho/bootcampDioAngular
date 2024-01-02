/*  Formas de pagamento: 
1 - à vista débito; 
2 - à vista dinheiro ou pix; 
3 - parcelado sem juros;
4 - parceldo com juros;
*/

(function (){
    preco = 100;
    formaPagamento = 4;
})();

function aplicarDesconto (valor, desconto){
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros (valor, juros){
    return (valor + (valor * (juros/100)));
}

if (formaPagamento === 1){
    console.log('Valor final do produto é ' + 'R$ ' + aplicarDesconto(preco, 10));
} else if (formaPagamento === 2){
    console.log('Valor final do produto é ' + 'R$ ' + aplicarDesconto(preco, 15));
} else if (formaPagamento === 3) {
    console.log('Valor final do produto é ' + 'R$ ' + preco)
} else {
    console.log('Valor final do produto é ' + 'R$ ' + aplicarJuros(preco, 10));
}