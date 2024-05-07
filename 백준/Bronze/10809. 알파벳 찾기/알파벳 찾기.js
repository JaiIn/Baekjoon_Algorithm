const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim();

const List = [];

for(let i = 97; i <=122;++i){
    List.push(input.indexOf(String.fromCharCode(i)))
}

console.log(List.join(' '));