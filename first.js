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

const myNumbers = [1, 2, 3, 4, 5]
console.log(myNumbers[0]);
console.log(myNumbers.length);

const array2dNew =  [];
array2dNew[0] = [1, 2, 3, 4, 5];
array2dNew[1] = ["Ala", "Adam"];
array2dNew[2] = ["Wojtek", "Kasia"];
array2dNew[3] = [3, 4, 5, 6];
console.log(array2dNew[0][4]); /* Zwróci 5 */
console.log(array2dNew[1][1]); /* Zwróci "Adam” */
console.log(array2dNew[2][0]); /* Zwróci "Wojtek" */
console.log(array2dNew[3][3]); /* Zwróci 6 */
console.log(array2dNew[3][4]); /* Zwróci undefined*/
