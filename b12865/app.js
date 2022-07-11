const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, K] = input.shift().split(" ").map(Number);
const array = [];

for(let i=0; i<N; i++){
    array.push(input[i].split(" ").map(Number));
}

let dp = Array.from({length: N+1}, ()=> Array.from({length: K+1}).fill(0));

for(let i=1; i<=N; i++){
    for(let j=1; j<=K; j++){
        if(array[i][0] <= j){
            dp[i][j] = Math.max(array[i][1] + dp[i-1][j-array[i][0]], dp[i-1][j]);
        }
        else {
            dp[i][j] = dp[i-1][j];
        }
    }
}

console.log(dp[N][K]);