const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n')

solution();


function solution(){
    let answer ='';
    for(let i=0; i<Math.max(...input.map(i=> i.length)); i++){
        for(let j=0; j<input.length; j++){
            if(input[j][i] === undefined  || input[j][i] === '\r') {
                continue;
            }
            else{
                answer += input[j][i];
            }
        }

    }

    console.log(answer);
} 