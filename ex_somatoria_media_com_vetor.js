const entrada = require('prompt-sync')({sigint:true});

// Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos. 

var acumu = []
for(var i = 1 ; i < 11 ; i++){

    let num = parseInt(entrada('Digite um numero: '));

    acumu.push(num);
}


function somar() {
     let soma = 0;
     for(let x in acumu){
        soma += acumu[x];
     }
     return soma
}

console.log(`soma dos numeros ${somar()}`);
console.log(`media aritmetica ${somar()/10}`);
