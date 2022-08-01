const [A, P] = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split(' ');

let D=[+A];
let a = A;

while(true){
    let Aarr = a.toString().split('').map(Number);
    let newA = 0;
    for(let i=0; i<Aarr.length; i++){
        newA += Math.pow(Aarr[i], P);
    }


    if(D.includes(newA)){
        console.log(D.indexOf(newA));
        break;
    }else{
        D.push(newA);
        a = newA;
        continue;
    }
}