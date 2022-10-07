const entrada = require("prompt-sync")({
    sigint: true
});

// Ler  quatro  valores  referentes  a  quatro  notas  escolares  de  um  aluno  e  imprimir  uma  mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição. 


var v1, v2, v3, v4;

v1 = parseInt(entrada("digite primeira nota: "));
v2 = parseInt(entrada("digite segunda nota"));
v3 = parseInt(entrada("digite terceira nota "));
v4 = parseInt(entrada("digite quarta nota "));

let soma = (v1 + v2 + v3 + v4)
var media = soma / 4;

if (media >= 5) {
    console.log("APROVADO", "nota - ", media)
    console.log(soma);

} else {
    console.log("REPROVADO", "nota - ", media)
}