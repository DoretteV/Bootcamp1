// arr1 = new Array("purple", "green", "yellow");
// arr2 = ["black", "orange", "pink"];
// arr3 = new Array(10);
// arr4 = [10];

// console.log(arr3);
// console.log(arr4);

// let arr = ["hi there", 5, true];
// console.log(typeof arr[0]);                 //string
// console.log(typeof arr[1]);                 //number
// console.log(typeof arr[2]);                 //boolean


// const arr = ["hi there"];                   //cant change const
// arr[0] = "new value";
// console.log(arr[0]);
// arr = ["new value2"];

// cars = ["Toyota", "Renault", "Volkswagen"];
// cars[-1] = "Audi";
// console.log(cars[-1]);
// console.log(cars);

//Practise exercise 3.1

// let shoppingList = ["Milk", "Bread", "Apples"];
// console.log(shoppingList.length);                           //length of shopping list
// shoppingList[1] = "Bananas";                                //change bread to bananas
// console.log(shoppingList);

// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");                //adding after triangle, 0 means delete nothing if you put 1 or 2 it will delete
// console.log(arrOfShapes);

// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);                           //joining 2 arrays with concat
// console.log(arr7);
// let arr8 = arr7.concat(7, 8, 9);                        //adding more numbers with concat
// console.log(arr8);

//splice can be used to delete

// arr8.splice(1, 3);  
// console.log(arr8)                                //delete 3 elements (2, 3 & 4)
// delete arr8[0];                                    //delete the first index
// console.log(arr8);

//Finding elements with find() which is actually a function. It will be executed untill it finds a match. If it doesnt find it will be undefined

// arr8 = [2, 6, 7, 8];
// let value1 = arr8.find(function(element) {return element === 6});
// let value2 = arr8.find(function(e) {return e === 10});
// console.log(value1, value2);

//find the indexOf

// arr8 = [ 2, 6, 7, 8 ];
// let findIndex = arr8.indexOf(6);
// let findIndex2 = arr8.indexOf(10);                  //if it cant find it it will be -1
// console.log(findIndex, findIndex2);

// arr8 = [ 2, 6, 7, 8 ];
// let findIndex3 = arr8.indexOf(6, 2);                    //finding indexOf 6 but start looking from index 2
// console.log(findIndex3)

//lastIndexOf()

// let animals = ["dog", "horse", "cat", "platypus", "dog"];
// let lastDog = animals.lastIndexOf("dog");
// console.log(lastDog);

//Sorting - alphabetical order

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// console.log(names);

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.reverse();
// console.log(names);

//Practise exercise 3.2

// let shoppingList = [];
// shoppingList.push("Milk", "Bread", "Apples");               //adding to empty list
// shoppingList.splice(1, 1, "Bananas", "Eggs");               //insert from index one and delete index 1
// console.log(shoppingList.pop());                            //removing the last item from the array
// shoppingList.sort();                                           //sort alphabetical
// let index = shoppingList.indexOf("Bananas");                    //get index of bananas
// index += 1;
// shoppingList.splice(index+1, 0, "Carrots", "Lettuce");            //add from index 2 but dont delete anything
// let list2 = ["Juice", "Pop"];                               //new list
// shoppingList = shoppingList.concat(list2, list2);           //joining the list and add list2 twice
// console.log(shoppingList.lastIndexOf("Pop"));               //find the last index of pop
// console.log(shoppingList);

//Practise exercise 3.3 Multiple arrays

// let arr1 = [1, 2, 3];
// let arr2 = [arr1, arr1, arr1];
// console.log(arr2[0][1]);

//Objects

// let arr1 = [1, 2, 3];
// let arr2 = [arr1, arr1, arr1];
// console.log(arr2[0][1]);
// console.log(typeof arr1);
// console.log(typeof arr2);

//Practise exercise 3.4

// let myCar = {make: "Audi1.8", year: 2023};
// let property = "color";
// myCar[property] = "red";
// property = "forSale";
// myCar[property] = true;
// console.log(myCar);

//Practise exercise 3.5

// let people = {friends: []};
// let friend1 = {fname: "Anna", lname: "Jones", id: "1000"};
// let friend2 = {fname: "Gugu", lname: "Sithole", id: "2000"};
// let friend3 = {fname: "Sizwe", lname: "Jay", id: "3000"};
// people.friends.push(friend1, friend2, friend3);

// console.log(people);










