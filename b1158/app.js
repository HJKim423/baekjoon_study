const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
const [n, k] = input.split(" ").map(Number);

let queue = Array.from({length:n}, (v,i)=>i+1);
console.log(queue);

while(queue.length < n){

}