const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(" ").map(Number);

const A = input[0];
const B = input[1];

function Cul(A,B){
    console.log(A+B);
    console.log(A-B);
    console.log(A*B);
    console.log(Math.floor(A/B));
    console.log(A%B);
}

Cul(A,B);