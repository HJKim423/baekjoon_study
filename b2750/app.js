const inputData = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n')
const dataNumber = +inputData[0];
inputData.shift()



    inputData.sort((a,b)=>a-b);
    
    for(let i=0; i<dataNumber; i++){
        console.log(inputData[i]);
    }




// const inputData = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')