const a = 2;
const b = 4;
const c = "Adam";
console.log(a);
console.log(a, b, c);   //2 4 Adam
console.log(a+ b + c);  // 6Adam


let accountNumber = 100;
let type1 = typeof(accountNumber);   //type of variable (number, string, boolean)
console.log(type1);

const num1 = 0.1;
const num2 = 0.2;
console.log(num1 + num2);                //result is 0.30000000000000004
console.log((num1 + num2).toFixed(2));   //result is 0.30 do dwóch miejsc po przecinku

const sum = num1 + num2;
console.log(sum);

let number1 = "22";
let text1 = Number(number1);   // Changing int string for int
console.log(text1);

const number2 = 1234;
console.log(number2.toString());  //number changed to string

