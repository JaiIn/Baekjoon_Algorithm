const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

let arr = input.join('').toUpperCase();

const mostUsed = (arr) => {
    const counts = new Array(26).fill(0);
    arr.split('').forEach(char=>counts[char.charCodeAt() - 65]++);
    const maxCount = Math.max(...counts);
    if(counts.indexOf(maxCount) !== counts.lastIndexOf(maxCount)) {
        return "?";
    } else{
        return String.fromCharCode(counts.indexOf(maxCount)+65);
    }
}

console.log(mostUsed(arr));