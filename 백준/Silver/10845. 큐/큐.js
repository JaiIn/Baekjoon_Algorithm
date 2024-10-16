const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n').map(a =>a.trim('\r'));

const length = Number(input.shift());

const solution = (a) => {

    const result = [];
    const que = [];

    const action = {
        push : x => que.push(x),
        pop : () => result.push(que.length ? que.shift() : -1),
        size: () => result.push(que.length),
        empty: () => result.push(que.length ? 0 : 1),
        front: () => result.push(que.length ? que[0] : -1),
        back: () => result.push(que.length ? que[que.length - 1] : -1)
    }

    for(let i =0;i<a.length;++i){
        const [command, value] = a[i].split(' ');
        if (command === "push") {
            action.push(Number(value));
        } else if (command === "pop") {
            action.pop();
        } else if (command === "size") {
            action.size();
        } else if (command === "empty") {
            action.empty();
        } else if (command === "front") {
            action.front();
        } else if (command === "back") {
            action.back();
        }
    }
    console.log(result.join('\n'));
}
solution(input);