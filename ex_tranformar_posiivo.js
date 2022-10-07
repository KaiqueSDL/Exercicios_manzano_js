const entrada = require('prompt-sync')({sigint:true});

// Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo umvalor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. 

var valor;

valor = entrada("digite um valor: ");

console.log(Math.abs(valor));