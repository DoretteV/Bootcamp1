//datatype: numbers, strings & booleans

//console.log(99*123);

//console.log("This is a long string". slice(0,4));

//console.log(true && false);

//if you want to comment out a lot of code then select everything and then ctr & /

// console.log(12345+56789);
// console.log(22+33+44);
// console.log(1000-17);
// console.log(123*456);
// console.log(12345/250);
// console.log((1234+57)*3-31/4);
// console.log(8/1+3);
// console.log(8/(1+3));
// console.log((15+9)*2);



// let nick;
// let age = 12;
// console.log(nick);
// console.log(age);
// age = 13
// console.log(age);


//let numberOfSiblings = 1+3;
//let numberOfCandies = 8;
//console.log("my answer is " , numberOfCandies / numberOfSiblings);


// //seconds in an Hour
// let secondsInAMinute = 60;
// let minutesInAnHour = 60;
// let secondsInAnHour = secondsInAMinute * minutesInAnHour;
// //seconds in a day
// let hoursInADay = 24;
// let secondsInADay = secondsInAnHour * hoursInADay;
// //seconds in a year
// let daysInAYear = 365;
// let secondsInAYear = secondsInADay * daysInAYear;
// //age in seconds
// let age = 36;
// age * secondsInAYear;
// 36 * secondsInAYear
// console.log("I am", age*secondsInAYear, "seconds old");

// Pre Increment

// let highFives = 0;
// ++highFives
// console.log(highFives);
// ++highFives
// console.log(highFives);
// --highFives
// console.log(highFives);

//Post Increment

// let highFives = 0;
// console.log(highFives++ + 5);

// let x = 10
// x = x + 5
// console.log(x)

// let x = 10;
// x +=5;
// console.log(x)

// let score = 10;
// score += 7;
// score -= 3;
// console.log(score);

// let balloons = 100;
// balloons *= 2;
// console.log(balloons);

// let balloons = 100;
// balloons /= 4;
// console.log(balloons);

// let numberNine = 9;
// let stringNine = "9"
// console.log(numberNine+numberNine);
// console.log(stringNine+stringNine);
// console.log(numberNine+stringNine);

// let greeting = "Hello";
// let myName = "Dorette";
// console.log(greeting + " " + myName);

//length of a string

// "Supercalifragilisticexpialidocious".length;
// console.log("Supercalifragilisticexpialidocious".length);

// let x = "Howmanydaysareinayear";
// console.log(x.length);

//getting a single character from a string

// let myName = "Dorette";
// console.log(myName[0]);
// console.log(myName[myName.length-1]);
// console.log(myName[4]);

//joining strings (best)

// let codeWord1 = "bin";
// let codeWord2 = "eat";
// let codeWord3 = "seat";
// let codeWord4 = "tiny";1
// let code = codeWord1[0] + codeWord2[0] + codeWord3[0] + codeWord4[0];
// console.log(code);

// cutting up strings/long strings

// console.log("A string".slice(1,5));
// console.log("A string".slice(2));

// let longString = "My long string is long";
// console.log(longString.slice(3 , 14));  //slice certain words
// console.log(longString.slice(7 , 17));
// console.log(longString.slice(3));   //slices everything from 3 onwards.

//changing strings to all capital or all lower case1

// console.log("Hello there, how are you doing?".toUpperCase());
// console.log("Hello there, how are you doing?".toLocaleLowerCase());

// let x = "hELlo THERE, hOW ARE yOu doINg?";
// x = x[0].toLocaleUpperCase() + x.slice(1).toLowerCase();
// console.log(x);

//booleans && true/fals  || or1

// let javascriptIsCool = true;
// console.log(javascriptIsCool);

// let hadShower = true;
// let hasBackpack = false;
// console.log(hadShower && hasBackpack);

// let hasApple = true;
// let hasOrange = false;
// console.log(hasApple || hasOrange);

// let isWeekend = true;
// let needToShowerToday = !isWeekend       //exclamation mark makes it an opposite of what it was. If it was true it will make it false
// console.log("need to shower today",needToShowerToday);

//combination of booleans
// let isWeekend = false;
// let hadShower = true;
// let hasApple = false;
// let hasOrange = true;
// let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
// console.log("Should you go to School",shouldGoToSchool);

//example with confirm and alert instead of console
// let isWeekend = confirm("Is it weekeng?");
// let hadShower = confirm("Did you have a shower?");
// let hasApple = confirm("Do you have an apple?");
// let hasOrange = confirm("Do you have an orange?");
// let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
// console.log(shouldGoToSchool);
// alert("Should you go to school?" + shouldGoToSchool);

//comparing numbers

//height restrictions
//prompt and >=
// let height = prompt("What is your height?");
// let heightRestriction = 60;
// alert("Is allowed on the ride?"+ (height >= heightRestriction));

//prompt and <=
// let height = prompt("What is your height?");
// let heightRestriction = 48;
// alert("Is allowed on the ride?" + (height <= heightRestriction));


//using alert and ===
// let mySecretNumber = 5;
// let chicoGuess = 3;
// console.log("chicoGuess", mySecretNumber === chicoGuess);

// let harpoGuess = 7;
// console.log("harpoGuess", mySecretNumber === harpoGuess);

// let grouchoGuess= 5;
// console.log("grouchoGuess", mySecretNumber === grouchoGuess);

// let mySecretNumber = 5;
// alert("You guessed correctly?" + (mySecretNumber == (prompt("Guess the number:"))));

// === it must be exactly the same
// == does not have to be exactly the same

// let stringNumber = "5";
// let actualNumber = 5;
// console.log(stringNumber == actualNumber);

// try it out page 37

// let age = prompt("what is your age?");
// let accompanied = confirm("are you accompanied by an adult?");
// alert("are you allowed?" + (age >= 13 || accompanied));

//undefines and null1
15



