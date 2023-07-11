//Conditionals and Loops

//Conditionals
//if statements and else statements
//if you’ve been good, you get a treat; else, you get grounded.
//if statements

// let fname = "Nicholas";
// console.log("Hello " + fname);
// if (fname.length > 7) {
//     console.log("Wow you have a really long name!");
// }

//else statments

// let fname = "Nicholas";
// console.log("Hello " + fname);
// if (fname.length > 9) {
//     console.log("Wow you have a really long name!");  // if its true
// }else {
//     console.log("Your name isn't very long");       //if its false1
// }

//chaining if statement & else statement
//else if

// let lemonChicken = false;
// let beefWithBlackBean = false;
// let sweetAndSourPork = false;

// if (lemonChicken) {
//   console.log("Great! I'm having lemon chicken!");
// } else if (beefWithBlackBean) {
//   console.log("I'm having the beef.");
// } else if (sweetAndSourPork) {
//   console.log("Ok, I'll have the pork.");
// } else {
//   console.log("Well, I guess I'll have rice then.");
// }

//try it page 96

// let fname = prompt("What is your name?");
// if (fname.toLowerCase() === "dorette") {
//     alert("Hello me!");
// } else {
//     alert("Hello stranger!");
// }

//own attempt
//can you watch the movie?

// let movie = prompt("What is your age?");
// if (movie === "13") {
//     alert("Enjoy the movie!");
// } else {
//     alert("Sorry you'll have to watch something else");
// }

//loops
//allow you to run a piece of code multiple times

//while loops has a condition
//counting sheep until its false (reaches 10)
//using alert

// let sheepCounted = 0;
// while (sheepCounted < 10) {
//     alert("I have counted " + sheepCounted + " sheep!");
//     sheepCounted++;
// }
// alert("Zzzzzzzz!");

// //using console.log

// let sheepCounted = 0;
// while (sheepCounted < 10) {
//     console.log("I have counted " + sheepCounted + " sheep!");
//     sheepCounted++;
// }
// console.log("Zzzzzzzz!");

// //countdown

// let countDown = 10;
// while (countDown > 0) {
//     alert(countDown);
//     countDown--;
// }
// alert("Fast asleep!");

// //for loops
// //for loop you can put in one line

// for (let sheepCounted = 0;sheepCounted < 10;sheepCounted++) {
//     alert("I have counted " + sheepCounted + " sheep!");
// }
// alert("Zzzzzzzzz!");

// let timesToSayHello = 20;
// for (let i = 0; i < timesToSayHello; i++) {
//     console.log("Hello!");
// }

//own attempt

// let kick = 15;
// for (let ball = 0; ball < kick; ball++) {
//     console.log("Winner!");
// }

//using for loops with arrays and strings

// let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
// for (let i = 0; i < animals.length; i++) {                                   //"i" = index
//     console.log("This zoo contains a " + animals[i] + ".");
// }

//own attempt/example

// let garage = ["Porsche", "BMW", "Audi", "Toyota", "Nissan"];
// for (let car = 0; car < garage.length; car++) {
//     console.log("This website contains a " + garage[car] + ".");
// }

// let name = "Dorette";
// for (let i = 0; i < name.length; i++) {
//     console.log ("My name contains the letter " + name[i] + ".");
// }

// //other ways to use for loops
//power of 2

// for (let x = 2; x < 10000; x = x * 2) {
//     console.log(x);
// }

//power of 3

// for (let x = 3; x < 10000; x = x * 3) {
//     console.log(x);
// }

//exercise #1 awesome animals

// let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
// for (let i = 0; i < animals.length; i++) {
//     animals[1] = "Awesome " + animals[i]
// }
// console.log(animals);

//exercise #2 random string generator

// let i = 0;
// let randomString = ""; 
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// while(i < 6) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//     i++;
// }
// console.log(randomString);

//exercise #3

// let input = "javascript is awesome";
// let output = "";
// for (let i = 0; i < input.length; i++) {
//     if (input[i] === "e") {
//         output += "3";
//     } else if (input[i] === "i") {
//         output += "1";
//     } else if (input[i] === "o") {
//         output += "0";
//     } else if (input[i] === "a") {
//         output += "4";
//     } else {
//         output += input[i];
//     }
// }

// console.log(output);





