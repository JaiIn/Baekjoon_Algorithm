const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(' ').map(i=>Number(i));

let times = 1;
let start = 1;
let total = input[0];

while(start < total){
    start += 6* times;

    times++;
}

console.log(times);