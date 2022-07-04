const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(".");
let answer = '';

for(let i=0; i<input.length; i++){
    let lng = input[i].length;   

    if(lng === 0){
        if(i === input.length-1){
            break;
        }
        else{
            answer += ".";
            continue;   
        }
    }
    if(lng % 2 !== 0){
        answer = -1;
        break;
    }else{        
        let four = Math.floor(lng/4);
        answer += 'AAAA'.repeat(four);

        let two = Math.floor(lng - four*4);
        if(two > 0){
            answer += 'BB';
        }
        
    }
    if(i !== input.length-1) answer += ".";
    else{
        if(lng === 0) break;
    }

}

console.log(answer);
