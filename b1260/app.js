const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, M, V] = input[0].split(" ").map(Number);
let graph = Array.from({length : N+1}, () => Array.from({length: N+1 }).fill(0));
let visited = Array.from({length : N+1}, () => 0);
let visited2 = Array.from({length : N+1}, () => 0);
let answer = [];
let answer2 = [];


for(let i=1; i<input.length; i++){
    let [x, y] = input[i].split(" ").map(Number);
    graph[x][y] = 1;
    graph[y][x] = 1;
}

visited[V] = 1;
answer.push(V);
DFS(V);

function DFS(v){
        for(let i=1; i<= N; i++){
            if(graph[v][i] === 1 && visited[i] === 0){
                visited[i] = 1;
                answer.push(i);
                DFS(i);
            }
        }
    
    
}
console.log(answer.join(" "));
BFS(V);

function BFS(v){
    let queue = [];
    queue.push(v);
    visited2[v] = 1;
    answer2.push(v);
    while(queue.length !== 0){
        let x = queue.shift();

        for(let i=1; i<= N; i++){
            if(graph[x][i] === 1 && visited2[i] === 0){
                queue.push(i);
                visited2[i] = 1;
                answer2.push(i);
            }
        }
    }


}

console.log(answer2.join(' '));