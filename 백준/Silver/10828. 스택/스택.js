const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n').map(a=>a.trim('\r'));

const length = input.shift();

const Arr = input.map(a => a.trim().split(' '));

function solution(arr){

    let result = [];
    let stack = [];
    for(let i of arr){
        switch (i[0]) {
            case 'push':
                stack.push(i[1]);
                break;
            case 'pop':
                if(stack.length > 0){
                    const pop = stack.pop();
                    result.push(pop);
                } else{
                    result.push(-1);
                }
                break;
            case 'top':
                stack.length > 0 ? result.push(stack[stack.length-1]) : result.push(-1);
                break;
            case 'size':
                result.push(stack.length);
                break;
            case 'empty':
                stack.length > 0 ? result.push(0) : result.push(1);
                break;
            default:
                break;
        }
    }
    console.log(result.join('\n'));
}

solution(Arr);