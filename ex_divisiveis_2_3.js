// Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3. 
const entrada = require('prompt-sync')({
    sigint: true
})



for (var i = 0; i <= 4; i++) {

    let num = parseInt(entrada("Digite o valor: "));

   
    if (numPor2 == 0 && numPor3 == 0) {
        var acumu = [];
        acumu.push(num);


    }
};




for (var x = 0; x <= 4; x++) {
    console.log(acumu[x]);
}