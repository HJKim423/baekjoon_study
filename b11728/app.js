const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N,M] = input[0].split(' ').map(Number);
const A = input[1].trim().split(' ').map(Number).sort((a,b)=>a-b);
const B = input[2].trim().split(' ').map(Number).sort((a,b)=>a-b);

let answer = [];
let i = 0;
let j=0;

while(answer.length < (N+M)){
    if(A[i] > B[j]){
        if(j>=M){
            answer.push(A[i]);
        }
        else{
            answer.push(B[j]);
            j++;
        }
        
    }else{
        if(i>=N){
            answer.push(B[j]);
        }
        else{
            answer.push(A[i]);
            i++;
        }
        
    }
}

console.log(answer.join(' '));