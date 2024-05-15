const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(' ').map(Number);

let ascending = 0;
let descending = 0;

for(let i = 0;i<input.length;++i){
    if(input[i] - input[i+1] === -1)++ascending;
    else if(input[i] - input[i+1] === 1)++descending;
}

if(ascending===7){console.log("ascending");}
else if(descending===7){console.log("descending");}
else{console.log("mixed");}