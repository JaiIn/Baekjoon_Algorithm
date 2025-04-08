const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString();

const arr = input.trim().split('\n');
arr.shift(); 

function solution(arr) {
    arr.forEach((string) => {
        let sum = 0;
        let isValid = true;

        for (let i = 0; i < string.length; i++) {
            if (string[i] === '(') sum++;
            else if (string[i] === ')') sum--;

            if (sum < 0) {
                isValid = false;
                break;
            }
        }

        if (sum !== 0) isValid = false;
        console.log(isValid ? 'YES' : 'NO');
    });
}

solution(arr);
