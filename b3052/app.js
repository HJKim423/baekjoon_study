const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map((item) => +item);

solution(items);

function solution(items){
    let item = 0;
    let  itemArray= [];
    let ansArray = Array(42).fill(0);
    let ans = 0;

    for(let i=0; i<10;i++){
        item = items[i]%42;

        for(let k=0; k<42;k++){
            if(item === k){
                ansArray[k]++;
            }
        }
        
    }
    for(let k=0; k<42;k++){
        if(ansArray[k] !== 0){
            ans++;
        }
    }

    

    console.log(ans);

    
    
}
