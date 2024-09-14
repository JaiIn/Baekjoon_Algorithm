const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const length = input.shift();

const Arr = input.map(a => a.trim().split(' ').map(Number));

const solution = (arr) => {
    arr.sort((a,b)=>{
        if(a[1] === b[1]){
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    arr.map(a => console.log(a.join(' ')));
}

solution(Arr);

