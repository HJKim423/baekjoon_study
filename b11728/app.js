const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N,M] = input[0].split(' ').map(Number);
const A = input[1].trim().split(' ').map(Number).sort((a,b)=>a-b);
const B = input[2].trim().split(' ').map(Number).sort((a,b)=>a-b);

let result = [];
let a = 0;
let b = 0;

while(result.length < N+M){
    if(A[a] > B[b]){
        if(b>M-1){
            result.push(A[a]);
            a++;
        }
        else{
            result.push(B[b]);
            b++;
        }
        
    }
    else{
        if(a>N-1){
            result.push(B[b]);
            b++;
        }
        else{
            result.push(A[a]);
            a++;
        }
        
    }
}

console.log(result.join(" "));