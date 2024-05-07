const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const length = input.shift();
const arr = input.map(a=> a.trim('\n'));

for(let i = 0;i<arr.length;++i){
    let now = 0;
    let sum = 0;
    for(let j = 0;j<arr[i].length;++j){
        if(arr[i][j] === 'O'){
            ++now;
            sum += now;
        }else{
            now = 0;
        }
    }
    console.log(sum);
}
