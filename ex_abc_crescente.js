const entrada = require('prompt-sync')({
    sigint: true
});


//Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente. 


var a, b, c;

a = parseInt(entrada("Digite o valor de A: "));
b = parseInt(entrada("Digite o valor de B:"));
c = parseInt(entrada("Digite o valor de C: "));

if (a > b && a > c) {
    if (b > c) {
        console.log(c, ' - ', b, '-', a)
    }
} else if (b > c) {
    if (a > c) {
        console.log(c, ' - ', a, '-', b)
    }

} else if (a > b) {
    console.log(b, ' - ', a, '-', c)
} else {
    console.log(a, ' - ', b, '-', c)
}