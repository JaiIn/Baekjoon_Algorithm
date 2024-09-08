const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const nums = input.map(a => a.trim('\r'));

const solution = (arr) => {
    for(let num of arr){
        
        if(parseInt(num) === 0) break;

        const center = Math.floor(num.length / 2);
        const length = num.length;
        let Isit = "yes";

        for(let i = 0; i<center;++i){
            if(num[i] !== num[length-i-1]){
                Isit = "no";
                break;
            } 
        }
        console.log(Isit);
    }
}

solution(nums);