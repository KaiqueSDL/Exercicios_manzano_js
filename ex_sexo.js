const entrada = require("prompt-sync")({sigint:true});



//Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída  uma  das  seguintes  mensagens:  "Ilmo  Sr.",  se  o  sexo  informado  como  masculino,  ou  a mensagem  "Ilma  Sra.",  para  o  sexo  informado  como  feminino.  Apresente  também  junto  da mensagem de saudação o nome previamente informado.


var nome = entrada("Digite seu nome pfv: ");
console.log("1 para masculino - 2 para feminino ");
var sexo = parseInt(entrada("Escolha uma opção - "))

switch (sexo) {
    case 1:
        console.log("Bom dia senhor " + nome);
        break;
    case 2:
        console.log("Bom dia senhora " + nome);
        break;
    default:
        console.log("Opçao invalida!!");
        break;
}