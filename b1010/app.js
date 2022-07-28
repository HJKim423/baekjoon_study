const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const TestCase = +input.shift();
let N,M;


for(let i=0; i<TestCase; i++){
    [N,M] = input[i].split(' ').map(Number);
    let dp = Array.from(Array(30), ()=> Array(30).fill(0));

    for(let n=1; n<=N; n++){
        for(let m=n; m<=M; m++){
            if(n===1){
                dp[n][m] = m;
            }
            else if(n === m){
                dp[n][m] = 1;
            }
            else{
                for(let k=1; k<m; k++){
                    dp[n][m] += dp[n-1][k];
                }

            }
            
        }
    }
    console.log(dp[N][M]);

}

