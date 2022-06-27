const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const switchLen = +input[0];
const switches = input[1].split(' ').map(Number);
const studentsLen = +input[2];
const students = [];
let answer = '';

for(let i=3; i<3+studentsLen; i++){
    students.push(input[i].split(' ').map(Number));
}

solution();

function solution(){
    for(let i=0; i<studentsLen; i++){
        //남자일때
        if(students[i][0] === 1){
            let swcNum = students[i][1];

            for(let j=1; j<= Math.floor(switchLen/swcNum); j++){
                switches[swcNum*j-1] = (switches[swcNum*j-1] === 1) ? 0 : 1;
            }
        }
        //여자일때
        else{
            let swcNum = students[i][1]-1;
            switches[swcNum] =  (switches[swcNum] === 1) ? 0 : 1; //본인

            let cnt = 1;
            while(switches[swcNum-cnt] === switches[swcNum+cnt]){// 양옆
                switches[swcNum-cnt] =  (switches[swcNum-cnt] === 1) ? 0 : 1;
                switches[swcNum+cnt] =  (switches[swcNum+cnt] === 1) ? 0 : 1;
                cnt++;
            }
        }
    }
    for(let i=1; i<=switchLen; i++){
        console.log(switches[i-1]);
        answer += switches[i-1];
        answer += " ";
        if(i % 10 === 0){
            answer += "\n";
        } 
    }
    console.log(answer);
}
