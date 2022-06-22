
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
    maps.push(map);
    data.splice(0, K);// 그 다음 테스트케이스로 넘어감
}



function solution(arr){
    const visited = {};
    let answer = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[0].length; j++){
            if(arr[i][j] === 1 && !visited[[i,j]]){//1이고 방문안했으면 방문처리
                bfs(i,j);
            }
        }
    }

    function bfs(x, y){
        const queue = [[x, y]];
        const result = [];
        visited[[x,y]] = true; //해당 지역 방문처리

        let dx = [0, 0, -1, 1];
        let dy = [-1, 1, 0, 0];

        while(queue.length){
            for(let i=0; i<queue.length; i++){
                const coords = queue.shift(); //맨 밑에꺼 큐에서 뺌
                if(!visited[[coords[0], coords[1]]]) continue; //방문안했으면 넘어감?
                result.push(coords); //인접한 땅 push
                for(let j=0; j<4; j++){
                    let nx = coords[0] + dx[j];
                    let ny = coords[1] + dy[j];
                    if((nx >= 0 &&
                        ny >= 0 &&
                        nx < arr.length &&
                        ny < arr[0].length) &&// 범위내인지 확인
                        (arr[nx][ny] === 1) && //배추 있는지 확인
                        (!visited[[nx,ny]]) //방문하지 않은땅인지 확인
                        ){
                            visited[[nx,ny]] = true;
                            queue.push([nx,ny]);
                        }
                }
            }
        }
        answer++;
        
    }
    return answer;

}
    maps.forEach((farm) => {
        console.log(solution(farm));
      })

