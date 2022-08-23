const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");
const n = +input[0];
let score = input[1].split(" ").map(Number);
const m = Math.max(...score);

let new_score = score.map(v=>{
    return v/m*100;
})

console.log(new_score.reduce((acc,v)=>acc+v)/n);