const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const length = input.shift();
const arrNum = input.map(a=>a.trim().split('').map(Number)).flat();


const sum  = (arr) => {
    let _sum = 0;
    for(let i = 0; i<length;++i){
        _sum += (arr[i]);
    }
    console.log(_sum);
}
sum(arrNum);