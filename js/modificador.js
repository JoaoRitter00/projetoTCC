
function fnordenar(vetor) {
    // Ordena os vetor restantes em ordem alfabética
    return vetor.sort(function (a, b) {
        return a.localeCompare(b)
    });
}

function fncapitalizar(vetor) {
    // Transformar a primeira letra de cada item em maiúscula
    var modificado = [];
    for (var i = 0; i < vetor.length; i++) {
        let LetraInicial = vetor[i].charAt(0).toUpperCase()
        let restoTexto = vetor[i].slice(1);
        let Junto = LetraInicial + restoTexto;
        modificado[i] = Junto
    }
    return modificado
}
export default{
    capitalizar: fncapitalizar,
    ordenar: fnordenar
}