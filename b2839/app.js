const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
let N = +input;
let cnt = 0;

while(N > 0){
    if(N % 5 === 0){
        N -= 5;
        cnt++;
    }else{
        N -= 3;
        cnt++;
    }
}
if(N < 0) cnt = -1;
console.log(cnt);