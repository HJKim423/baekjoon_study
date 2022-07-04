const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
let stone = +input;

let i=0;
while(stone >= 0){
    console.log(stone, i);
    if(stone >=3){
        stone -= 3;
        i++;
    }
    else{
        stone -= 1;
        i++;
    }
}

if(i%2 === 0){
    console.log("SK");
}
else{
    console.log("CY");
}