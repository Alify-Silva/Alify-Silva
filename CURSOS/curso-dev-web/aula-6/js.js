
/* 
*
CRIAÇÃO DAS FUNÇÕES 
*
*/

function exibirArtigo(id, callbackSucesso, callbackErro){
    //Finge que tem uma lógica sobre: recuperar o id via requisição HTTP
    if (false){
        callbackSucesso('Funções de callback em JS ', 'Funções de callback são muito utilizadas');
    } else {
        callbackErro('Erro ao recuperar os dados solicitados');
    }
}

/*
*
CRIAÇÃO DAS VARIÁVEIS
*
*/

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>'+titulo+'</h1>')
    document.write('<hr />')
    document.write('<p>'+descricao+'</p>')
}

var callbackErro = function(erro){
    document.write('<p><b>Erro: </b>'+erro+'</p>');
}

/**
 * 
 * CORPO DO PROGRAMA
 * 
 */
// VALOR, SE DER CERTO FAÇA, SE DER ERRADO, FAÇA
exibirArtigo(1, this.callbackSucesso, this.callbackErro);


