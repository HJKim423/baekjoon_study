const [A,B,C,M] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);


solution();

function solution(){
    let fatigue = 0;
    let work = 0;

    for(let i=0 ;i< 24; i++){
        console.log(i, fatigue, work);
        if(fatigue+A <= M){
            fatigue += A;
            work += B;
            continue;
        }        
        else{
            fatigue -= C;
            if(fatigue<0) fatigue = 0;
            continue;
        }
        
    }
    console.log(work);
    
}