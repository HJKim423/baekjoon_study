const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();

solution();

function solution(){
    if(input !== 0){
        
    }
    console.log(parseInt(input,8).toString(2));
}

