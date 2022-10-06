const entrada = require("prompt-sync")({
    sigint: true
});

//
var acumu = [];

for (var i = 0; i <= 4; i++) {
    
    let num = parseInt(entrada("Digite um numero: "));

    let numPor2, numPor3;

    numPor2 = (num % 2);
    numPor3 = (num % 3);

    if ( (num % 2) == 0 && (num % 3) == 0) {

        
        acumu.push(num);

        console.log(acumu);

    }



}