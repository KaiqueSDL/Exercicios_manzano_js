const entrada = require('prompt-sync')({sigint:true});

//Elaborar  um  programa  que  efetue  a  leitura  de  um número  inteiro  e  apresentar  uma  mensagem informando se o número é par ou ímpar. 

var num = parseInt(entrada('Digite o numero: '));

if(num % 2 == 0 ){
    console.log("Numero é par")
}else {
    console.log("Numero é impar")
}
