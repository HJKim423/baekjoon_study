const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

let board = [];
let sum = Array.from(Array(n+1), ()=>Array(n+1).fill(0));

let answer = [];
for(let i=1; i<=n; i++){
    board.push(input[i].trim().split(' ').map(Number));
}


for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        sum[i][j] = sum[i-1][j]+ sum[i][j-1] - sum[i-1][j-1] + board[i-1][j-1];
    }
}
for(let i=n+1; i<=n+m; i++){
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    answer.push(sum[x2][y2] - sum[x2][y1-1] - sum[x1-1][y2] + sum[x1-1][y1-1]);
    
}

console.log(answer.join("\n"));