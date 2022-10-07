const entrada = require('prompt-sync')({
    sigint: true
});

//Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

var num = 1;
var cont = 1;

while (cont <= 100) {
    num += cont;
    cont++;

}

console.log('resultado' + num);