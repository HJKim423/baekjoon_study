
const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const N = +input[0];
const linkLength = +input[1];
const linkArr = [];
let graph, visited;
let cnt=0;

for(let i=2; i<linkLength+2; i++){
    linkArr.push(input[i].split(' ').map(Number));
}

solution();

function solution(){
    graph = Array.from({length:N+1}, ()=>Array());
    visited = Array.from({length: N+1}, ()=>0);
    for(let [a,b] of linkArr){
        graph[a].push(b);
        graph[b].push(a);
    }
    
    visited[1] = 1;
    dfs(1);

    console.log(cnt);
}

function dfs(n){
    for(let v of graph[n]) {
        if(!visited[v]){
            visited[v] =1;
            cnt++;
            dfs(v);
        }
    };

}