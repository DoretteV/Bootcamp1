//Objects strings are called keys {}1
//creating objects
//heres an object that stores info about a 3 legged cat named Harmony

// let cat = {
//     legs: 3,
//     name: "Harmony",
//     color: "Tortoiseshell"
// };

// console.log(cat["name"]);
// console.log(cat.name);   //different method

// let cat = {
//     legs: 3,
//     "full name": "Harmony",
//     color: "Tortoiseshell"
// };

//or you can put it all in one line1

// let cat = { legs: 3, name: "Harmony", color: "Tortoiseshell" };

// console.log(cat["full name"]);
// console.log(cat.color);

//Accessing values in objects page 66

// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2021,
//     price: 300000
// };

// console.log(Object.keys(car));          //to get the keys
// console.log(Object.values(car));        //to get the values

//add values to objects1

// let cat = {};
// cat["legs"] = 3;
// cat["name"] = "Harmony";
// cat["color"] = "Tortoiseshell";
// console.log(cat);

//adding keys with dot notation

// let cat = {};
// cat.legs = 3;
// cat.name = "Harmony";
// cat.color = "Tortoiseshell";
// console.log(cat);

//own attempt
// let dog = {};
// dog.legs = 4;
// dog.name = "Shadow";
// dog.color = "Brown";
// dog.breed = "Yorkie";
// dog.age = "4 months";
// console.log(dog);

//combining arrays [] and objects {}

// let dinosaurs = [
//     { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
//     { name: "Stegosaurus", period: "Late Jurassic" },
//     { name: "Plateosaurus", period: "Triassic" }
//    ];
// console.log(dinosaurs[0]);
// console.log(dinosaurs[0]["name"]);
// console.log(dinosaurs[2]["period"]);
// console.log(dinosaurs[2].period);           //different way using .
// console.log(dinosaurs[1].name);

//an array of friends

// let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16]};
// let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40]};
// let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3]};
// let friends = [anna, dave, kate];
// console.log(friends[2].name);
// console.log(friends[1].luckyNumbers[2]);
// console.log(friends[1]);
// console.log(friends);

//exploring objects in the console click on the arrow in browser on your console

//keeping track of owed money

// let owedMoney = {};
// owedMoney["Jimmy"] = 5;
// owedMoney["Anna"] = 7;
// console.log(owedMoney.Jimmy);
// console.log(owedMoney.Anna);
// console.log(owedMoney);
// owedMoney.Jimmy += 3;       //borrowed again
// console.log(owedMoney.Jimmy);
// owedMoney.Anna -= 4;        //paid back money
// console.log(owedMoney.Anna);

//storing info abour your movies            //if there is spaces in the name you need to use ""

// let movies = {
//   "Finding Nemo": {
//     releaseDate: 2003,
//     duration: 100,
//     actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
//     format: "DVD",
//   },
//   "Star Wars: Episode VI - Return of the Jedi": {
//     releaseDate: 1983,
//     duration: 134,
//     actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
//     format: "DVD",
//   },
//   "Harry Potter and the Goblet of Fire": {
//     releaseDate: 2005,
//     duration: 157,
//     actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
//     format: "Blu-ray",
//   },
// };
// console.log(movies["Finding Nemo"]);
// let findingNemo = movies["Finding Nemo"];
// console.log(findingNemo.duration);
// console.log(findingNemo.format);

// let cars = {                        //adding the movie Cars
//     releaseDate: 2006,
//     duration: 117,
//     actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
//     format: ["Blu-ray"]
// };

// movies["Cars"] = cars;      //adding a movie
// console.log(movies);
// console.log(Object.keys(movies));           //find all the keys
// console.log(Object.values(movies));         //finding all the values 

//challenges
//#1 scorekeeper

// let score = {};
// score["Pierre"] = 0
// score["Eben"] = 0
// score["Estelle"] = 0
// console.log(score);
// score.Pierre += 3
// score.Eben += 2
// score.Estelle += 4
// console.log(score.Eben);
// console.log(score.Pierre);
// console.log(score.Estelle);
// console.log(score);


//#2 digging into objects and arrays

// let myCrazyObject = {
//     "name": "A ridiculous object",
//     "some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
//     "random animal": "Banana Shark"
// }
// console.log(myCrazyObject["some array"][2].number);     //finding the number 123 
// console.log(myCrazyObject["some array"][3]);            // finding 3.3 



