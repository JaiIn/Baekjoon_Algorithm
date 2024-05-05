const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const al = new Array(26).fill(0);

let arr = input.map(a => a.toUpperCase().split("")).flat();

const mostUsed = (_arr) => {
    for (let i = 0; i < _arr.length; ++i) {
        if (_arr[i]) {
            ++al[_arr[i].charCodeAt() - 65];
        }
    }
    
    let most = -1;
    let mostIdx = -1;
    let shuangmost = -1;
    
    for (let i = 0; i < al.length; ++i) {
        if(most < al[i]){
            most = al[i];
            mostIdx = i;
            shuangmost = -1;
        }
        else if(most === al[i]){
            shuangmost = al[i]
        }
    }
    
    if(shuangmost !== -1 && most === shuangmost){
        return "?";
    }
    else{
        return String.fromCharCode(mostIdx+65);
    }
}

console.log(mostUsed(arr));
