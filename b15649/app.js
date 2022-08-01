const [N, M] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);

let visited = new Array(N+1).fill(0);
let result = [];
let answer = '';

function dfs(v){
    if(result.length === M){
        answer += result.join(' ');
        answer += "\n";
        return;
        
        
    }
    for(let i=0; i<N; i++){
        if(visited[i]===1) continue;
        else{
            visited[i] = 1;
            result.push(i+1);
            dfs(v+1);
            result.pop();
            visited[i] = 0;
        }
        
        
    }
}

dfs(1);
console.log(answer.trim());

// for(let i=0; i<result.length; i++){
//     console.log(result[i]);
// }