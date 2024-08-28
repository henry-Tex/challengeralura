function encripta (texto){
    let arrayCripto = Array.from(texto, function(str){
        if (str == 'a') {return str = 'ai'}
        if (str == 'e') {return str = 'enter'}
        if (str == 'i') {return str = 'imes'}
        if (str == 'o') {return str = 'ober'}
        if (str == 'u') {return str = 'ufat'}
        else {return str}
    })
    return arrayCripto.toString().replaceAll(',','')
}
console.log (encripta('Fala comigo'));
function desencripta (texto){
    let arrayTexto = texto.split(' ');
    let arrayCripto = arrayTexto.map(function(str){
        return str.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u');
    })
    return arrayCripto.toString().replaceAll(',',' ')
}
console.log (desencripta("pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"));