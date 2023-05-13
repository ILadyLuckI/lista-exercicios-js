/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/*valor bruto do produto*/
const precoEtiqueta = 100;

/*Condição de pgto e calculo*/
const condiçãoPgtoEscolhida = pgtoPrazo3xMais;

/*valor do desconto*/
const descontoAVistaDebito = 0.1;
const descontoAVistaDinheiroPix = 0.15;
const desconto2xPrecoNormal = 1;

/*valor dos juros*/
const juros = 0.1;
const pgtoPrazo3xMais = precoEtiqueta * (1 + juros);


if(condiçãoPgtoEscolhida === descontoAVistaDebito) {
    console.log(Math.round(precoEtiqueta - (precoEtiqueta * descontoAVistaDebito)));
} else if (condiçãoPgtoEscolhida === descontoAVistaDinheiroPix) {
    console.log(Math.round(precoEtiqueta - (precoEtiqueta * descontoAVistaDinheiroPix)));
} else if (condiçãoPgtoEscolhida === desconto2xPrecoNormal) {
    console.log(Math.round(precoEtiqueta - (precoEtiqueta * desconto2xPrecoNormal)));
} else {
    console.log(Math.round(pgtoPrazo3xMais));
}
