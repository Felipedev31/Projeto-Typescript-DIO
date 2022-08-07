"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let uknonwValor;
uknonwValor = 3;
uknonwValor = 'opa';
uknonwValor = true;
uknonwValor = 'vai sim';
let stringTest2 = 'agora vai';
if (typeof uknonwValor === 'string') {
    stringTest2 = uknonwValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
