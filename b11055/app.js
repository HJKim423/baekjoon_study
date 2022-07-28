const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(" ").map(Number);

let dp = Array.from(Array(N), (v,i)=>A[i]);

for(let i=0; i<N; i++){
    for(let j=0; j<i; j++){
        if(A[i] > A[j] && dp[i] < dp[j] + A[i]){
            dp[i] = A[i] + dp[j];
        }
        
    }
    
    
}
console.log(dp);

console.log(Math.max(...dp));