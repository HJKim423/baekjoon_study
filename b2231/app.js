const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
const n = +input;

let answer = 0;
let num = 0;

while(num < n){
    let nums = num.toString().split('').map(Number);
    let sum = nums.reduce((acc, v) => acc+v) + num;
    if(sum === n){
        answer = num;
        break;
    }
    num++;
}

console.log(answer);