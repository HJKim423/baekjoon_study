const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');

const offsetX = [-1, 0, 1, -1, 1, -1, 0, 1];
const offsetY = [-1, -1, -1, 0, 0, 1, 1, 1];
let graph;
let w,h;

while(true){
    let cnt = 0;
    [w,h] = input.shift().split(" ");
    if(w === '0' && h === '0'){
        break;
    }
    graph = [];
    for(let i=0; i<h; i++){
        graph.push(input.shift().split(' '))
    }
    
    for(let y=0; y<h; y++){
        for(let x=0; x<w; x++){
            if(graph[y][x] === '1'){
                cnt += 1;
                bfs(y, x);
            }
        }
    }
    console.log(cnt);
}


function bfs(y,x){
    let queue = [];
    queue.push([y, x]);
    while(queue.length >0){
        const [ay, ax] = queue.shift();

        for(let i=0; i<8; i++){
            const dy = ay + offsetY[i];
            const dx = ax + offsetX[i];

            if(0 <= dy && dy < h && 0 <= dx && dx < w){
                if(graph[dy][dx] === '1'){
                    queue.push([dy, dx]);
                    graph[dy][dx] = '0';
                }
            }
        }
    }
    
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