const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split(" ").map(Number);

const result = input.reduce((sum, cur)=> sum + cur * cur,0) % 10;


console.log(result);
