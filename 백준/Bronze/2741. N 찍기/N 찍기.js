const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(' ').map(Number);

for(let i  = 1; i <= input[0]; ++i){
    console.log(i);
}