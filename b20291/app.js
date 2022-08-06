const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const n = +input.shift();

let file = [];
let idx = 0;

for(let i=0; i<n; i++){
    idx = input[i].indexOf(".")+1;
    file.push(input[i].slice(idx).trim());
}

file.sort();

let cnt = 0;
let answer = '';

for(let i=0; i<file.length; i++){
    cnt++;
    if(file[i] !== file[i+1]){
        answer += file[i] + " " + cnt;
        cnt = 0;
        if(i !== file.length-1){
            answer += "\n";
        }
    }
}

console.log(answer);