const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(" ").map(Number);

let no = Array.from({length : N+1}, () => Array(N+1).fill(0));
let cnt = 0;

for(let i=0 ; i<M; i++){
    let [a,b] = input[i].split(" ").map(Number);
    no[a][b] = 1;
    no[b][a] = 1;
}
for(let i=1; i<=N; i++){
    for(let j=i+1; j<=N; j++){
        if(no[i][j] === 1) continue;
        for(let k=j+1; k<=N; k++){
            if(no[i][k] === 1 || no[j][k] === 1) continue;
            cnt++;
        }
    }
}

console.log(cnt);