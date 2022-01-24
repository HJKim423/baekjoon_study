const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputC = +input[0];
const inputTestCase = [];
for (let i = 1; i <= inputC; ++i) {
    const arr = input[i].split(' ').map((item) => +item);
    const newArr = [];
    for (let i = 1; i <= arr[0]; ++i) {
        newArr.push(arr[i]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr,
    };
    inputTestCase.push(testCase);
}
solution(inputC, inputTestCase);

function solution(C, testCase) {
    for(let i=0; i<C; i++){
        let stdNum = testCase[i].N;
        let stdScore = testCase[i].arr;

        let allAdd = 0;

        for(let k=0; k<stdNum; k++){
            allAdd += stdScore[k];
        }
        let avg = allAdd/stdNum;
        let cnt = 0;

        for(let k=0; k<stdNum; k++){
            if(stdScore[k] > avg){
                cnt++;
            }
        }
        let ans = cnt / stdNum * 100;
        console.log(ans.toFixed(3)+"%");

    }
}