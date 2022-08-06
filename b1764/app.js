const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);

let arr = {};
let result = [];

for(let i=1; i<=n; i++){
    let name = input[i];
    if(arr[name] === undefined) arr[name] = 1;
    
    
}
console.log(arr);

for(let j=n+1; j<= n+m; j++){
    let name = input[j];
    if(arr[name] === 1) result.push(input[j]);
}

result.sort();
console.log(result.length + "\n"+ result.join("\n"));