var nota = parseInt(prompt('Digite a nota 1 do aluno'))
var faltas = parseInt(prompt('Digite a quantidade de faltas do aluno'))

/**/

if (nota >= 7 && faltas <= 7) {
    document.write("<span id='container-nav-aprovado' >Aprovado!</span>")
} else if ((nota <= 7 && faltas >7) || (nota>=7 && faltas >7) || (nota<=7 && faltas <=7)){
    document.write("<span id='container-nav-reprovado' >Reprovado!</span>")
}

document.write('<hr>')
