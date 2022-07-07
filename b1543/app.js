const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const docu = input[0];
const word = input[1];
const wordLen = word.length;
let cnt = 0;
for(let i=0; i<docu.length; i++){
    if(docu.slice(i, i+wordLen) === word){
        cnt++;
        i += wordLen-1;
    }
    
}

console.log(cnt);