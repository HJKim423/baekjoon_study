const [a,b,c,d,e,f] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ').map(Number);

let x,y;
for(let i=-999; i<=999; i++){
    for(let j= -999; j<= 999; j++){
        if(a*i + b*j === c && d*i + e*j === f){
            x=i;
            y=j;
        }
            
    }
}
console.log(x + " " + y);