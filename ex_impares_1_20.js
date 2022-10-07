const entrada = require("prompt-sync")({
    sigint: true
});

//Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.


var num = 0;

while (num <= 20) {

    if (num % 2 != 0) {
        console.log(num);
    }
    num++
}