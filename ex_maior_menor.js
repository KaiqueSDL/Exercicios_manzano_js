const entrada = require('prompt-sync')({
    sigint: true
});


// Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.
var acumu = [];

for (var i = 0; i < 5; i++) {

    var num = parseInt(entrada("Digite um numero: "));

    acumu.push(num);
    console.log(acumu);


}

acumu.sort(function (a, b) {
    return a - b;
});



console.log("primeira " + acumu[0] + "ultima " + acumu[4]);




























// var acumu = ['kaique' ,  'Gabriel' , 'Gustavo'];
// for(var i = 0 ; i <3 ; i++){



//     console.log(acumu[i]);

// }