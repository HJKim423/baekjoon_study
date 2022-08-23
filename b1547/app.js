const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");
const m = +input.shift();

let arr = [0,1,2,3];

for(let i=0; i<m; i++){
    let [x,y] = input[i].split(" ").map(Number);
    let x_idx = arr.indexOf(x);
    let y_idx = arr.indexOf(y);

    arr[x_idx] = y;
    arr[y_idx] = x;


}

console.log(arr);

