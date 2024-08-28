function exibirTexto (tag, texto){
    let imagem = document.querySelector(".areacentra__direita__imagem");
    let paragrafo = document.querySelector(".areacentral__direita__paragrafo");
    let conteudo = document.querySelector(`${tag}`);
    imagem.remove()
    paragrafo.remove()
    conteudo.innerHTML = texto;
};

function encripta (){
    let texto = document.querySelector('textarea').value
    let arrayCripto = Array.from(texto, function(str){
        if (str == 'a') {return str = 'ai'}
        if (str == 'e') {return str = 'enter'}
        if (str == 'i') {return str = 'imes'}
        if (str == 'o') {return str = 'ober'}
        if (str == 'u') {return str = 'ufat'}
        else {return str}
    })
    let textoSaida = arrayCripto.toString().replaceAll(',','')
    exibirTexto ('.areacentral__direita__h2',textoSaida);
}
function desencripta (){
    let texto = document.querySelector('textarea').value
    console.log (texto)
    let arrayTexto = texto.split(' ');
    let arrayCripto = arrayTexto.map(function(str){
        return str.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u');
    })
    let textoSaida = arrayCripto.toString().replaceAll(',',' ')
    exibirTexto ('.areacentral__direita__h2',textoSaida);
}
