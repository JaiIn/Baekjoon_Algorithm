const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("/n");

const A = input[0];

for(let i = 1; i<=A;++i){
    console.log(" ".repeat(A-i) + "*".repeat(i));
}