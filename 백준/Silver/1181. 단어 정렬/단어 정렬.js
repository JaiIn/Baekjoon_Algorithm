const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

let length = input.shift();
let arr = input.map(a=>a.trim().split('\r')).flat();

const solution = (arr) => {

    arr.sort((a,b) => {
        if(a.length !== b.length){
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });

    let reArr = [];
    for(let i = 0; i< arr.length;++i){
        if(arr[i] !== arr[i+1]){
            reArr.push(arr[i]);
        }
    }

    console.log(reArr.join('\n'));
};

solution(arr);