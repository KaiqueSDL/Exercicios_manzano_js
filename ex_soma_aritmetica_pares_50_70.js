const entrada = require('prompt-sync')({sigint:true});

//Elaborar  um  programa  que  apresente  os  resultados  da  soma  e  da  média  aritmética  dos  valores pares situados na faixa numérica de 50 a 70. 

var acumu = [];
for(var i = 50; i <= 70 ; i++){
    if(i % 2 == 0){
        acumu.push(i);
        
    }
    
}


function soma(){
    let somatorio = 0;
    for(let y in acumu){
         somatorio += acumu[y];
    }
    return somatorio;
}
console.log(`soma dos valores pares = ${soma()}`);
console.log(`media aritmetica  dos valores pares = ${soma() / acumu.length}`);