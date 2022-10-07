const entrada = require("prompt-sync")({sigint:true});


//Elaborar  um  programa  que  apresente  como  resultado  o  valor  de  uma  potência  de  uma  base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

var num = parseInt(entrada("Digite o numero: "));
var expo = parseInt(entrada("Digite um numero como expoente: "));

console.log(` ${num} ^ ${expo} = ${Math.pow(num,expo)}`);