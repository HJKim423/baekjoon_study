const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");

let gear = [];
for(let i=0; i<4; i++){
    gear.push(input[i].trim().split("").map(Number));
}
const k = +input[4];
const [L, R] = [6, 2];


for(let j=5; j<5+k; j++){
    let check = Array(4).fill(0); //1,L이면 반시계, 2,R면 시계
    let [n,d] = input[j].split(" ").map(Number);
    let a,b;
    if(d===-1){//반시계
        a = 1; // 반시계
        b = 2; // 시계
    }
    else if(d===1){//시계
        a = 2;
        b = 1;
    }

    let i=n;
    let idx = 1;
    check[i-1] = a;
    while(i<4){ //오른쪽 톱니바퀴들
        if(gear[i-1][R] !== gear[i][L]){
            if(idx%2 !== 0){
                check[i] = b;
            }
            else{
                check[i] = a;
            }
        }else{
            break;
        }
        i++;
        idx++;
    }

    i=n;
    idx=1;
    while(i-2>=0){ //왼쪽 톱니바퀴들
        if(gear[i-1][L] !== gear[i-2][R]){
            if(idx%2 !== 0){
                check[i-2] = b;
            }
            else{
                check[i-2] = a;
            }
        }else{
            break;
        }
        i--;
        idx++;
    }   

for(let i=0; i<4; i++){
    if(check[i] === 1){//반시계
        rotateL(gear[i]);
    }
    else if(check[i] === 2){//시계
        rotateR(gear[i]);
    }
}

}


function rotateR(gear){ //시계방향회전
    let temp = gear.pop();
    gear.unshift(temp);
    return gear;
}

function rotateL(gear){ //반시계방향회전
    let temp = gear.shift();
    gear.push(temp);
    return gear;
}

let answer = 0;

if(gear[0][0] === 1) answer += 1;
if(gear[1][0] === 1) answer += 2;
if(gear[2][0] === 1) answer += 4;
if(gear[3][0] === 1) answer += 8;
console.log(answer);