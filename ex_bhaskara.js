const entrada = require('prompt-sync')({
    sigint: true
});


// Efetuar  a  leitura  de  três  valores  (variáveis  A, B  e  C)  e  efetuar  o  cálculo  da  equação  completa  de segundo  grau,  apresentando  as  duas  raízes,  se  para os  valores  informados  for  possível  efetuar  o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero. 



console.log("BHASKARA");

var a, b, c;

a = parseInt(entrada("Digite o valor de A: "));
b = parseInt(entrada("Digite o valor de B:"));
c = parseInt(entrada("Digite o valor de C: "));

var delta;



if (a >= 0) {
    delta = Math.pow(b, 2) - 4 * a * c;

    var b1, b2;

    b1 = -b + Math.sqrt(delta) / (2 * a);
    b2 = -b - Math.sqrt(delta) / (2 * a);

    console.log("b1 -- " + b1);

    console.log("b2 -- " + b2);
} else {
    console.log("Os numeros estao errados !!")
}