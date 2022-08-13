const input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n");
let [king, stone, n] = input.shift().split(" ");

let alphabet = ["A","B","C","D","E","F","G","H"];

let kingR = 0;
let kingC = 0;
let stoneR = 0;
let stoneC = 0;

king = king.split('');
kingR = alphabet.indexOf(king[0]);
kingC = 8 -(king[1]);

stone = stone.split('');
stoneR = alphabet.indexOf(stone[0]);
stoneC = 8 -(stone[1]);

for(let i=0; i<n; i++){
    if(input[i].trim() === 'R'){
        if(kingR+1<8){
            kingR += 1;
            if(kingR === stoneR && kingC === stoneC){
                if(stoneR+1<8){
                    stoneR += 1;
                }else{
                    kingR -= 1;
                }
                
            }
        }
        
    }
    else if(input[i].trim() === 'L'){
        if(kingR-1>=0){
            kingR -= 1;
            if(kingR === stoneR && kingC === stoneC){
                if(stoneR-1>=0){
                    stoneR -= 1;
                }else{
                    kingR += 1;
                }
                
            }
        }
        
    }
    else if(input[i].trim() === 'T'){
        if(kingC-1>=0){
            kingC -= 1;
            if(kingR === stoneR && kingC === stoneC){
                if(stoneC-1>=0){
                    stoneC -= 1;
                }else{
                    kingC += 1;
                }
                
            }
        }
    }
    else if(input[i].trim() === 'B'){
        if(kingC+1<8){
            kingC += 1;
            if(kingR === stoneR && kingC === stoneC){
                if(stoneC+1<8){
                    stoneC += 1;
                }else{
                    kingC -= 1;
                }
                
            }
        }
        
    }
    else if(input[i].trim() === 'RB'){
        if(kingC+1<8 && kingR+1<8){
            kingC += 1;
            kingR += 1;

            if(kingR === stoneR && kingC === stoneC){
                if(stoneC+1<8 && stoneR+1<8){
                    stoneC += 1;
                    stoneR += 1;
                }
                else{
                    kingC -= 1;
                    kingR -= 1;
                }
            }
        }
        
    }
    else if(input[i].trim() === 'LB'){
        if(kingC+1<8 && kingR-1>=0){
            kingC += 1;
            kingR -= 1;
            if(kingR === stoneR && kingC === stoneC){
                if(stoneC+1<8 && stoneR-1>=0){
                    stoneC += 1;
                    stoneR -= 1;
                }
                else{
                    kingC -= 1;
                    kingR += 1;
                }
                
            }
        }
        
    }
    else if(input[i].trim() === 'RT'){
        if(kingC-1>=0 && kingR+1<8){
            kingC -= 1;
            kingR += 1;
            if(kingR === stoneR && kingC === stoneC){
                if(stoneC-1>=0 && stoneR+1<8){
                    stoneC -= 1;
                    stoneR += 1;
                }
                else{
                    kingC += 1;
                    kingR -= 1;
                }
            }
        }
        
    }
    else if(input[i].trim() === 'LT'){
        if(kingC-1>=0 && kingR-1>=0 ){
            kingC -= 1;
            kingR -= 1;
            if(kingR === stoneR && kingC === stoneC){
                if(stoneC-1>=0 && stoneR-1>=0){
                    stoneC -= 1;
                    stoneR -= 1;
                }
                else{
                    kingC += 1;
                    kingR += 1;
                }
                
            }
        }
        
    }
}


console.log(alphabet[kingR] + String(8-kingC));
console.log(alphabet[stoneR] + String(8-stoneC));