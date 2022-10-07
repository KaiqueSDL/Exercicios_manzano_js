const entrada = require('prompt-sync')({sigint:true});


//Ler  quatro  valores  referentes  a  quatro  notas  escolares  de  um  aluno  e  imprimir  uma  mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. Se  a  nova  média  for  maior  ou  igual  a  5,  apresentar uma  mensagem  dizendo  que  o  aluno  foi aprovado  em  exame.  Se  o  aluno  não  foi  aprovado,  indicar  uma  mensagem  informando  esta condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. 


var v1, v2, v3, v4;

v1 = parseInt(entrada("digite primeira nota: "));
v2 = parseInt(entrada("digite segunda nota"));
v3 = parseInt(entrada("digite terceira nota "));
v4 = parseInt(entrada("digite quarta nota "));

let soma = (v1 + v2 + v3 + v4)
var media = soma / 4;

if (media >= 7) {
    console.log("APROVADO", "nota - ", media)

}else{
    let exame = parseInt(entrada("Digite a nota do exame: "));
    let novaMedia = media + exame / 2;

    if(novaMedia >= 5 ){
        console.log("APROVADO", "nota - ", novaMedia);
    }else {
        console.log("Voce foi reprovado !! ", "nota - ", media);
    }
}