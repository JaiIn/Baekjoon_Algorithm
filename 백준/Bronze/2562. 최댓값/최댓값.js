const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n").map(Number);

let Biggest = 0;
let BigIdx = 0;

for(let i =0;i<input.length;++i){
    if(Biggest < input[i]){
        Biggest = input[i];
        BigIdx = i;
    }
    
}
console.log(Biggest, BigIdx + 1);