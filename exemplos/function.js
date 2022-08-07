"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('ola', ', tudo bem?'));
console.log(somarValores('1', '5'));
// Definindo o tipo de retorno de uma função
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresNumericos(1, 3));
// defina o tipo que irá sair da função para que não aconteça nenhum erro na hora que estiver codando, pois terá funcões que terá várias linhas então especifique diretamente o que essa função irá fazer definindo a tipagem
// void 
function printaValoresNumericos(numero01, numero02) {
    console.log(numero01 + numero02);
}
// Incluindo callbacks em funções
function somarValoresNumericos1(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericos1(1, 3, dividirPorEleMesmo));
console.log(somarValoresNumericos1(1, 3, aoQuadrado));
