const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(' ').map(Number);

let h = input[0];
let m = input[1];

const Alram = (hour,min) => {
    if(min<45){
        if(hour === 0){
            console.log(hour + 23, 60-45+min);
        } else {
            console.log(hour - 1, 60-45+min);
        }
    } else {
        console.log(hour, min-45);
    }
};
Alram(h,m);