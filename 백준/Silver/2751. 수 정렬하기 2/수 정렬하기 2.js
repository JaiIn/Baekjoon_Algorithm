const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n').map(Number);

const length = input.shift();

console.log(input.sort((a,b) => a-b).join('\n'));