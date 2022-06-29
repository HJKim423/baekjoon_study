const [N, M] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);
let visited = new Array(N).fill(0);
let result = [];
let answer = '';


function solution(n){
    console.log(n);
    if(n== M){
        answer += result.join(' ');
        answer += "\n";
        return;
    }

    for(let i=0; i< N; i++){
        if(visited[i] === 1) continue;
        else{
            visited[i] = 1;
            result.push(i+1);  
            solution(n+1);
            result.pop();
            visited[i] = 0;
            
        }
    }

}
solution(0);
console.log(answer.trim());
