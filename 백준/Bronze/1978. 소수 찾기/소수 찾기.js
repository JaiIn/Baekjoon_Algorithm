const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const length = Number(input.shift());

let arr = input.map(a => a.trim().split(' ').map(Number));
let arr2 = arr.flat();

console.log(arr2.filter(num => {
    if(num === 1) return false;
    for(let i = 2; i<num;++i){
        if(num % i ===0) return false;
    }
    return true;
}).length)

