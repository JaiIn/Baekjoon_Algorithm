const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim();

const x = Number(input);

function solution(x) {
    const dp = new Array(x + 1).fill(0);

    for (let i = 2; i <= x; i++) {
        dp[i] = dp[i - 1] + 1;

        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }

        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
    }

    console.log(dp[x]);
}

solution(x);