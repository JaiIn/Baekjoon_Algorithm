const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n').map(Number);

const num1 = input[0];
const num2 = input[1];
const num3 = input[2];

const mulNum = (num1 * num2 * num3).toString();

const numArr = new Array(10).fill(0);

for(let i = 0;i<mulNum.length;++i){
    let idx = mulNum[i];
    ++numArr[idx];
}

numArr.forEach(a=>console.log(a));