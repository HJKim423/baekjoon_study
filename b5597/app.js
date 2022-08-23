const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n").map(Number);

let answer = [];
for(let i=1; i<=30; i++){
    if(!input.includes(i)){
        answer.push(i);
    }
}

answer.sort((a,b)=>a-b);
console.log(answer.join("\n"));