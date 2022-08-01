const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n').map(Number);
const N = +input.shift();

let dp = Array(N).fill(1);
dp[0] = input[0];

for(let i=1; i<N; i++){
    dp[i] = Math.max(dp[i-1]*input[i], input[i]);
}
console.log(Math.max(...dp).toFixed(3));