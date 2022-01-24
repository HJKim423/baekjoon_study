const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    let res = 0;
    let ans = 0;
    let num = N;

    while(N !== res || ans===0){
        let a = Math.floor(num/10);
        let b = num%10;
    
        res = b*10 + (a+b)%10;
        num=res;
        ans++;
    }

    console.log(ans);

}