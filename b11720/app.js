const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrayLength = +input[0];
const items = input[1].split('');

solution(arrayLength, items);

function solution(arrayLength, items){
    let ans = 0;

    for(let i=0 ; i<arrayLength; i++){
        ans += Number(items[i]);
    }

    console.log(ans);
}