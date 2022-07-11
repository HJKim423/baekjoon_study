const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const A = +input[0];
const B = input[1].split(" ").map(Number);

let dp = Array(A).fill(1);


for(let i=0; i<A; i++){
    let max = 0;
    for(let j=0; j<i; j++){
        if(B[i] > B[j] && dp[j] > max){
            max = dp[j]
        }
    }
    dp[i] = max + 1;
}

console.log(Math.max(...dp));