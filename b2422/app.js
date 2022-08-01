const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(" ").map(Number);

let arr = Array.from({length: N+1}, ()=> Array.from({length: N+1}).fill(0));
let cnt = 0;

for(let i=0; i<M; i++){
    let [a, b] = input[i].split(" ").map(Number);
    arr[a-1][b-1] = 1;
    arr[b-1][a-1] = 1;
}

for(let i=0; i<N-2; i++){
    for(let j=i+1; j<N-1; j++){
        if(arr[i][j] ===1) continue;
        for(let k=j+1; k<N; k++){
            if(arr[i][k] === 1 || arr[j][k] === 1) continue;
            else cnt++;
            
        }
    }
}

console.log(cnt);