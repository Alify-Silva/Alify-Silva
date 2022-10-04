var idade = parseInt(prompt('Digite a idade da pessoa que está sendo registrada:'))

if (idade < 16){
    document.write('Criança - Menor de idade')
    alert('Criança')
} else if (idade >=15 && idade <30 ){
    if (idade>=18){
        document.write('Jovem - Maior de idade.')
    } else {
        document.write('Jovem - Menor de idade.')
    }18
    alert('Jovem')
} else if (idade >= 30 && idade <60){
    document.write('Adulto - Maior de idade.')
    alert('Adulto')
} else if (idade >= 60) {
    document.write('Idoso - Maior de idade ')
    alert('Idoso')
}

/* OUTRO EXEMPLO USANDO SWITCH CASE.*/
document.write('<hr>')
var idade2 = parseInt(prompt('Digite a idade da pessoa que você ama'))

if (idade>=18){
    document.write('<h3>Pode namorar</h3>')
} else {
    document.write('<h3>Não pode namorar</h3>')
}
