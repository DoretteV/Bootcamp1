//our first function

// let ourFirstFunction = function(){
//     alert("Hello World!");
// }

// ourFirstFunction();

// function ourFirstFunction() {                           //use this method
//     alert("Hello World!");
// }
// ourFirstFunction();

//passing arguments into functions

// function sayHello(name) {
//     console.log("Hello ", name);

// }

// sayHello("Dorette");

//drawing cats          //its going to loop through until it has drawn the cat 10 times

// function drawCats(howManyTimes) {
//     for(let i = 0; i<howManyTimes; i++) {
//         console.log(i , "=^.^=");
//     }

// }
// drawCats(10);

//what to draw

// function drawCats(howManyTimes, whatToDraw) {
//     for(let i = 0; i<howManyTimes; i++) {
//         console.log(i , whatToDraw);
//     }

// }
// drawCats(10, "OO");

//function called double        //return returns the answer

// function double(number) {
//     return number*2;
// }
// console.log(double(8));

//using function in maths

// function double(number) {
//     return number*2;
// }
// console.log(double(8) + double(10));
// console.log(double(double(3)));

//own attempt1

// function dogs(yorkieColor, malteseColor){
//     return "The yorkie is " + yorkieColor + " and the maltese is " + malteseColor;

// }
// console.log(dogs("golden brown", "black"));

// function myFavSport(r, t){
//     let sport = {"kick": r, "serve": t};
//     return sport;
// }
// let mysport = myFavSport("rugby", "tennis ");
// alert("My favourite sport is " + mysport.kick + " , " + "but I also love " + mysport.serve + "!");

// funtion wildAnimals(l, g, e){
//     let animal = {"spots": l, "cute": g, "big": e};
//     return animal;
// }
// let myAnimal = wildAnimals("leopard", "giraffe", "elephant");
// console.log("This beautifull " + myAnimal.spots + "and this large grey " + myAnimal.big + "is more beautifull than the " + myAnimal.cute + "!")

//using functions to simplify code

// let randomWords = ["Planet", "Worm", "Flower", "Computer"];
// let word = pickRandomWord(randomWords);
// console.log(word);

// function pickRandomWord (words) {                                   //put functions at the bottom
//     return words[Math.floor(Math.random() * words.length)]
// }

// random insult generator

// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// // Pick a random body part from the randomBodyParts array:
// let randomBodyPart = pickRandomWord(randomBodyParts);
// // Pick a random adjective from the randomAdjectives array:
// let randomAdjective = pickRandomWord(randomAdjectives);
// // Pick a random word from the randomWords array:
// let randomWord = pickRandomWord(randomWords);
// // Join all the random strings into a sentence:
// let randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";       //creating a sentence
// console.log(randomString);

// function pickRandomWord (words) {                                   //put functions at the bottom
//     return words[Math.floor(Math.random() * words.length)]
// }

//fifth letter of your name

// function fifthLetter (name) {
//     if (name.lenth < 5) {
//         return "Your name is not long enough"
//     }
//     return "the fifth letter of your name is " + name[4];
// }

// //  console.log(fifthLetter("Dorette"));
// let yourName = prompt("What is your name?")
//  alert(fifthLetter("Dorette"));

// function medalScore (score) {
//     if (score < 3) {
//         return "Bronze";
//     }
//     if (score < 7) {
//         return "Silver";
//     }

//     return "Gold";
// };

// console.log(medalScore(5));

//#1 Doing arithmetic with functions

// function multiply (x,y) {
//     return x*y;
// }
// function add (x,y) {
//     return x+y;
// }

// let answer = add(multiply(36325,9824),777);
// console.log(answer);

// #2 are these arrays the same

// function areArraysSame (array1, array2) {
//    if(array1.length !== array2.length) {
//     return false;
//    }
//    for(let i = 0; i < array1.length; i++) {
//     if(array1[i] !== array2[i]) {
//         return false;
//     }
//    }
//    return true;
// }
// console.log(areArraysSame([1, 2, 3],[4, 5, 6]));
// console.log(areArraysSame([1, 2, 3],[1, 2, 3]));
// console.log(areArraysSame([1, 2, 3],[1, 2, 3, 4]));

// #3 hangman using fuctions

// let words = [
//   //secret words
//   "javascripts",
//   "monkey",
//   "amazing",
//   "pancake",
// ];

// let word = pickWord();

// let answerArray = [];
// setupAnswerArray();

// let remainingLetters = word.length;
// let guess;
// let numberOfGuesses = word.length;

// while (remainingLetters > 0) {
//   showPlayerProgress();
//   guess = getGuess();

//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else {
//     updateGameState();
//   }
// }
// showAnswerAndCongratulatePlayer();

// function pickWord() {
//   // Return a random word
//   return words[Math.floor(Math.random() * words.length)];
// }

// function setupAnswerArray() {
//   // Return the answer array
//   for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//   }
// };

// function showPlayerProgress() {
//   // Use alert to show the player their progress
//   alert(answerArray.join(" "));
// };

// function getGuess() {
//   // Use prompt to get a guess
//   return prompt("Guess a letter, or click Cancel to stop playing");
// };

// function updateGameState() {
//   // Update answerArray and return a number showing how many
//   // times the guess appears in the word so remainingLetters
//   // can be updated
//   //check to see if they guessed correctly
//   guess = guess.toLowerCase();
//   numberOfGuesses--;
//   for (let b = 0; b < word.length; b++) {
//     if (word[b] === guess) {
//       if (answerArray[b] === "_") {
//         answerArray[b] = guess;
//         remainingLetters--;
//       } else {
//         alert("You have already guessed this letter!");
//       }
//     }
//   }
// };

// function showAnswerAndCongratulatePlayer() {
//   // Use alert to show the answer and congratulate the player
//   if (guess === null) {
//       alert("You quit!");
//   }  else if(numberOfGuesses === 0 && remainingLetters > 0) {
//       alert("You ran out of guesses!");
//   } else {
//     alert("Congratulations!");
//   }
// };
