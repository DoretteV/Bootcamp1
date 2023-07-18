//Regular expressions
//using Regex

// let text = "I love JavaScript!";
// // console.log(text.match(/javascript/));          //logs null because its case sensitive.
// console.log(text.match(/javascript/i));         //i at the back makes it not case sensitive

//specifying multiple options for words

// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/i));        //finds react

// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/gi));       //use the g with the i youll get an array with all the matches

//character options

// let text = "d";
// console.log(text.match(/[abc]/));                           //returns null because there is no "d"
// console.log(text.match(/[abcd]/));                          //now it will find "d"

// let text = "d";
// console.log(text.match(/[a-d]/));                               //from a to d

// let text = "t";
// console.log(text.match(/[a-zA-Z]/));                  //its going to look for all letters lowercase & uppercase
// console.log(text.match(/[a-z]/i));                  //another way of doing it by using i
// console.log(text.match(/[a-zA-Z0-9]/g));     //looking for all alphabet and numbers from 0 - 9. g finds all matches

// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/));         //result will be null because its special characters
// console.log(text.match(/./g));                  //by using the . it will pick up all the special characters

// let text = "Just some text.";
// console.log(text.match(/./g));              //the . & g will find every single character.

// let text = "Just some text.";
// console.log(text.match(/\./g));                 //using escape character \ will only find the .

// let text = "I'm 29 years old.";
// console.log(text.match(/\d/g));                 // \d will be looking for digits (2, 9)

// let text = "Coding is a lot of fun!";
// console.log(text.match(/\s/g));                 // \s finds all the white spaces

// let text = "In the end or at the beginning?";
// console.log(text.match(/\bin/gi));                  // \bin looking for 'in' in beginning of words

// let nr = 357;
// console.log(nr.match(/3/g));                // .match can only be used on a string and not numbers

//Groups

// let text = "I love JavaScript!";            //looking for love or dislike and space then javascript of spiders
// console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

// let text = "I love JavaScript! He dislikes spiders";
// console.log(text.match(/(love|dislikes)\s(javascript|spiders)/gi));

// let text = "I love JavaScript!";            //finds 4 characters and the the next 4
// console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

// let text = "You are doing great!";
// console.log(text.match(/n?g/gi));           // n? where there might be a n infront of g

// let text = "123123123";
// console.log(text.match(/(123)+/));              //using + will find 123 many times

// let text = "123123123a";                        //will find a preceded by 123
// console.log(text.match(/(123)*a/));

// let text = "abcabcabc";
// console.log(text.match(/(abc){1,2}/));          //{} using min & max

// let text = "I love JavaScript!";            //named our group language ?<> and looking for javascript
// console.log(text.match(/(?<language>javascript)/i));

//Practical regex
//searching and replacing strings

// let text = "That's not the case.";
// console.log(text.search(/Case/i));      //tells you which index the word starts with .search

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace("Coding", "JavaScript"));      //replacing only the first coding with javascript

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace(/Coding/g, "JavaScript"));     //replace all coding with javascript using g global

//email validation

// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let validEmail = "maaike_1234@email.com";
// let invalidEmail = "maaike@mail@.com";
// console.log(validEmail.match(emailPattern));
// console.log(invalidEmail.match(emailPattern));

//functions and the arguments object

// function test(a, b, c) {
//   console.log("first:", a, arguments[0]);
//   console.log("second:", b, arguments[1]);
//   console.log("third:", c, arguments[2]);
// }
// test("fun", "js", "secrets");

// function test(a, b, c) {
//     a = "nice";
//     arguments[1] = "JavaScript";
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
//    }
//    test("fun", "js", "secrets");

//Practise exercise 12.3

// console.log("last argument", returnLastArg(1, 200, 566, 18000));

// function returnLastArg() {
//   let lastOne;
//   for (let el of arguments) {
//     console.log(el);
//     lastOne = el;
//   }
//   return lastOne;
// }

//Javascript hoisting
//using strict mode

// "use strict";

// function sayHi() {
//     greeting = "Hello!";            //not using let will give an error
//     console.log(greeting);
//    }
//    sayHi();

//Error handling

// try {
//   somethingVeryDangerous();
// } catch (e) {
//   if (e instanceof TypeError) {
//     // deal with TypeError exceptions
//     console.log("Type error");
//   } else if (e instanceof RangeError) {
//     // deal with RangeError exceptions
//     console.log("Range error");
//   } else if (e instanceof EvalError) {
//     // deal with EvalError exceptions
//     console.log("Eval error");
//   } else {
//     //deal with all other exceptions
//     throw e; //rethrow
//   }
// } finally {
//   console.log("Error or no error, I will be logged!");
// }
// function somethingVeryDangerous() {
//   throw RangeError();
// }

//Practise exercise 12.5

// try {
//   test(100);
//   test("h");
// } catch (e) {
//   console.log(e);
// }

// function test(val) {
//   if (isNaN(val)) {
//     throw `${val} is not a number`;
//   } else {
//     console.log("Got a number " + val);
//   }
// }

//Local storage
// With local storage, we can save
// key-value pairs in our web browser and use them again in a new session
//setItem stores the value
//getItem retrieves the value

//JSON Javascript Object Notation
//it's just a way of representing data using a similar format as JavaScript objects
//keys are always between ""
//Key-value pairs with values of the following types: string, number, Boolean and null
//Key-value pairs with lists, which have [ and ] that contain the items in the list
//Key-value pairs with other objects, which have { and } that contain other JSON elements

//Practise exercise 12.8

// let myList = [
//   {
//     cardealer: "Lazarus Audi",
//     cars: 150,
//   },
//   {
//     cardealer: "Porsche Sandton",
//     cars: 100,
//   },
// ];

// print();

// function print() {
//   myList.forEach((e) => {
//     console.log(e.cardealer, e.cars);
//   });
// }

//Parsing JSON
//A JavaScript string can be converted to a JSON object using the JSON.parse() function

// let str = '{"name": "Maaike", "age": 30}';
// let obj = JSON.parse(str);
// console.log(obj.name, "is", obj.age);
// console.log(JSON.stringify(obj));           //converts it back

// let dog = {
//   name: "wiesje",
//   breed: "dachshund",
// };
// let strdog = JSON.stringify(dog);           //converts it to a string
// console.log(typeof strdog);
// console.log(strdog);


//Practise exercise 12.9

// let myList = [
//   {
//     cardealer: "Lazarus Audi",
//     cars: 150,
//   },
//   {
//     cardealer: "Porsche Sandton",
//     cars: 100,
//   },
// ];


let newList = JSON.stringify(myList);
console.log(newList);
let newObj = JSON.parse(newList);

newObj.forEach((e) => console.log(e.cardealer, e.cars));






















