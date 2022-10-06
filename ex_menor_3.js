const entrada = require("prompt-sync")({sigint:true});

//Elaborar  um  programa  que  efetue  a  leitura  de  um determinado  valor  inteiro,  e  efetue  a  sua apresentação, caso o valor não seja maior que três.

var num = parseInt(entrada("Digite um numero: "));

if(num < 3 ){
    console.log(num);
}else {
    console.log('numero é maior que 3 !!');
}
