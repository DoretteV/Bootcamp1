// let rain = true;
// if (rain) {
//   console.log("** Taking my umbrella when I need to go outside **");
// } else {
//   console.log("** I can leave my umbrella at home **");
// }

// let age = prompt("What is your age?");
// if (age < 18) {
//   console.log("We're very sorry, but you can't get in under 18");
// } else {
//   console.log("Welcome!");
// }

// let hobby = "dancing";
// if ((hobby === "coding")) {
//   console.log("** I love coding too! **");
// } else {
//   console.log("** Can you teach me that? **");
// }

// let age = prompt("What is your age?");
// let cost = 0;
// let message;
// if (age < 3) {
//   cost = 0;
//   message = "Access is free under three.";
// } else if (age < 12) {
//   cost = 5;
//   message = "With the child discount, the fee is 5 dollars";
// } else if (age < 65) {
//   cost = 10;
//   message = "A regular ticket costs 10 dollars.";
// } else {
//   cost = 7;
//   message = "Pensioners: A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);

//Conditional ternary operators  operand1 ? "operand2" : "operand3";

// let age = prompt("What is your age?");
// let access = age < 18 ? "denied" : "allowed";
// alert(access);

//Practise exercise 4.3

// let validId = confirm("Do you have a valid id with you?");
// let access = validId ? "allowed" : "denied";
// alert(access);

//Practise exercise 4.4

// let num = Math.floor(Math.random() * 6);                //random number between 0 and 6
// let question = prompt("Ask me a question?");
// let message;
// switch (num) {
//   case 0:
//     message = `${question} I don't know!`;
//     break;
//   case 1:
//     message = `${question} Ask me later!`;
//     break;
//   case 2:
//     message = `${question} That's great!`;
//     break;
//   case 3:
//     message = `${question} Wait a few minutes!`;
//     break;
//   case 4:
//     message = `${question} I'll be back!'`;
//     break;
//   case 5:
//     message = `${question} See you later!`;
//     break;
//   case 6:
//     message = `${question} Nice to meet you!`;
//     break;
// }
// alert(message);

//Combining cases

// let grade = prompt("What grade did you get? A, B, C, D, E or F?").toUpperCase();

// switch(grade) {
//     case "F" :
//     case "D" :
//     case "E" :
//         alert("You failed!");
//     break;
//     case "C" :
//     case "B" :
//         alert("You've passed!");
//     break;
//     case "A" :
//         alert("Very Good!");
//     break;
//     default:
//         alert("I don't know that grade!");
//     break;
// }

//Practise exercise 4.5

// let num = Number(prompt("Enter a number between 1 and 10"));
// let message = "My selection: ";

// switch (num) {
//   case 1:
//   case 2:
//     message += "Your prize is a Holiday for 2 to Mauritius!";
//     break;
//   case 3:
//   case 4:
//     message += "Your prize is R10000!";
//     break;
//   case 5:
//   case 6:
//     message += "Your prize is a week stay in Kruger Park!";
//     break;
//   case 7:
//   case 8:
//     message += "Your prize is a dinner for 4 at Spur!";
//     break;
//   case 9:
//   case 10:
//     message += "Your prize is R2500";
//     break;
//   default:
//     message += "Wrong number! You dont win!";
// }
// alert(message);



