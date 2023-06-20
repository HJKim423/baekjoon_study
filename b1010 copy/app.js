const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");
const T = +input.shift();

for(let i=0; i<T; i++){
    [a,b] = input[i].split(' ').map(Number);
    let dp = Array.from(Array(30), ()=> Array(30).fill(0));

    for(let i=1; i<=a; i++){
        for(let j=b; j<=b; j++){
            if(i===1){
                dp[i][j] = j;
            }
            else if(i === j){
                dp[i][j] = 1;
            }
            else{
                for(let k=1; k<j; k++){
                    dp[i][j] += dp[i-1][j];
                }

            }
            
        }
    }
    console.log(dp[a][b]);

}