const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim();

const testCases = input.split("\n").map(Number);
const length = testCases.shift();

function solution(x) {
    const dp = Array.from({ length: x + 1 }, () => [0, 0]);
    
    dp[0] = [1, 0]; 
    dp[1] = [0, 1]; 
    
    for (let i = 2; i <= x; i++) {
        dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
        dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
    }
    
    return dp[x];
}

testCases.forEach((n) => {
    const result = solution(n);
    console.log(result[0], result[1]);
});
