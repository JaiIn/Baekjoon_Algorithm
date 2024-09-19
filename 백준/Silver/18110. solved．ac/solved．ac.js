const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n').map(a =>a.trim('\r')).map(Number);

const solution = (a) => {

    const length = a.shift();

    // console.log(a);

    if(length === 0){
        console.log(0);
        return;
    }

    const julsa = Math.round(length * 15/100);
    
    input.sort((a,b) => a-b);
    // console.log(a);

    a.splice(0,julsa);
    a.splice(a.length - julsa,julsa);
    // console.log(a);
    // for(let i = 0; i<julsa;++i){
    //     a.pop();
    //     a.shift();
    // };
    
    const sum = a.reduce((a,b) => a+b,0);
    console.log(Math.round(sum/a.length));
}
solution(input);