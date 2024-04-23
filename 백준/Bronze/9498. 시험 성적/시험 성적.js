const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(' ').map(Number);

function checkGrade(chengji){
    if(90 <= chengji && chengji <= 100){console.log("A");}
    else if(80 <= chengji && chengji <= 89){console.log("B");}
    else if(70 <= chengji && chengji <= 79){console.log("C");}
    else if(60 <= chengji && chengji <= 69){console.log("D");}
    else{console.log("F")}
}
checkGrade(input[0]);