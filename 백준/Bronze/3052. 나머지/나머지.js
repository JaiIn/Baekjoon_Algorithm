const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

let arr = input.map(a=>Number(a.trim().split('\n'))).flat();
let count = 0;
let namoji = [];


const cul = (arr) =>{
    for(let i = 0;i <arr.length;++i){
        if(namoji.includes(arr[i] % 42) === false){
            namoji.push(arr[i] % 42);
            ++count;
        }
    }
    console.log(count);
}
cul(arr);