const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const pop = input.pop();

solution();

function solution(){
    input.map(v=>{
        if(+v === +v.split('').reverse().join('')) console.log("yes");
        else console.log("no");

        console.log((v));
        console.log((v.split('').reverse().join('')));
    })

    
}