var nome_pessoa = prompt('Digite o seu nome');
var altura_cm = parseInt(prompt('Digite a sua altura em centímetros'));
var peso_kg = parseFloat(prompt('Digite o seu peso em KG'));

altura_cm /=100;

var imc=peso_kg/(altura_cm*altura_cm)

document.write('<h3>Bem-vindo ao nosso sistema de cálculo IMC.</h3>')
if (imc<16){

    document.write(nome_pessoa+' possui índice de massa corporal igual a '+imc+', sendo classificado como BAIXO PESO MUITO GRAVE')
} else if (imc >=16 && imc<17){
    document.write(nome_pessoa+' possui índice de massa corporal igual a '+imc+', sendo classificado como BAIXO PESO GRAVE')
} else if (imc >=17 && imc<18.50) {
    document.write(nome_pessoa+' possui índice de massa corporal igual a '+imc+', sendo classificado como BAIXO PESO')
} else if (imc >=18.50 && imc <25){
    document.write(nome_pessoa+' possui índice de massa corporal igual a '+imc+', sendo classificado como PESO NORMAL')
} else if (imc >= 25 && imc<30) {
    document.write(nome_pessoa+' possui índice de massa corporal igual a '+imc+', sendo classificado como SOBREPRESO')
} else if (imc >=30 && imc<35){
    document.write(nome_pessoa+' possui índice de massa corporal igual a '+imc+', sendo classificado como OBESIDADE GRAU I')
} else if (imc >=35 && imc<40){
    document.write(nome_pessoa+' possui índice de massa corporal igual a '+imc+', sendo classificado como OBESIDADE GRAU II')
} else if (imc >=40) {
    document.write(nome_pessoa+' possui índice de massa corporal igual a '+imc+', sendo classificado como OBESIDADE GRAU III (MÓRBIDA)')
}