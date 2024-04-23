const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

for(let i =0; i<input.length;++i){
    let sum = input[i].split(' ');
    console.log(Number(sum[0]) + Number(sum[1]));
};