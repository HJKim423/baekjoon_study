const N = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
let answer = 0;

solution();
function solution(){
    for(let i=1; i<= N; i++){
        let nums = String(i).split('');
        let sum = nums.reduce((acc,v) => +acc + +v);
        
        if( (i + sum) === +N){
            answer = i;
            break;
        }

    }
    console.log(answer);
}