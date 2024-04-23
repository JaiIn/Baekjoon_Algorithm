const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(' ').map(Number);

const num = input[0];

for(let i  = 1; i <= 9; ++i){
    console.log(`${num} * ${i} = ${num * i}`);
}