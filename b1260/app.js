const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");
const [n, m, v] = input.shift().split(" ").map(Number);

let graph = Array.from({length:n+1}, () => Array(n+1).fill(0));
let visitedD = Array(n+1).fill(0);
let visitedB = Array(n+1).fill(0);

let answerD = [];
let answerB = [];

for(let i=0; i<m; i++){
    let [a,b] = input[i].split(" ").map(Number);
    graph[a][b] = 1;
    graph[b][a] = 1;
}

visitedD[v] = 1;
answerD.push(v);


const dfs = (v) => {
    for(let i=1; i<=n; i++){
        if(graph[v][i] === 1 && visitedD[i] === 0){
            visitedD[i] = 1;
            answerD.push(i);
            dfs(i);
        }
    }

}
dfs(v);
console.log(answerD.join(" "));


const bfs = (v) => {
    let queue = [];
    queue.push(v);
    answerB.push(v);
    visitedB[v] = 1;
    while(queue.length){
        let x = queue.shift();

        for(let i=1; i<=n; i++){
            if(graph[x][i] === 1 && visitedB[i] === 0){
                queue.push(i);
                visitedB[i] = 1;
                answerB.push(i);
            }
        }
    }
}
bfs(v);
console.log(answerB.join(" "));