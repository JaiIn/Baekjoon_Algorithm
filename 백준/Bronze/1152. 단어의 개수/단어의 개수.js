const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(" ");

let count = 0;

for (let i = 0; i < input.length; ++i) {
    if (input[i] != '')
        ++count;
}

console.log(count);