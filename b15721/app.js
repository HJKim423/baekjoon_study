const [A,T,B] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n").map(Number);

let arr = [];
let bbun = 0;
let daegi = 0;
let turn = 1;
let answer = 0;

while(arr.length <= 10000){
    for(let i=0; i<4+ (turn+1)*2 ; i++){
        if(i < 4){ //뻔-데기-뻔-데기
            if(i % 2 ===0){
                arr.push(0);
            }
            else{
                arr.push(1);
            } 
        }else if(i <4 + (turn+1)){ 
            arr.push(0);
        }else{
            arr.push(1);
        }
    }
    turn++;

}

let cnt = 0;
arr.map((v,i)=>{
    if(v=== B) cnt++;
    if(cnt === T && v===B){
        answer = i % A;
    }
})

console.log(answer);