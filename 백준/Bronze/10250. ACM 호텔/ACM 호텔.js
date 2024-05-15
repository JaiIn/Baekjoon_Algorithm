const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split('\n');

const num = parseInt(input.shift(), 10);

for (let i = 0; i < num; ++i) {
    const [height, room, guke] = input[i].trim().split(' ').map(Number);
    let floor, roomnum;

    if (guke % height === 0) {
        floor = height;
        roomnum = guke / height;
    } else {
        floor = guke % height;
        roomnum = Math.floor(guke / height) + 1;
    }

    const result = floor * 100 + roomnum;
    console.log(result);
}