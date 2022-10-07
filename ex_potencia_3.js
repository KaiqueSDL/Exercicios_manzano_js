const entrada = require("prompt-sync")({sigint:true});


//Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado  que  qualquer  número  elevado  a  zero  é  1,  e  elevado  a  1  é  ele  próprio.  Observe  que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 


var numero = 0; 
var expo = 0 ;

while(expo <= 15){
    numero = 3 ** expo;
    console.log(` 3 ^ ${expo}  = ${numero} `);
    expo++
}