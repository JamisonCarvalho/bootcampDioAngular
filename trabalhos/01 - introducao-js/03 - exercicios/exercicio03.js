/*  Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código condição de pagamento:
    - À vista débito, recebe 10% de desconto;
    - À vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em 2x, preço normal de etiqueta sem juros;
    - Acima de 2x, preço normal de etiqueta mais juros de 10%
 */

const preco = 100;
const formaPagamento = 3; // 1 - à vista débito ; 2 - à vista dinheiro ou pix ; 3 - parcelado
const debito = preco - (preco * 0.1);
const dinheiroPix = preco - (preco * 0.15);
const precoComJuros = preco + (preco * 0.1);
const numeroParcela = 12;

if (formaPagamento === 1){
    console.log('R$ ' + debito)
} else if (formaPagamento === 2){
    console.log('R$ ' + dinheiroPix)
} else if (formaPagamento === 3 && numeroParcela <= 2) {
    console.log('R$ ' + preco)
} else {
    console.log('R$ ' + precoComJuros)
}