const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);
const min = +Math.min(...input);

let cnt = 0;
let increase = 1;
while(true){
    for(let i=0; i<5; i++){
        if((min+ increase) % input[i] === 0) cnt++;
    }
    if(cnt >=3) {
        console.log(min+increase);
        break;
    }
    else {
        cnt = 0;
        increase++;
    }
}