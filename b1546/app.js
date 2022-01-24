const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];
const items = input[1].split(' ').map((item) => +item);

solution(n, items);

function solution(n, items){
    let max = items[0];
    let ans = 0;
    let hap = 0;

    for(let i=0;i<items.length;i++){
        if(max<items[i]){
            max = items[i];
        }
    }
    for(let i=0;i<items.length;i++){
        hap += items[i]/max*100;
    }
    ans = hap/n;
    
    console.log(ans);
}