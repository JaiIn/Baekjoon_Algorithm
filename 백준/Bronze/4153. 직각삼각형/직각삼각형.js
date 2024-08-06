const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n').map((i)=>i.split(' ').map(Number));

const solution =(arr) => {
    for(let i = 0;i<arr.length-1;++i){
        arr[i].sort((a,b) => a-b);
        let [a,b,c] = arr[i];
        a**2 + b**2 === c**2? console.log("right") : console.log("wrong");
    }
}

solution(input);