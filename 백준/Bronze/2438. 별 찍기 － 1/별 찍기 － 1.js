const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split(" ").map(Number);

const A = input[0];

let Star = "";

for(let i =1; i<=A;++i){
    Star += "*";
    console.log(Star);
}