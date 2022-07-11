const [N, K] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);

let dp = Array.from({length: N+1}, ()=> Array.from({length:N+1}).fill(0));

for (let n = 1; n <= N; n++) {
    for (let k = 0; k <= n; k++) {
        if (k == 0 || n == k) {
            dp[n][k] = 1;
        }
        else dp[n][k] = (dp[n - 1][k] + dp[n - 1][k - 1]) % 10007;
        }
    }

console.log(dp[N][K]);