const entrada = require('prompt-sync')({sigint:true});

//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

var num = parseInt(entrada("Digite um numero"));

for(var i = 0; i <11; i++){
    console.log(`${num} * ${i} = ${num * i}`);
}