const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
let answer = 0;
const N = parseInt(input);
solution();
function solution(){
    for(let i=1; i<= N; i++){
        let nums = String(i).split('');
        let sum = nums.reduce((acc,v) => +acc + +v);
        console.log(i + sum);
        if( (i + sum) === N){
            answer = i;
            break;
        }

    }
    console.log(answer);
}