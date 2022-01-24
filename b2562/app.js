const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map((item) => +item);

solution(items);

function solution(items){
    let max = items[0];
    let num = 0;

    for(let i=0; i<9; i++){
        item = items[i];
        if(max < item){
            max = item;
            num = i;
        }
        
    }
    console.log(max);
    console.log(num+1);
}