// while loops

// let i = 0;

// while (i < 10) {                //loop will stop when it reaches 10
//  console.log(i);
//  i++;
// }

//convert to for a loop

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for(let i = 1, x = 3; i < 100; i *= x) {
//     console.log(i);
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;

// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//   fibonacciArray.push(nr1);
//   temp = nr1 + nr2;
//   nr1 = nr2;
//   nr2 = temp;
// }
// console.log(fibonacciArray);

// Practise exercise 5.1 with a do while loop

// let incorrect = true;
// let secret = Math.floor(Math.random() * 10 + 1);
// while (incorrect) {
//   guess = Number(prompt("Guess a number between 1 and 10"));
//   if (guess === secret) {
//     alert("Correct!");
//     incorrect = false;
//   } else if (guess < secret) {
//     alert("Too low");
//   } else {
//     alert("Too high");
//   }
// }

//do while loop

// let incorrect = true;
// let secret = Math.floor(Math.random() * 10 + 1);

// do {
//     guess = Number(prompt("Guess a number between 1 and 10"));
//     if (guess === secret) {
//       alert("Correct!");
//       incorrect = false;
//     } else if (guess < secret) {
//       alert("Too low");
//     } else {
//       alert("Too high");
//     }
// } while(incorrect)

//pushing numbers into our array

// let arr = [];
// for (let i = 0; i < 100; i++) {
//  arr.push(i);
// }
// console.log(arr);

//pushing numbers into our array in 2's

// let arr = [];
// for (let i = 0; i < 100; i = i + 2) {
//  arr.push(i);
// }
// console.log(arr);

//Practise exercise 5.3

// let myWork = [];
// let lesson;
// for(let i = 1; i < 11; i++) {
//     lesson = {};
//     lesson.name = `Lesson ${i}`;
//     lesson.status = i % 2 ? true : false;               //ternary operator
//     myWork.push(lesson);
// }

// console.log(myWork);

//Nesting loops

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//   arrOfArrays.push([]);
//   for (let j = 0; j < 7; j++) {
//     arrOfArrays[i].push(j);
//   }
// }
// console.log(arrOfArrays);

//Practise exercise 5.4

// let myTable = [];
// let rows = 5;
// let cols = 5;
// let temp;
// let counter = 1;
// for (let i = 0; i < rows; i++) {
//   temp = [];
//   for (let x = 0; x < cols; x++) {
//     temp.push(counter);
//     counter++;
//   }
//   myTable.push(temp);
// }
// console.log(myTable);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//  console.log(names[i]);
// }

//Practise exercise 5.5

// let myTable = [];
// let temp = [];
// for (let count = 1; count < 65; count++) {
//   temp.push(count);
//   if (count % 8 === 0) {                //modulus check for remainder
//     myTable.push(temp);
//     temp = [];
//   }
// }
// console.log(myTable);

//for of loop you dont need to check the length

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];             //loops through and prints on console
// for (let name of names) {
//   console.log(name);
// }

//Practise exercise 5.6

// let numbers = [];

// for (let i = 0; i < 10; i++) {
//   numbers.push(i);
// }

// console.log(numbers);

// console.log("normal for loop");
// for (let x = 0; x < numbers.length; x++) {
//   console.log(numbers[x]);
// }

// console.log("for of loop");                         //quick way
// for (let e of numbers) {
//   console.log(e);
// }

//for in loop is for objects

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//    };
//    for (let prop in car){                           //we have to use "in"
//     console.log(car[prop]);                         //to get the values
//    }

//Practise exercise 5.7

// let dog = {
//     name : "Max",
//     color : "Brown",
//     breed : "Boerboel",
// }
// for (let keys in dog){
//     console.log(keys, dog[keys]);               //get the key and the value
// }

// let arr = ["Max", "Brown", "Boerboel"];         //for in loop through array

// for (let keys in arr) {
//     console.log(keys, arr[keys]);
// }

// let dog = {
//     name : "Max",
//     color : "Brown",
//     breed : "Boerboel",
// }

// for (let key of Object.keys(dog)) {                 //get the keys of an object
//     console.log(key);
// }

// for (let value of Object.values(dog)) {                 //get the values of an object
//     console.log(value);
// }

// for (let entry of Object.entries(dog)) {                 //get the values and keys of an object use entries
//     console.log(entry);
// }

//Practise exercise 5.8

// let output = "";
// let num = Number(prompt("Which number should I skip between 1 and 10?"));
// for (let i = 0; i < 10; i++) {
//   if (i === num) {
//     continue;                                               //skip a number that you choose
//   }
//   output += i;
// }
// alert(output);

//naming loops and break out of the loop

// let groups = [
//   ["Martin", "Daniel", "Keith"],
//   ["Margot", "Marina", "Ali"],
//   ["Helen", "Jonah", "Sambikos"],
// ];

// for (let i = 0; i < groups.length; i++) {
//   let matches = 0;
//   for (let j = 0; j < groups[i].length; j++) {
//     if (groups[i][j].startsWith("M")) {
//       matches++;
//     } else {
//       continue;
//     }
//     if (matches === 2) {
//       console.log("Found a group with two names starting with an M:");
//       console.log(groups[i]);
//       break;
//     }
//   }
// }
// outer:                                                              //naming loops and breaking out of both loops
// for (let group of groups) {
//     inner:
//   for (let member of group) {
//     if (member.startsWith("M")) {
//       console.log("found one starting with M:", member);
//       break outer;
//     }
//   }
// }


