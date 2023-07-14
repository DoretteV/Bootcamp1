//JavaScript methods
//using methods in a chain

// let s = "Hello";
// console.log(s.concat(" there!").toUpperCase().replace("THERE", "you").concat(" You're amazing!")
// );

//global methods
//we can just use the method as it is

// let x = 7;
// console.log(isNaN(x));                  //isNaN looks at the value

//Decoding and encoding URI's
//URL is a subcategory of URI
//spaces will be converted to %20

// let uri = "https://www.example.com/submit?name=maaike van putten";

// let encodedUri = encodeURI(uri);
// console.log(encodedUri);
// let decodedUri = decodeURI(encodedUri);
// console.log(decodedUri);

//Practise exercise 8.1

// let encodedString = "How's%20it%20going%3F";
// let decodedString = decodeURIComponent(encodedString);
// console.log(decodedString);
// encodedString = encodeURIComponent(decodedString);
// console.log(encodedString);

// let webUri = "http://www.basescripts.com?=Hello World";
// let encodedWebUri = encodeURI(webUri);
// console.log(encodedWebUri);

//parseInt()

// let str_float = "7.6";                                      //it cutts of .6 it doesnt recognize .
// let int_float = Number(str_float);                          //rahter use Number it will show 7.6
// console.log("Type of", int_float, "is", typeof int_float);

//parseFloat()

// let str_float = "7.6";
// let float_float = parseFloat(str_float);                            //can also use Number instead on parseFloat
// console.log("Type of", float_float, "is", typeof float_float);

//eval() global method and is used in html and it has to be javascript
//not wise to use for security reasons so its better to avoid

//Array methods

// let arr = ["grapefruit", 4, "hello", 5.6, true];

// function printStuff(element, index) {                                   //can also take out the index
//   console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

//Filtering an array
//and using .forEach
//filtering through the array and then giving the position of the filtered string

// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// let filterArray = arr.filter(checkString).forEach(printStuff);

// function checkString(element, index) {
//   return typeof element === "string";
// }

// function printStuff(element, index) {                                   //can also take out the index
//   console.log("Printing stuff:", element, "on array position:", index);
// }

//checking a condition for all elements with .every
//checking if ALL elements in the array is strings and returns true of false

// let arr = ["squirrel", 5, "Tjed", "new Date()", "true"];

// function checkString(element, index) {
//   return typeof element === "string";
// }
// function checkNum(element) {                        //check for if everything in the array is numbers
//   return typeof element === "number";
// }

// console.log(arr.every(checkString));
// console.log(arr.every(checkNum));

// let arr = [1, 3, 20, 9];

// function checkNum(element) {                //if return is true all the numbers must be < 10 else it will return false              
//     return element < 10;
//   }

//   console.log(arr.every(checkNum));

//.copyWithin method
//replace part of an array with part of an array

// arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(arr);
// // arr.copyWithin(0, 3, 5);
// arr.copyWithin(0, 3);
// console.log(arr);

//mapping the values of an array
//added 1 to each number in the array
//map will return a new array
//can also use printStuff to print the element and index

// let arr = [1, 2, 3, 4];
// // let mappedAarr = arr.map(x => x + 1);
// arr.map(x => x + 1)
// .forEach(printStuff);

// function printStuff(element, index) {                                   //can also take out the index
//   console.log("Printing stuff:", element, "on array position:", index);
// }

//Practise exercise 8.2

// let arr = ["Dorette", "Pierre", "Rynhardt", "Pierre", "Estelle"]

// let arr1 = arr.filter((element, index, array) => {
//     console.log(element, " in index ", index);
//     return array.indexOf(element) === index;
// })

// console.log(arr1);

//Practise exercise 8.3

// let arr = [2, 4, 6, 8, 10];
// let arr2 = arr.map(x => x * 2);
// console.log(arr2);

//String methods
//converting a string to an array

// let result = "Hello JavaScript";
// let arrResult = result.split(" ");          //if it was splitted by a , or . you need to use , or .
// console.log(arrResult);

//using charAt to see the index of 

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let pos1 = poem.charAt(10);
// console.log(pos1);

//using .replace to replace

// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);

//uppercase and lowercase
//converting from uppercase to lowercase

// let caps = "HI HOW ARE YOU?";
// console.log(caps[0] + caps.slice(1).toLowerCase());

//start and end of a string

// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);                                    //its going to return true
// let bool_end = encouragement.endsWith("!");
// console.log(bool_end);    

//Practise exercise 8.4

// let sentence = "thIs will be capiTalized for each word";

// function capSent(sentence) {
//     let newArr = sentence.toLowerCase().split(" ");
//     let emptyArr = [];
//     newArr.forEach(element => {
//         let newE = element[0].toUpperCase() + element.slice(1).toLowerCase();
//         emptyArr.push(newE);
//     });
//     return emptyArr.join(" ");
// }

// console.log(capSent(sentence));

//Practise exercise 8.5
//replace the element(vowels) with the index of the vowel(exampel 2 of 3)

// let words = "I love JavaScript";
// words = words.toLowerCase();

// let vowels = ["a", "e", "i", "o", "u"];

// vowels.forEach((element, index) => {
//     words = words.replaceAll(element, index);
// })

// console.log(words);

//Number methods
//specifying a number of decimals with .toFixed and also round it off

// let x = 1.23456;
// let newX = x.toFixed(3);
// console.log(x, newX);

//specifying precisiong will count the numbers (3)

// let x = 1.23456;
// let newX = x.toPrecision(3);
// console.log(newX);

//Math methods
//finding the highest and lowest numbers

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

//square root and raising to the power of

// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);                       //or (5**3)

//turning decimals into integers
//.round the numbers of
//.ceil will round it upwards 
//.trunc is the same as .floor

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

//Practise exercise 8.6

// console.log(Math.PI);
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * (10-0) + 0));
// console.log(Math.floor(Math.random() * (10-1) + 1));
// console.log(Math.floor(Math.random() * (100-1) + 1));
// let min = 1;
// let max = 100;
// for (let i = 0; i < 100; i++) {
//     console.log(Math.floor(Math.random() * (max-min) + min));
// }

//Dates
//creating dates

// let currentDateTime = new Date();
// console.log(currentDateTime);

//This will log the current time, represented in seconds since January 1st 1970. This is
// an arbitrary date representing the Unix epoch. In this case:

// let now2 = Date.now();
// console.log(now2);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);          //0=jan, 1=feb exectra
// console.log(specificDate);

//parsing dates

// let d1 = Date.parse("June 5, 2021");
// console.log(d1);                            //converts to an epoch date

//converting a date to a string

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate.toDateString());

//Practise exercise 8.7

// let futureDate = new Date (2030, 7, 15);
// console.log(futureDate);

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let day = futureDate.getDate();
// let year = futureDate.getFullYear();
// let month = futureDate.getMonth();

// let date = `${months[month-1]} ${day} ${year}`;
// console.log(date);












