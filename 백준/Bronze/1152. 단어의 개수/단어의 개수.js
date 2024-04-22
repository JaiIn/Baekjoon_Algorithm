const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString()

let input_arr = input.trim().split(" ");
let count = 0;

for (let i = 0; i < input_arr.length; ++i) {
    if (input_arr[i] != '')
        ++count;
}

console.log(count);