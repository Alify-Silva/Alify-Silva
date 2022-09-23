

function exibirArtigo(id, callbackSucesso, callbackErro){
    //Finge que tem uma lógica sobre: recuperar o id via requisição HTTP
    if (true){
        callbackSucesso('Funções de callback em JS ', 'Funções de callback são muito utilizadas');
    } else {
        callbackErro('Erro ao recuperar os dados solicitados');
    }

    varcallbackSucesso = function(){

    }

    exibirArtigo(1, callbackSucesso(), callbackErro());

}