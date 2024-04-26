const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

let length = Number(input.shift());
let arr = input
let points = arr.map(a => a.trim().split(' ').map(Number));

points.sort((a,b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
})

console.log(points.map(point => point.join(' ')).join('\n'));