const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, K] = input.shift().split(" ").map(Number);

let dp = Array.from({length: N+1}, ()=> Array.from({length: K+1}).fill(0));

for(let i=1; i<=N; i++){
    let [w, v] = input[i-1].split(" ").map(Number)
    for(let j=1; j<=K; j++){
        if(j-w >= 0){
            dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-w]+v);
        }
        else {
            dp[i][j] = dp[i-1][j];
        }
    }
}

console.log(dp[N][K]);