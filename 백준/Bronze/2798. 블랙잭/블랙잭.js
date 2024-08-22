const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const [cards,Max] = input[0].trim().split(' ').map(num => Number(num));
const second = input[1].trim().split(' ').map(num => Number(num));;

let answer = 0;

for(let i = 0;i<cards-2;++i){
    for(let j = i+1;j<cards-1;++j){
        for(let k = j+1;k<cards;++k){
            const sum = second[i] + second[j] + second[k];
            if(sum <= Max && sum > answer){answer = sum;}
        }
    }
}
console.log(answer);
