const entrada = require('prompt-sync')({sigint:true});


//Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor

var v1,v2;

v1 = entrada("Digite o primeiro valor: ")
v2 = entrada("Digite o segundo valor: ")

if(v1 < v2 ){
    let dif = v1- v2;
    Math.abs(dif);
    console.log(dif);
}else {
    let dif = v2-v1;
    Math.abs(dif);
    console.log(dif);
}