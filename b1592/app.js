const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
const [n,m,l] = input.split(" ").map(Number);

let arr = Array(n).fill(0);
let cnt = 0;

let i = 0;
arr[0]++; // 일단 1번 자리에 앉은 사람이 공을 받는다.

while(!arr.includes(m)){
    i += l;
    arr[i%n]++;
    cnt++;
}

console.log(arr, cnt);