const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const bulbs = input[1].split(' ').map(Number);
let a,b,c;

for(let i=2; i<M+2; i++){
    [a,b,c] = input[i].split(' ').map(Number);

    if(a === 1){
        bulbs[b-1] = c;
        
    }
    else if(a===2){
        for(let j=b-1; j<= c-1; j++){
            bulbs[j] = (bulbs[j] === 0) ? 1 : 0;
        }
    }
    else if(a===3){
        for(let j=b-1; j<= c-1; j++){
            bulbs[j] = 0;
        }
    }
    else{
        for(let j=b-1; j<= c-1; j++){
            bulbs[j] = 1;
        }
    }

    
}
console.log(bulbs.join(' '));