const N = +require('fs').readFileSync(__dirname+'/input.txt');
let cnt = 0;
let dp = Array(N+1).fill(0);

dp[2] = 1;
dp[3] = 1;

for(let i=4; i<=N; i++){
    dp[i] = dp[i-1] + 1;
    
    if(i%3 === 0){
        dp[i] = Math.min(dp[i], dp[i/3]+1);
    }
    if(i%2 === 0){
        dp[i] = Math.min(dp[i], dp[i/2]+1);
    }
}

console.log(dp[N]);