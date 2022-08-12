const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n");
const n = +input.shift();

let queue = [];
let answer = '';

for(let i=0; i<n; i++){
    let x = -1;
    if(input[i].includes("push")){
        x = input[i].slice(5);
        queue.push(x);
    }

    if(input[i].trim() === "pop"){
        if(queue.length === 0){
            answer += -1;
            answer += "\n"
        }else{
            answer += queue[0];
            answer += "\n"
            queue.shift();
        }
        
    }
    if(input[i].trim() === "size"){
        answer += queue.length;
        answer += "\n"
    }

    if(input[i].trim() === "empty"){
        if(queue.length === 0){
            answer += (1);
            answer += "\n"
        }else{
            answer += (0);
            answer += "\n"
        }
    }

    if(input[i].trim() === "front"){
        if(queue.length === 0){
            answer += (-1);
            answer += "\n"
        }else{
            answer += (queue[0]);
            answer += "\n"
        }
        
    }

    if(input[i].trim() === "back"){
        if(queue.length === 0){
            answer += (-1);
            answer += "\n"
        }else{
            answer += (queue[queue.length-1]);
            answer += "\n"
        }
        
    }
}

console.log(answer);