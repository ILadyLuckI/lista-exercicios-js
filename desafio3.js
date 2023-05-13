/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostro sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- abaixo de 18.5   |   abaixo do peso;
- entre 18.5 e 25  |   peso normal;
- entre 25 e 30    |   acima do peso;
- entre 30 e 40    |   obeso;
- acima de 40      |   obesidade grave;
*/

const peso = 72.150;
const altura = 1.60;
const imc = peso / Math.pow(altura, 2);
console.log(Math.round (imc));   

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc > 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc <= 30) {
    console.log('Acima do peso');
} else if (imc >=30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave')
}