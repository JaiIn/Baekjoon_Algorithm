const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim();

const num = Number(input);

const solution = (N) => {
    for(let i =1;i<N;++i){
        let sum = i;
        let digits = i.toString().split('');
        for(let digit of digits){
            sum += parseInt(digit);
        }
        if(sum === N){
            return i;
        };
    };
    return 0;
}

const sol = solution(num);
console.log(sol);
