const inputData = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();

solution();
function solution(){
    let answer = [];
    answer[0] = 0;
    answer[1] = 1;

    for(let i=2; i<=inputData; i++){
        answer[i] = answer[i-2] + answer[i-1];
        console.log(answer[i]);
    }
    console.log(answer[inputData]);

}
