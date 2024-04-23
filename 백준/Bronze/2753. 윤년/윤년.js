const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(' ').map(Number);

const year = input[0];

function CulYear(year){
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log("1");
    } else {
        console.log("0");
    }
}

CulYear(year);