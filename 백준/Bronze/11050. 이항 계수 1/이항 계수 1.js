const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(' ').map(Number);

const [n,k] = input;

let parent = 1;
let child = 1;

for(let i = 0; i< k;++i){
    parent *= n-i;
    child *= k-i;
}

console.log(parent/child);


