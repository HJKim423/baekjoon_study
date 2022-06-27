const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const money = +input[0];
const arr = input[1].split(' ').map(Number);

solution();
function solution(){
    let answer ='';
    if(BNP() > TIMING()) answer = "BNP";
    else if(BNP() < TIMING()) answer = "TIMING";
    else answer = "SAMESAME";

    console.log(answer);
}

function BNP(){
    let stock = 0;
    let cash = money;
    for(let i=0; i<arr.length; i++){
        if(arr[i] <= cash) {
            stock += Math.floor(cash / arr[i]);
            cash -= Math.floor(cash / arr[i]) * arr[i];
        }
        
    }
    
    return cash+ (stock * arr[13]);
}


function TIMING() {
    let stock = 0;
    let cash = money;
    
    for(let i=3; i<arr.length; i++){
        let zero = arr[i-3];
        let one = arr[i-2];
        let two = arr[i-1];
        let three = arr[i];

        //3일연속하락
        if(zero > one && one > two && two > three){
            if(arr[i] <= cash) {
                //매수
                stock += Math.floor(cash / arr[i]);
                cash -= Math.floor(cash / arr[i]) * arr[i];
                
            }
        }
        //3일연속상승
        if(zero < one && one < two && two < three){
            //매도
            cash += stock * arr[i];
            stock = 0;
        }

        

        
    }
    
    return cash + (stock*arr[13]);
    
}

