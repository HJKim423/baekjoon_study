const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
const arrK = input[1].split(" ").map(Number);

let answer = 0;

function dfs(v){
    if(v>N) return;

    answer = Math.max(v, answer);
    for(let i=0; i<K; i++){
        dfs(v*10 + arrK[i]);
    }

}
dfs(0);
console.log(answer);

// while(true){
//     let numArr = num.toString().split("");
//     let cnt = 0;
//     numArr.map(v=> {
//         if(arrK.indexOf(v) === -1){
//             cnt++;
//         }
//     })

//     if(cnt > 0){
//         num--;
//     }
//     else {
//         answer = num;
//         break;
//     }

// }
// console.log(answer);