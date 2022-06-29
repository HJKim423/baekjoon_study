const input = +require('fs').readFileSync(__dirname+'/input.txt').toString().trim();
solution();

function solution(){
    let five=0;
    let two=0;
    let answer=-1;
    let money = input;

    if(money%5===0){
        answer = Math.floor(money / 5);
    }
    else{
        while(money % 5 !==0){
            money -= 2;
            two++;
            
            if(money<0){
                two = 0;
                break;
            }
        }
        five = Math.floor(money/5);
        if(five<0) five = 0;
        answer = two+five;

    }
    if(answer === 0) answer = -1;
    console.log(answer);
    
}