

function calcularAreaTerreno(largura, comprimento){
    var area = largura * comprimento;
    return area;
}

var largura = parseInt(prompt('Digite a largura do terreno'));
var comprimento = parseInt(prompt('Digite o comprimento do terreno: '));


document.write('A área do imóvel é: '+calcularAreaTerreno(largura, comprimento)+'m²')