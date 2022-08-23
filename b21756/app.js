const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
const n = +input;
let arr = Array.from({length:n}, (v,i)=>i+1);

while(arr.length > 1){
    for(let i=0; i<=arr.length; i++){
        arr.splice(i,1);
    } 
}
console.log(arr[0]);