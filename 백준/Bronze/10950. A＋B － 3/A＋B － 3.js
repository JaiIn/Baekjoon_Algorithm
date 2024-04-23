const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const num = Number(input[0]);


for(let i =1; i<=num;++i){
    let sum = input[i].split(' ');
    console.log(Number(sum[0]) + Number(sum[1]));
};