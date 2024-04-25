const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split("\n");

const _string = input[0];
const _ascii = _string.charCodeAt();

console.log(_ascii);