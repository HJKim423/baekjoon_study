const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");
const n = +input[0];
const m = +input[1];

let arr = Array.from({length:n+1}, ()=>Array());
let visited = Array(n+1).fill(0);
let cnt = 0;

for(let i=2; i<m+2; i++){
    let [a,b] = input[i].split(" ").map(Number);
    arr[a].push(b);
    arr[b].push(a);
}
visited[1] = 1;
dfs(1);


function dfs(n){
    for(let v of arr[n]){
        if(visited[v] === 0){
            visited[v] = 1;
            cnt++;
            dfs(v);
        }
    }
    
}
console.log(cnt);