const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().trim();

const arr = input.split('\n')


function solution(arr) {

    const member = Number(arr[0]);
    const clothesMember = arr[1]; 
    const [clothesBundle, penBundle] = arr[2].split(' ').map(Number);

    const clothesResult = BuyClothes(clothesMember, clothesBundle)
    const {penResult, penRemainder} = BuyPen(member, penBundle)

    console.log(clothesResult);
    console.log(penResult, penRemainder);
}

const BuyPen = (member, penBundle) => {
    const penResult = member / penBundle
    const penRemainder = member % penBundle

    return {
        penResult: Math.floor(penResult),
        penRemainder
    }
}

const BuyClothes = (clothesMember, clothesBundle) => {

    const CMArr = clothesMember.split(' ').map(Number)
    let sum = 0;

    for(let i = 0; i < CMArr.length; i++) {
        sum += Math.ceil(CMArr[i] / clothesBundle);
    }
    return sum;
}

solution(arr);