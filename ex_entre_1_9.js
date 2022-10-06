const entrada = require('prompt-sync')({sigint:true});


//Elaborar  um  programa  que  efetue  a  leitura  de  um valor  que  esteja  entre  a  faixa  de  1  a  9.  Após  a 
//leitura  do  valor  fornecido  pelo  usuário,  o  programa  deverá  indicar  uma  de  duas  mensagens:  "O valor está na faixa permitida", caso o usuário forneça o valor nesta faixa, ou a mensagem "O valor está fora da faixa permitida", caso o usuário forneça valores menores que 1 ou maiores que 9. 

var num = parseInt(entrada("Digite um numero: "));

if(num >=  1 && num <=9){
    console.log("O vlaor esta na faixa permitida! ");
}else {
    console.log("O valor esta FORA da faixa");
}