const inputData = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n')
const dataNumber = +inputData[0];
inputData.shift()



solution();

function solution(){
    for(let i=0; i<dataNumber; i++){
        let cnt=0;
        let answer = 0;
        let input = inputData[i];

        for(let j=0; j<input.length; j++){
            if(input[j] === 'O') {
                cnt++;
                answer += cnt;
            }
            else if(input[j] === 'X'){
                cnt = 0;
            }
        }
    
        console.log(answer);
    }
}