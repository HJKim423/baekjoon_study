const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrayLength = +input[0];
const items = input.slice(1);

solution(arrayLength, items);

function solution(arrayLength, items){
    

    for(let i=0; i<arrayLength;i++){
        let cnt = 0;
        let ans = 0; //변수가 for문 안에 있어야함!!!!!~!!!!!
        let item = items[i];
        for(let k=0; k<item.length;k++){
            if(item[k] == "O"){
                
                cnt++;
                ans += cnt;
            }else{
                cnt=0;
            }
            
        }

        console.log(ans);
        ans = 0;

    }
}