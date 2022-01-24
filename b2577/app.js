const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map((item) => +item);

solution(items);

function solution(items){
    let a = input[0];
    let b = input[1];
    let c = input[2];

    let num = a*b*c;
    let numArray = [];

    let numArrayList = '';
    for(let i=1; i<num; i*= 10){
        numArrayList = Math.floor(num%(i*10)/i);
        numArray.push(numArrayList);
    }
    console.log(numArray);

    let ans = [0,0,0,0,0,0,0,0,0,0];
    for(let k=0; k<=9; k++){
        for(let i=0; i<numArray.length; i++){
            if(numArray[i] === k){
                ans[k]++;
            }

        }

    }
        

    

    for(let k=0; k<=9; k++){
        console.log(`${k} : ${ans[k]}`);
    }
}