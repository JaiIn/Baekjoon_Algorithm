const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim();

const arr = input.split('\n')


function solution(arr) {
    const [a,b,c] = arr

    console.log(Number(a) + Number(b) - Number(c));
    console.log(a + b - c);
}

solution(arr);
