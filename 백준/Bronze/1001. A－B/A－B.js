const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split(" ").map(Number);

const A = input[0];
const B = input[1];

console.log(A - B);