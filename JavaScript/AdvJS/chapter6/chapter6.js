// "use strict";

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

// function addFourNumbers (x, y, z, a) {
//     console.log(x + y + z + a);
// }

// let arr = [5, 9];
// let arr2 = [6, 7];

// addFourNumbers(...arr, ...arr2);

//Rest parameter is used in the function itself

// function someFunction(param1, ...param2) {
//   console.log(param1, param2);

// }
// someFunction("Hi", "there", "how are you?", "I am well", "Lets go out", "Where are we going?");

//Returning function values

// function addTwoNumbers(x = 0, y = 0) {
//   return x + y;
// }
// let result = addTwoNumbers(4, 5);
// console.log(result);

// let resultArr = [];

// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, i*2);
//     resultArr.push(result);
// }
// console.log(resultArr);

//Practise exercise 6.4

// function addTwoNumbers(x = 0, y = 0) {
//   return x + y;
// }

// let resultArr = [];

// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i*5, i*i);
//     resultArr.push(result);
// }
// console.log(resultArr);

//Returning arrow functions

// let addTwoNumbers = (x = 0, y = 0) => {
//     console.log("busy adding");
//     return x + y;                                               //if theres more than 1 statement use {} and return
// }
// let resultArr = [];                                                // => returns the result

// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i*5, i*i);
//     resultArr.push(result);
// }
// console.log(resultArr);

//Local variables in functions
//function parameters

// function testAvailability(x) {
//     console.log(`Available here ${x}`);
// }
// testAvailability("Hi!");

// function testAvailability(x) {
//     let y = "local variable!"
//     console.log(`Available here ${y}`);
//     console.log(`Available here ${x}`);
// }
// testAvailability("Hi!");
// console.log(`y is not available here ${y}`);
// console.log(`x is not available here ${x}`);

// function testAvailability() {
//     let y = "I'll return!";
//     console.log(`Available here ${y}`);
//     return y;
// }

// let z = testAvailability();
// console.log(`z is available here ${z}`);

// function doingStuff() {                             //let is block scope
//     if (true) {                                     //var is function scope
//         var x = "local";                             //const is also block scope
//     }
//     console.log(x);
// }
// doingStuff();

//global variables can be accessed/used anywhere

// let x = "global";

// function doingStuff() {
//   let x = "local";                                   //if you dont use let infront of x, x will be a global variable
//   console.log(x);
// }

// doingStuff();                                       //printing global
// console.log(x);                                     //printing local

//IIFE Immediately invoked function expression

// (function() {console.log("anonymous")})()

// (function(name, age) {console.log(name, age)})("Dorette", "36")

//changing to an arrow => function

// ((fName, age) => console.log(fName, age))("Dorette", "36")

//Practise exercise 6.5

// let val = 1000;

// let val2 = (()=>{
//     let val = "Dorette";
//     console.log(`inside function ${val}`);
//     return val;
// })()

// console.log(`outside function ${val}`);
// console.log(`outside function ${val2}`);

//Recursive functions

// function getRecursive(nr) {
//   console.log("started function: " + nr);
//   if (nr > 0) {
//     getRecursive(nr - 1);
//   } else {
//     console.log("done with recursion ");
//   }
//   console.log("finished function " + nr);
// }

// getRecursive(3);

//Practise exercise 6.6

// function calcFactorial(nr) {
//   if (nr === 0) {
//     return 1;
//   } else {
//     return nr * calcFactorial(nr - 1);
//   }
// }

// let num = Number(prompt("Give me a number to calculate a factorial for you?"));
// let factorial = calcFactorial(num);
// alert(`The factorial of ${num} is ${factorial}`);

//Nested functions

// function doOuterFunctionStuff(nr) {
//   console.log("Outer function");
//   doInnerFunctionStuff(nr);
//   function doInnerFunctionStuff(x) {
//     console.log(x + 7);
//     console.log(nr);
//   }
//   console.log(x);                                       //x is not defined. It does not have access to the innerfunction
// }
// doOuterFunctionStuff(2);

//Practise exercise 6.8

// let myFunction = function (car) {                    //normal function
//   console.log(`I like ${car}`);
// };

// myFunction("Audi!");

// function myFunc(car) {                              //anonymous funtion
//   console.log(`I like ${car}`);
// }

// myFunc("Audi!");

//Function callbacks pass a function as a parameter

// function functionVariable() {
//   console.log("Not so secret though.");
// }

// function doFlexibleStuff(executeStuff) {
//   executeStuff();
// }

// doFlexibleStuff(functionVariable);

// function newFunction() {
//   console.log("My own attempt!");
// }

// function secondFunction(x) {
//   x();
// }

// secondFunction(newFunction);

// function youGotThis () {
//   console.log("You're doing really well, keep coding!");
// };
// setTimeout(youGotThis, 1000);                   //setTimeout will only print after 1000 miliseconds

