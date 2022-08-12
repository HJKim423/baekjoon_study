
const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const N = +input.shift();
const arr = input.map(Number);

let dp = Array(N+1).fill(0);
dp[0] = 0;
dp[1] = arr[0];
dp[2] = dp[1] + arr[1];

for(let i=3; i<=N; i++){
    dp[i] = Math.max(arr[i-2]+ dp[i-3] + arr[i-1], dp[i-2] + arr[i-1] );
}

console.log(dp[N]);
