const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input[0].split('');

solution(items);

function solution(items){
    let ans = [];
    for(let k=97; k<=122;k++){
        let alphabet = String.fromCharCode(k);
        
        ans.push(items.indexOf(alphabet));

    
    }
    console.log(ans.join(''));
    
    
}