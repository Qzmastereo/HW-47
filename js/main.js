
let threeNumber = [12, 3, 17];
threeNumber[1] = 10;
console.log(threeNumber);

let threeline = ["My", "name", "Volodymyr"];
threeline[3] = "Udianskiy";
console.log(threeline);

let sumMassive = [14, 17, 46, 12];
let sum = 0;

for (let i = 0; i < sumMassive.length; i++){
    sum += sumMassive[i];
}
console.log(sum);

let fiveNumber = [14, 17, 46, 12, 23];

for (let i = 0; i < fiveNumber.length; i++){
    console.log(fiveNumber[i]);
}
let fiveline = ["My", "name", "Volodymyr", "Udianskiy", "16years"];

for (let i = 0; i < fiveline.length; i++){
    if (fiveline[i].length > 5) {
        console.log(fiveline[i]);
    }
}
let tenNumber = [51, 18, 13, 24, 7, 85, 19, 21, 67, 100];

let biggestNumber = tenNumber[0];

for (let i = 0; i < tenNumber.length; i++){
if (tenNumber[i] > biggestNumber) {
    biggestNumber = tenNumber[i];
    }
    }
console.log(biggestNumber);

let tenNumbers = [7, 9, 12, 24, 8, 108, 10, 21, 33, 11];

for (let number of tenNumbers) {
    if(number % 2 === 0){
        console.log(number);
    }
}