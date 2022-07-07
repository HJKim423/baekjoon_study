const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
const arrK = input[1].split(" ").map(Number);

let answer =0;
let num = N.toString().split("");
let cnt = 0;

while(true){
    for(let i=0; i<K; i++){
        answer = (arrK[i] * (10 ** cnt)) + arrK[i];
        console.log(answer);
    }
    if(answer > N) break;
    else cnt++;
}

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