const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
const arrK = input[1].split(" ").map(Number);

let answer = N;
while(answer > 0){
    
    let ansArr = answer.toString().split('').map(Number);
    let cnt=0;
    ansArr.map(v=> {
        if(arrK.indexOf(v) !== -1){
            cnt++;
        }
    });
    if(cnt === ansArr.length){
        console.log(answer);
        break;
    }else{
        answer--;
        continue;
    }
}

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