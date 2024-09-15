const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const Arr = input.map(a => a.trim().split(' ').map(Number));

const [N,A,M,B] = Arr;

A.sort((a,b)=> {return a-b});

const newA = new Set(A);

const answer = B.map(e => (newA.has(e) ? 1 : 0));

console.log(answer.join('\n'));