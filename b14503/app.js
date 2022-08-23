const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ").map(Number);

let map = [];
for (let i = 2; i < 2 + n; i++) {
    map.push(input[i].split(' ').map(Number));
}
let cnt = 0;

map[r][c] = 2; //맨 처음 위치 청소
while (1) {

    //2.위치 탐색
    if (d === 0) {
        c -= 1;
        d = 3;
        if (map[r][c] === 0) {
            map[r][c] = 2;
            cnt = 0;
        }
        //2-2
        else {
            c += 1;
            cnt++;
        }
    }
    else if (d === 1) {
        r -= 1;
        d = 0;
        if (map[r][c] === 0) {
            map[r][c] = 2;
            cnt = 0;
        }
        //2-2
        else {
            r += 1;
            cnt++;
        }
    }
    else if (d === 2) {
        c += 1;
        d = 1;
        if (map[r][c] === 0) {
            map[r][c] = 2;
            cnt = 0;
        }
        //2-2
        else {
            c -= 1;
            cnt++;
        }
    }
    else if (d === 3) {
        r += 1;
        d = 2;
        if (map[r][c] === 0) {
            map[r][c] = 2;
            cnt = 0;
        }
        //2-2
        else {
            r -= 1;
            cnt++;
        }
    }

    //후진
    if (cnt === 4) {
        if (d === 0) {
            r += 1;
        }
        else if (d === 1) {
            c -= 1;
        }
        else if (d === 2) {
            r -= 1;
        }
        else if (d === 3) {
            c += 1;
        }

        if (map[r][c] === 1) break;
        else {
            cnt = 0;
        }
    }


}

let answer = 0;
map.map(v => {
    v.map(v => {
        if (v === 2) answer++;
    })
})
console.log(answer);

