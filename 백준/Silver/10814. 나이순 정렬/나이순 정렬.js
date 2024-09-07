const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n').map(a=>a.trim('\r'));


const length = input.shift();

input.sort((a,b)=>a.split(' ')[0] - b.split(' ')[0]);

console.log(input.join('\n'));