const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('');

const numbers = [3,2,1,2,3,3,3,3,1,1,3,1,3,3,1,2,2,2,1,2,1,1,2,2,2,1];
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let sum = 0;
solution();

function solution(){
    for(let i=0; i<input.length; i++){
        sum += numbers[alphabet.indexOf(input[i])];
    }

    if(sum % 2 !==0){
        answer = "I'm a winner!";
    }else{
        answer = "You're the winner?";
    }
}

console.log(answer);