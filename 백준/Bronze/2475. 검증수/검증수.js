const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split(" ").map(Number);

let sum = 0;
const sumFun = (arr, _sum) => {
    for( let i = 0;i<arr.length;++i){
        _sum += (arr[i] * arr[i]);
    }
    return _sum;
}


console.log(sumFun(input,sum)%10);
