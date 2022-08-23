const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");
const t = +input[0];

for(let i=1; i<=t; i++){
    let n = +input[i];
    let rooms = Array(n+1).fill(true); 

    for(let k=2; k<=n; k++){
        for(let m=1; k*m<rooms.length; m++){
            rooms[k*m] = !rooms[k*m];
        }
        
    }


    let cnt = 0;
    for(let l=1; l<rooms.length; l++){
        if(rooms[l]) cnt++;
    }

    console.log(cnt);
}

