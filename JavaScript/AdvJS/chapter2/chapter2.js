// const someConstant = 3;
// someConstant = 4;               //error cant change const

// let funActivity = 'Let's learn JavaScript';     //rather use double quotes ""
// let funActivity = 'Let\'s learn JavaScript';        //or use \ to let them know its part of the string
// let funActivity = "Let's learn JavaScript";          // \ is called an escape character

// let question = "Do you want to learn JavaScript? \"Yes!\"";
// let question = `Do you want to learn JavaScript? "Yes!"`;

// let language = "JavaScript";
// let message = `Let's learn ${language}`;        //putting a $ will use the variable language in the sentence instead of +
// console.log(message);                           

// let str3 = "New \nline.";                               // \n goes to a new line so line will be in a new line
// let str4 = "I'm containing a backslash: \\!";
// console.log(str3);
// console.log(str4);

//BigInt uses an n at the back

// let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;
// let octNr = 0o10; //decimal version would be 8
// let hexNr = 0x3E8; //decimal version would be 1000
// let binNr = 0b101; //decimal version would be 5

// let bigNr = 90071992547409920n;
// let result = intNr + bigNr;                     //they cant be mixed.

//Symbol
//symbol are not the same although they might look the same.

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);      //true

// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);      //false

// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;

// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);

// let nr1 = 2;
// let nr2 = "2";                  //if it has a letter in youll get a NaN error
// console.log(nr1 * nr2);         //answer will be 4

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + nr2);         //this answer will be 22

// let nrToStr = 6;
// nrToStr = String(nrToStr);                  //convert number to string
// console.log(nrToStr, typeof nrToStr);       //check the typeof it now

// let strToNr = "12";
// strToNr = Number(strToNr);                  //convert string to a number
// console.log(strToNr, typeof strToNr)

// let nullToNr = null;
// nullToNr = Number(nullToNr);                //convert null to a number 0
// console.log("null", nullToNr, typeof nullToNr);

// let strToNr2 = "hello";
// strToNr2 = Number(strToNr2);                //cant convert to a number. getting a NaN error
// console.log(strToNr2, typeof strToNr2);

// let strToBool2 = "false";                       //0, null, undefined converts to "false"
// strToBool2 = Boolean(strToBool2);
// console.log(strToBool2, typeof strToBool2);

// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;

// console.log(str1, typeof str1);
// console.log(str2, typeof str2);
// console.log(val1, typeof val1);
// console.log(val2, typeof val2);
// console.log(myNum, typeof myNum);

// let myName = "Dorette";
// let age = 36;
// codeJS = true;

// alert(`Hello, my name is ${myName}, I am ${age} years old, and I can code in JavaScript: ${codeJS}`);       //use back tic `` and not single quotes ''

// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3;               //cant subtract a string if there is no number in there. NaN error
// console.log(result1, result2);

// let nr1 = 20;
// let nr2 = 4;
// let str1 = "12";
// let nr3 = 3;
// let result1 = nr1 * nr2;
// let result2 = str1 * nr3;        //NaN      
// console.log(result1, result2);

// 2 stars for exponential **

// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;                   //(2*2*2) = 8
// console.log(result1);

//modulus to get the remainder

// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;                        // doing the calculation
// console.log(`${nr1} % ${nr2} = ${result1}`);

//Increment and decrement (unary operators)

// let nr1 = 4;
// nr1++;
// console.log(nr1);

// let nr2 = 4;
// nr2--;
// console.log(nr2);

// let nr1 = 4;
// console.log(++nr1 + ++nr1);          //first adds so 4 becomes 5 and then adds again so 5+6=11
// console.log(nr1);

//Practice exercise 2.3

// alert("Enter the sizes of the sides of a right angle triangle and I will calculate the hypotenuse for you!");
// let a = Number(prompt("What is the size of the one side?"));
// let b = Number(prompt("What is the size of the second side?"));
// let cSquared = (a ** 2) + (b ** 2);
// let c = Math.sqrt(cSquared);
// alert(`The hypotenuse is ${c}`);

//Assignment operators

//Practise exercise 2.4

let a = 2;
let b = 4;
let c = 6;
a += b;                         //adding b to a
a /= c;                         //divide a by c
c %= b;                         //replace the value of c with the modulus of c and b

console.log(a, b, c);



















