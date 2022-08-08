const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum=[];
let answer = '';
sum[0] = 0;
sum[1] = arr[0];
for(let j=1; j<n; j++){
    sum[j+1] = sum[j] + arr[j];
}

for(let i=2; i<m+2; i++){
    let [a, b] = input[i].split(" ").map(Number);
    answer += sum[b] - sum[a-1];
    if(i < m+1){
        answer += "\n";
    }
    
}
console.log(answer);