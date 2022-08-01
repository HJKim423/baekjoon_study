const [N, M] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);
let visited = new Array(N+1).fill(0);
let result = [];
let answer = '';

function dfs(v){
    if(result.length === M){
        for(let i=1; i<=N; i++){
                answer += result.join(' ');
                answer += "\n";
            
            return;
        }
        
    }
    else{
        if(visited[v]===0){
            visited[v] = 1;
            result.push(v);
            dfs(v+1);
            visited[v] = 0;
            result.pop();
            dfs(v+1);
        }
        
    }
}

dfs(1);
console.log(answer);
