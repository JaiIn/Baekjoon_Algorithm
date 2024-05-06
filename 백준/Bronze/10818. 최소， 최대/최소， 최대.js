const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const length = input.shift();
let arr = input[0].split(' ').map(Number);

const MM = (_arr) => {
    const Max = Math.max(...arr);
    const Min = Math.min(...arr);
    console.log(Min,Max);
}
MM(arr);
