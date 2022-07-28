const [R, C, W] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);

let dp = Array.from(Array(30), (v, i)=> Array.from({length: i}).fill(1));
let answer = 0;
console.log(dp);
for(let i=2; i<=dp.length; i++){
    for(let j=1; j<i; j++){
        if(j !== 0 && j !== i-1){
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
        }  
    }
}

let n=W;
for(let i=R-1; i<R-1+W; i++){
    n--;
    for(let j=n; j<=W; j++){
        answer += Number(dp[i][j+C-1]);
    }
}

console.log(answer);