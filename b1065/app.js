const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map((item) => +item);

solution(items);

function solution(items){
    let item = items[0];
    let count = 0;

    for(let i=1; i<=item; i++){
        let arr = String(i);
        
        
        if(i<100){
            count++;
        }
        else if(i>=100){
            let A = parseInt(arr[0]);
            let B = parseInt(arr[1]);
            let C = parseInt(arr[2]);
            let D = B-A;
            
            
                if(B+D === C){
                    count++;
                }
            
        }

    }
    console.log(count);
}