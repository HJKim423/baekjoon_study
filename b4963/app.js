const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');

const dx = [-1,0,1,-1,1,-1,0,1];
const dy = [-1,-1,-1,0,0,1,1,1];

let queue = [];

let w,h;

function bfs(board){
    let cnt = 0;
    for(let i=0; i<h; i++){
        for(let j=0; j<w; j++){
            if(board[i][j]===1){
                board[i][j] = 0;
                queue.push([i,j]);
                cnt++;
                while(queue.length!==0){
                    let [y,x] = queue.shift();
                    for(let k=0; k<8; k++){
                        let nx = x + dx[k];
                        let ny = y + dy[k];
                        if(nx>=0 && nx<w && ny>=0 && ny<h && board[ny][nx] === 1){
                            board[ny][nx] = 0;
                            queue.push([ny,nx]);
                            
                        }
                    }
                    
                }
                
            }
        }
    }
    return cnt;
}

while(true){
    [w, h] = input.shift().split(' ').map(Number);
    if(w===0 && h===0) break;

    let board = [];
    for(let i=0; i<h; i++){
        board.push(input.shift().split(' ').map(Number));
    }
    console.log(bfs(board));

}












// const input = require('fs').readFileSync(__dirname+'/example.txt').toString().trim().split('\n')

// const dy = [-1, -1, -1, 0, 0, 1, 1, 1]
// const dx = [-1, 0, 1, -1, 1, -1, 0, 1]
// let w, h;
// let graph;

// const BFS = (y, x) => {
//     let queue = []
//     queue.push([y, x])
//     while(queue.length >0){
//         const [crnt_y, crnt_x] = queue.shift()

//         for(let i=0; i<8; i++){
//             const next_y = crnt_y + dy[i]
//             const next_x = crnt_x + dx[i]

//             if(0 <= next_y && next_y < h && 0 <= next_x && next_x < w){
//                 if(graph[next_y][next_x] === '1'){
//                     queue.push([next_y, next_x])
//                     graph[next_y][next_x] = '0'
//                 }
//             }
//         }
//     }

// } 

// while(true){
//     let ans = 0;
//     [w, h] = input.shift().split(' ');
//     if(w === '0' && h === '0'){
//         break
//     }
//     graph = []
//     for(let i=0; i<h; i++){
//         graph.push(input.shift().split(' '))
//     }
//     console.log(graph);
//     for(let y=0; y<h; y++){
//         for(let x=0; x<w; x++){
//             if(graph[y][x] === '1'){
//                 ans += 1
//                 BFS(y, x)
//             }
//         }
//     }
//     console.log(ans);
// }