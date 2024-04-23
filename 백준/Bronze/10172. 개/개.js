const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim().split(' ').map(Number);

console.log(`|\\_/|
|q p|   /}
( 0 )"""\\ 
|"^"\`    | 
||_/=\\\\__|`);
