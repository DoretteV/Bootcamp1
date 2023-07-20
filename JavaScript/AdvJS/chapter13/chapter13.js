//Concurrency
//Callbacks
//Promises
//Async/await
//Event loop

//Callbacks
//It is just a function that takes another function as an argument, which is
//then called when the rest of the initial function has finished. In other words, it's just a
//function calling a function

// function doSomething(callback) {
//   callback();
// }
// function sayHi() {                      //sayhi is going into the function callback so it will print hi
//   console.log("Hi!");
// }
// doSomething(sayHi);

// function judge(grade) {
//   switch (grade) {
//     case "A":
//       console.log("You got an", grade, ": amazing!");
//       break;
//     case "B":
//       console.log("You got a", grade, ": well done!");
//       break;
//     case "C":
//       console.log("You got a", grade, ": alright.");
//       break;
//     case "D":
//       console.log("You got a", grade, ": hmmm...");
//       break;
//     default:
//       console.log("An", grade, "! What?!");
//   }
// }
// function getGrade(score, callback) {
//   let grade;
//   switch (true) {                                //passing a score of 85 and then it goes to the top function
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       console.log(score);
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//   }
//   callback(grade);                           //callback is calling the function judge at the top
// }
// getGrade(85, judge);

//Practise exercise 13.1

// splitName("Sheryl Dreyer", greet);

// function splitName(stringFullName, callback) {
//     let arrayFullName = stringFullName.split(" ");          //split the name into an array
//     callback(arrayFullName);
// }

// function greet(arrayFullName) {
//     console.log(`Hello ${arrayFullName[0]} ${arrayFullName[1]}}`)
// }

//own attempt

// animal("Max Boerboel", info)

// function animal(breed, callback) {
//     let arrayAnimal = breed.split(" ");
//     callback(arrayAnimal);
// }

// function info(arrayAnimal) {
//     console.log(`${arrayAnimal[0]} is a ${arrayAnimal[1]}`)
// }

//Promises
//With Promises, we can organize the sequence of our code in a slightly easier-tomaintain way.
//A Promise is a special object that connects code that needs to produce
//a result and the code that needs to use this result in the next step.
//When we create a Promise, we give it a function
//Promise have resolve() first and reject() second

// let promise = new Promise(function (resolve, reject) {
//   // do something that might take a while
//   // let's just set x instead for this example
//   let x = 20;
//   if (x > 10) {
//     resolve(x); // on success
//   } else {
//     reject("Too low"); // on error
//   }
// });
// promise.then(                           //x is passed into .then only resolve gets passed to .then
//   function (value) {                   //first function is always resolve
//     console.log("Success:", value);     //value is 20
//   }
// ).catch(error => console.log(error));   //catch will catch all the errors and print it to the console

// let promise = new Promise((resolve, reject) => {
//   resolve("success!");
// })
//   .then((value) => {                    //success will be passed into .then
//     console.log(value);
//     return "we";
//   })
//   .then((value) => {                    //we will be passed into .then
//     console.log(value);
//     return "can";
//   })
//   .then((value) => {                    //can passed into .then
//     console.log(value);
//     return "chain";
//   })
//   .then((value) => {                    //chain passed into .then
//     console.log(value);
//     return "promises";
//   })
//   .then((value) => {                    //promises passed into .then
//     console.log(value);
//   })
//   .catch((value) => {           //reject/errors will be caught here .catch
//     console.log(value);
//   });

// let promise = new Promise((resolve, reject) => {
//   reject("oops... ");
// })
//   .then((value) => {
//     console.log(value);
//     return "we";
//   })
//   .then((value) => {
//     console.log(value);
//     return "can";
//   })
//   .then((value) => {
//     console.log(value);
//     return "chain";
//   })
//   .then((value) => {
//     console.log(value);
//     return "promises";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {           //.catch will catch the reject and print to the console
//     console.log(value);
//   });

//Practise exercise 13.2

// new Promise((resolve, reject) => {
//     resolve("Start Counting");
// })
//     .then((value) => {
//         console.log(value);
//         return "One";
//     })
//     .then((value) => {
//         console.log(value);
//         return "Two";
//     })
//     .then((value) => {
//         console.log(value);
//         return "Three";
//     })
//     .then((value) => {
//         console.log(value);
//     })
//     .catch(error => console.log(error))

//async and await
//With the async keyword, we can make a function return a Promise
//We can use this Promise just like we learned in
//the previous section, or we can use the more powerful await keyword to wait until
//the Promise is done. await only works in an asynchronous function
// await is only valid in asynchronous functions

// function saySomething(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("something" + x);
//     }, 2000);
//   });
// }
// async function talk(x) {
//   const words = await saySomething(x);
//   console.log(words);
// }
// talk(2);                                    //ran concurrently after waiting 2000 miliseconds
// talk(4);
// talk(8);

//Practise exercise 13.3

// let cnt = 0;
// function outputTime(val) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       cnt++;
//       resolve(`x value ${val} counter:${cnt}`);             //only returns resolve after a 1000miliseconds
//     }, 1000);
//   });
// }
// async function aCall(val) {
//   console.log(`ready ${val} counter:${cnt}`);
//   let res = await outputTime(val);                          //this function will be running first
//   console.log(res);
// }
// for (let x = 1; x < 4; x++) {
//   aCall(x);
// }

//Event loop
//This single executor is the event loop
//Call stack and callback queue
//JavaScript works with a call stack, and all the actions that it has to execute are
//queued up here. The event loop is a process that is constantly monitoring this call
//stack, and whenever there are tasks to do, the event loop does them one by one

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 1000);          //this will be done last after a 1000miliseconds
// console.log(add(4, 5));
// function add(x, y) {
//   return x + y;
// }
