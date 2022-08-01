const [N, M] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);
let result = [];
let answer = '';

function dfs(v){
    if(result.length === M){
        answer += result.join(' ');
        answer += "\n";
        return;

    }
    for(let i=1; i<=N; i++){
        result.push(i);
        dfs(v+1);
        result.pop();
    }
    

}
dfs(1);
console.log(answer);

