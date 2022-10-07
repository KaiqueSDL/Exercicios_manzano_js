const entrada = require("prompt-sync")({sigint:true});


var celsius =10;
var gah = 0;

while(celsius <=100){
    fah = (celsius * 9 / 5) + 32;
    console.log(`${fah}`);

    celsius+=10;
}

