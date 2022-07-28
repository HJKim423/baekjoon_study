const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const S = input[0].split('');
const K = input[1];
let s='';
let answer = 0;

for(let i=0; i<S.length; i++){
    if(S[i]>='0' && S[i]<='9'){
        s += '';
    } 
    else s += S[i];
}

if(s.includes(K)) answer = 1;
console.log(answer);
