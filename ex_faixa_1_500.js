const entrada = require("prompt-sync")({
    sigint: true
});


// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

let cont = 1;
var paresFaixa = [];

//Laço de repeticao para guardar os numeros pares da faixa de 1 a 500
while (cont <= 500) {
    if (cont % 2 == 0) {
        paresFaixa.push(cont);
    }
    cont++
}

//Funcao para somar o array
function somar() {
    let somatorio = 0;
    for (let i in paresFaixa) {
        somatorio += paresFaixa[i];
    }
    return somatorio
}
console.log(`faixa par  de 1 a 500  = ${paresFaixa}`)
console.log(`SOMATORIO = ${somar()}`);