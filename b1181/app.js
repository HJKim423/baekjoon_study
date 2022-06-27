const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const arrLen = input.shift();



solution();

function solution(){
    
    input.sort((a,b) =>{
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    
    });

    const set = new Set(input);
    const answer = [...set];
    
    answer.map(v=> console.log(v));

}

