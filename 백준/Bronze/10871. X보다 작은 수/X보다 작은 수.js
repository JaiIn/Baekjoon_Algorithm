const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const in_idx_0 = input[0].split(' ').map(Number);

const all_idx = in_idx_0[0];
const compareNum = in_idx_0[1];


const arr = input[1].split(' ');

let result = "";

for(let i = 0; i<all_idx;++i){
    if(arr[i] < compareNum){
        result += arr[i] + " ";
    }
}

console.log(result);
