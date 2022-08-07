const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n");
const [r, c] = input.shift().split(" ").map(Number);

let dx = [-1, 0 ,1, 0];
let dy = [0, 1, 0, -1];

let visited = Array(26).fill(0);


visited[input[0][0].charCodeAt() - 65] = 1;
console.log(dfs(0,0));

function dfs(x, y){
    let ans = 1;
    for(let k=0; k<4; k++){
        let nx = x + dx[k];
        let ny = y + dy[k];
        if(nx >= 0 && nx < c && ny >= 0 && ny < r 
            && visited[input[ny][nx].charCodeAt()-65] === 0){
            visited[input[ny][nx].charCodeAt()-65] =1;
            console.log(visited);
            ans = Math.max(ans, dfs(nx, ny)+1);
            visited[input[ny][nx].charCodeAt()-65] =0;
            console.log(visited);
        }
    }

    return ans;
}

