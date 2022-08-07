let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste'
anyEstaDeVolta = 5;

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;

let uknonwValor: unknown;
uknonwValor = 3;
uknonwValor = 'opa';
uknonwValor = true;
uknonwValor = 'vai sim'

let stringTest2: string = 'agora vai';

if(typeof uknonwValor === 'string'){
    stringTest2 = uknonwValor
}

function jogaErro(erro: string, codigo: number): never {
    throw{error: erro, code: codigo}
}

jogaErro('deu erro', 500)