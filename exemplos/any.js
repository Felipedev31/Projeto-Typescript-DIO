"use strict";
let valorAny;
valorAny = 1;
valorAny = 'ola';
valorAny = true;
let valorString = 'teste';
valorString = valorAny; // aceitou valorAny porque nele contém qualquer objeto inclusive string
let valorString2 = 'textao';
valorString2 = valorAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorString, valorString2);
