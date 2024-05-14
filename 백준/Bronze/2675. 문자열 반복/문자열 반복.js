const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const Num1 = input.shift();

for(let i = 0;i<Num1;++i){
    let answer = '';

    const [Num2, words] = input[i].split(" ");

    for(let j = 0;j<words.length;++j){
        for(let k =0;k<Num2;++k){
            answer += words[j];
        }
    }
    console.log(answer);
}

