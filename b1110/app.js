const inputData = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();

solution();

function solution(){
    let ten = Math.floor(inputData/10);
    let one = inputData%10;
    let num = one*10 + (ten+one)%10;
    let cnt =1;


    while(+inputData !== num){
        ten = Math.floor(num/10);
        one = num%10;
        num = one*10 + (ten+one)%10;
        cnt++;

    }
    console.log(cnt);
}   
