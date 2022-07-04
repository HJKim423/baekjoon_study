const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const inputNumber = +input.shift();
const fileArr = input;

solution();

function solution(){
    let arr=[];
    let result ='';
    let idx = 0;

    for(let i=0; i< inputNumber; i++){
        idx = fileArr[i].indexOf('.')+1;
        arr.push(fileArr[i].slice(idx).trim());
        idx = 0;
    }
    arr.sort();

    let cnt = 1;
    for(let i=1; i<=inputNumber; i++){
        
        if(arr[i] !== arr[i-1]){
            result += arr[i-1]+" " + cnt + "\n";
            cnt =1;
        }
        else{
            cnt++
            
        }


    }
    
    console.log(result);
}