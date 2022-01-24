const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.slice(0);

solution(items);

function solution(items){
    item = items[0];
    console.log(item.charCodeAt(0));

}