const entrada = require('prompt-sync')({sigint:true});

// Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores. 

for(var i = 0; i < 6; i++){
    var num = parseInt(entrada('Digite o seu numero  - ' + i + ' -- '));

    var array = [];
    array[i].push(num);
}

console.log(array);