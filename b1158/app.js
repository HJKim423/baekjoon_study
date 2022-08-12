const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
const [n, k] = input.split(" ").map(Number);

let queue = Array.from({length:n}, (v,i)=>i+1);
let arr = [];
let cnt = 1;

while(queue.length > 0){
    let item = queue.shift();
    if(cnt === 3){
        arr.push(item);
        cnt = 1;
    }
    else{
        queue.push(item);
        cnt++;
    }
    
}


console.log("<"+arr.join(", ")+">");
