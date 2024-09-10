const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim();

const num = Number(input);

const solution = (num) => {
    let box = 0;

    while (num >= 0) {
        if (num % 5 === 0) {
            box += Math.floor(num / 5);
            console.log(box);
            return;
        }
        num -= 3;
        box++;
    }
    console.log("-1");
};

solution(num);