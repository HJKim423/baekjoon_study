const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
let answer = 5000;

for(let i=0; i*5<= input; i++){
    for(let j=0; j*3 <= input; j++){
        if(+(i*5+j*3) === +input){
            if( Number(i+j) < answer) answer = i+j;
        }
        
    }
}
if(answer === 5000) answer = -1;
console.log(answer);