let valorAny: any;
valorAny = 1;
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste'
valorString = valorAny // aceitou valorAny porque nele contém qualquer objeto inclusive string
let valorString2: string = 'textao';
valorString2 = valorAny;


function somarStrings(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarStrings(valorString, valorString2);