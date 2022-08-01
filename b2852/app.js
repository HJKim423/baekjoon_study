const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const N = +input.shift();

let MM,SS;
let time1=0;
let time2=0;
let gameTime = 48*60;
let team1 = 0;
let team2 = 0;
let answer1 = 0;
let answer2 = 0;

for(let i=0; i<N; i++){
    let [team, time] = input[i].split(" ");
    [MM,SS] = time.split(":").map(Number);
    
    if(team === '1'){
        team1++;
    }
    else{
        team2++;

    }
    let timeNow = (MM*60)+SS;
    
    //1이 먼저 득점
    if(team1 > team2 && team1 === 1){
        time1 = timeNow;
        answer1 = gameTime - time1;
    }else if(team1 === team2 && team === '2'){
        answer1 = timeNow - time1;
    }
    else if(team1 < team2 && team === '2' && team1 !== 0){
        answer2 = gameTime - timeNow;
    }
    

    //2가 먼저 득점
    if(team2 > team1 && team2 === 1){
        time2 = timeNow;
        answer2 = gameTime - time2;
    }else if(team2 === team1 && team === '1'){
        answer2 = timeNow - time2;
    }
    else if(team2 < team1 && team === '1' && team2 !== 0){
        answer1 = gameTime - timeNow;
    }
    
}



console.log(String(Math.floor(answer1/60)).padStart(2, '0') + ":" + 
String(answer1%60).padStart(2, '0'));

console.log(String(Math.floor(answer2/60)).padStart(2, '0') + ":" + 
String(answer2%60).padStart(2, '0'));
