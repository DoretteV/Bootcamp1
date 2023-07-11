// function sayHello() {
//   let you = prompt("What's your name? ");
//   console.log("Hello", you + "!");
// }
// sayHello();

//Practise exercise 6.2
//creating an array with compliments and then prompt name and get random compliments

// let words = [
//   "you are beautiful",
//   "your eyes are lovely",
//   "you dance so well",
//   "you are good at everything",
// ];
// getCompliment();
// function getCompliment() {
//   let user = prompt("What is your name?");
//   let compliment = words[Math.floor(Math.random() * words.length)];
//   alert(`${user} ${compliment}`);
// }

//Practise exercise 6.3

// function calculate(num1, num2, operator) {
//   if (operator === "*") {
//     return num1 * num2;
//   }
//   if (operator === "-") {
//     return num1 - num2;
//   }
//   if (operator === "/") {
//     return num1 / num2;
//   }
//   if (operator === "%") {
//     return num1 % num2;
//   }
//   if (operator === "**") {
//     return num1 ** num2;
//   }                                                 //if you dont use an operator its using +
//   return num1 + num2;
// }

// alert(calculate(10, 3, "*"));

//default or unsuitable parameters

// function addTwoNumbers(x = 0, y = 0) {           //assign a number to x and y
//   return x + y;
// }
// alert(addTwoNumbers(5,8));

//special functions and operators
//arrow functions

// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Great!");

// let sayHi = () => alert("Hi");
// sayHi();

//forEach works with each element in the array

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => alert(e));                          //alert all the names in the array
// let result = arr.find(e => e === "buddy");              //finds a word in the array and alert that word.
// alert(result);

//spread operator consist of 3 ...

// let arr = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...arr, "and", "very", "powerful"];
// console.log(message);

// function addTwoNumbers(x = 0, y = 0) {           //assign a number to x and y
//   return x + y;
// }
// let arr = [5, 9];
// alert(addTwoNumbers(...arr));

function addFourNumbers (x, y, z, a) {
    console.log(x + y + z + a);
}

let arr = [5, 9];
let arr2 = [6, 7];

addFourNumbers(...arr, ...arr2);












