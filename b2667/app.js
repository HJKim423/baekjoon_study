const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const N = +input.shift();

let board = [];
let dx = [-1,0,1,0];
let dy = [0,-1,0,1];
let queue = [];
let cnt = 0;
let arr = [];

for(let i=0; i<N; i++){
    board.push(input.shift().trim().split('').map(Number));
}

for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        cnt = 0;
        if(board[i][j] === 1){
            cnt++;
            board[i][j] = 0;
            queue.push([i,j]);
            while(queue.length !== 0){
                let [y, x] = queue.shift();
                for(let k=0; k<4; k++){
                    let nx = x + dx[k];
                    let ny = y + dy[k];
                    if(nx >=0 && nx < N && ny >= 0 && ny < N && board[ny][nx] === 1){
                        queue.push([ny,nx]);
                        board[ny][nx] = 0;
                        cnt++;
                    }
                }
            }
            arr.push(cnt);
        }

    }
}
arr.sort((a,b)=>a-b);
console.log(arr.length);
arr.map(v=>console.log(v));