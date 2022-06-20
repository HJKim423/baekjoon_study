const inputData = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n')
const dataNumber = +inputData[0];
inputData.shift()

solution();

function solution(){

    for(let i=0; i<dataNumber; i++){
        let nums = inputData[i].split(" ");

        console.log(`Case #${i+1}: ${+nums[0] + +nums[1]}`);

    }


}