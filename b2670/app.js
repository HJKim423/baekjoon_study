const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const N = +input.shift();


let max = [];
    for(let i=0; i<N; i++){
        max[0] = +input[0];
        if(N>1){
            max[i] = Math.max(input[i], max[i-1]*input[i]);
        }
        
    }
console.log(max);

function roundToTwo(num) {
    return +(Math.round(num + "e+3")  + "e-3");
}
console.log(roundToTwo(Math.max(...max)));