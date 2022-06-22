const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n')

const arrayLength = +input[0];
const items = input[1].split('').map(Number);

solution();

function solution(){
    let answer = items.reduce((acc,v) => acc+v);
    console.log(answer);

}
