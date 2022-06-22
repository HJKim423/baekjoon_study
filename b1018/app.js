const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
solution();

function solution(){
    let min=1000;
   
    let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
    let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];
    
    for(let i=0; i<=n-8; i++){
        for(let j=0; j<=m-8; j++){
            check(j,i);
        }
    }

    function check(x,y){
        let checkW =0;
        let checkB = 0;
        for(let i=y; i<y+8; i++){
            for(let j=x; j<x+8; j++){
                if(input[i][j] !== white[i-y][j-x]) checkW++;
                if(input[i][j] !== black[i-y][j-x]) checkB++;
            }
        }
    
    min = Math.min(min,Math.min(checkW,checkB));
    console.log(min);
    }
            

    console.log(min);
}
