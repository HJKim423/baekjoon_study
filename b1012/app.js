
const inputData = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n')
const testCase  = +inputData.shift();
let data = inputData;
const maps = [];

for(let i=0; i<testCase; i++){
    let [M,N,K] = data.shift().split(' ').map(Number);
    let map = Array.from({length: N}).map(row => row = Array.from({length:M}).fill(0));

    for(let i=0; i<K; i++){
        let [X, Y] = [+data[i].split(' ')[0], +data[i].split(' ')[1]];
        map[Y][X] = 1;
    }
    // maps.push(map);
    console.log(bfs(map, M, N));
    data.splice(0, K);// 그 다음 테스트케이스로 넘어감
}

function bfs(map, m, n){
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let queue = [];
    let cnt = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(map[i][j] === 1){
                cnt++;
                map[i][j] = 0;
                queue.push([i,j]);
            }
            while(queue.length !== 0){
                let [y, x] = queue.shift();
                for(let k=0; k<4; k++){
                    let nx = x+dx[k];
                    let ny = y+dy[k];
                    if(nx >= 0 && nx < m && ny >= 0 && ny < n &&map[ny][nx] === 1){
                        map[ny][nx] = 0;
                        queue.push([ny, nx]);
                    }
                }
            }

        }
    }
    return cnt;
}