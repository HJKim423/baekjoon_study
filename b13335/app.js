const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split("\n");
const [n, w, L] = input[0].split(" ").map(Number);
const truck = input[1].split(" ").map(Number);

//n개의 트럭, 다리위에 w개의 트럭만, 다리길이(w), 다리위 트럭 총 무게 L보다 작아야함

let bridge = [];
let time = 0;
let bridgeWeight = 0;

for(let i=0; i<n; i++){
    while(1){
        
        if(bridge.length === w){
            let arrive = bridge.shift();
            bridgeWeight -= arrive;
        }
        if(bridgeWeight+ truck[i] <= L){
            break;
        }
        bridge.push(0);
        time++;
        
    }
    bridge.push(truck[i]);
    bridgeWeight+=truck[i];
    time++;
    
}
console.log(time+w);