//Arrays []

// let dinosaurs = [
//     "T-Rex",
//  "Velociraptor",
//  "Stegosaurus",
//  "Triceratops",
//  "Brachiosaurus",
//  "Pteranodon",
//  "Apatosaurus",
//  "Diplodocus",
//  "Compsognathus"
// ];
// console.log(dinosaurs[0]);
// console.log(dinosaurs[dinosaurs.length-1]);
// console.log(dinosaurs.indexOf("Diplodocus"));
// console.log(dinosaurs);
// dinosaurs[0] = "Tyrannosaurus Rex";
// console.log(dinosaurs[0]);

//different way of doing arrays
// let fruit = [];
// fruit[0] = "Apple";
// fruit[1] = "Orange";
// fruit[2] = "Banana";
// fruit[3] = "Melon";
// fruit[4] = "Watermelon";
// console.log(fruit)
// console.log(fruit.indexOf("Banana"));
// console.log(fruit[fruit.length-1]);

//undefined/empty x24
// let dinosaurs = [];
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus";
// dinosaurs[33] = "Philosoraptor";
// console.log(dinosaurs);

//mixing data types in an array

// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
// console.log(dinosaursAndNumbers[1]);
// console.log(dinosaursAndNumbers[2]);
// console.log(dinosaursAndNumbers[2][2]);
// console.log(dinosaursAndNumbers[3]);
// console.log(dinosaursAndNumbers[dinosaursAndNumbers.length-1]);

// let maniacs = ["Yakko", "Wakko", "Dot"];
// console.log(maniacs[0]);
// console.log(maniacs[1]);
// console.log(maniacs[2]);
// console.log(maniacs.length);
// console.log(maniacs[maniacs.length-1]);

//adding element to an array .push()

// let animals = [];
// animals.push("Cat");
// console.log(animals);
// animals.push("Dog");
// console.log(animals);
// animals.push("Llama");
// console.log(animals);
// console.log(animals[animals.length-1]);
// console.log(animals.indexOf("Dog"));

// let animals = [];
// animals.push("Cat");
// console.log(animals);
// animals.push("Dog");
// console.log(animals);
// animals.push("Llama");
// animals.unshift("Monkey");
// console.log(animals);
// animals.unshift("Polar Bear");
// console.log(animals);

//removing elements from array
//.push adds elements
//.unshift puts elements to the beginning of an array
//.pop remove the last element of an array


// let animals = [];
// animals.push("Cat");
// console.log(animals);
// animals.push("Dog");
// console.log(animals);
// animals.push("Llama");
// animals.unshift("Monkey");
// console.log(animals);
// let numberOfAnimals = animals.unshift("Polar Bear");
// console.log("there are", numberOfAnimals, "animals in my array");
// let lastAnimal =  animals.pop();
// console.log(animals);
// console.log(lastAnimal);
// let firstAnimal = animals.shift();
// console.log(animals);
// console.log(firstAnimal);

//adding arrays
//.concat adds two or more arrays together

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
// console.log(furryAnimals);
// console.log(scalyAnimals);
// console.log(furryAndScalyAnimals);

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let featherAnimals =  ["Macaw", "Dodo"];
// let allAnimals = furryAnimals.concat(scalyAnimals, scalyAnimals);
// console.log(furryAnimals);
// console.log(scalyAnimals);
// console.log(featherAnimals);
// console.log(allAnimals);

//finding the index of an element in an array using indexOf

// let colors = ["red", "green", "blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("green"));
// console.log(colors[2]);
// console.log(colors[1]);
// console.log(colors.indexOf("purple"));

// let insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
// console.log(insects.indexOf("Bee"));
// console.log(insects.indexOf("Bee", 3));

//turning an array into a string1

// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// let stringBoringAnimals = boringAnimals.join();
// let stringBoringAnimals = boringAnimals[0] + " " + boringAnimals[1] + " " + boringAnimals[2] + " " + boringAnimals[3];
1
// console.log(boringAnimals.join());
// console.log(boringAnimals);
// console.log(boringAnimals.join(" "));
// console.log(boringAnimals.join(" / "));
// console.log(boringAnimals.join(" - "));
// console.log(boringAnimals.join(" * "));
// console.log(boringAnimals.join(" sees "));
// console.log(boringAnimals.join(" | "));

// let myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
// console.log(myNames.join(" "));

//building the array with push
//going in reverse with pop (it starts from the back to the front)(stack)(LIFO - last in last out)
//que (FIFO - First in first out)

// let landmarks = [];
// landmarks.push("My House");
// landmarks.push("Front path");
// landmarks.push("Flickering streetlamp");
// landmarks.push("Leaky fire hydrant");
// landmarks.push("Fire station");
// landmarks.push("Cat rescue center");
// landmarks.push("My old school");
// landmarks.push("My friend's house");
// console.log(landmarks);

// console.log(landmarks.pop());        //.pop will start by taking away the last element till its back to the top
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks.pop());
// console.log(landmarks);

//using math.random() random number below 1 but not 1 example:0.125896314

// console.log(Math.random());
// console.log(Math.random()*101);

//rounding down with math.floor()

// console.log(Math.floor(3.69872));
// console.log(Math.floor(8.392715630));
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*100));
// console.log(Math.floor(Math.random()*4));

// let randomWords = ["Explosion", "Cave", "Princess", "Pen"];
// let randomIndex = Math.floor(Math.random() *4);
// console.log(randomWords[randomIndex]);

// let fruit = ["Apple", "Banana", "Orange", "Grapes"];
// let randomIndex = Math.floor(Math.random() *4);
// console.log(fruit[randomIndex]);1

//creating a random insult generator

// let randomBodyParts = ["Face", "Nose", "Hair"];
// //pick a random body part
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// //pick a random adjective
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// //pick a random word
// let randomWord = randomWords[Math.floor(Math.random() * 5)];

// //join all the random strings
// let randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
// console.log(randomInsult);

//using .length

// let randomBodyParts = ["Face", "Nose", "Hair", "Eyes", "Lips"];
// //pick a random body part
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

// let randomAdjectives = ["Smelly", "Boring", "Stupid", "Clean", "Big"];
// //pick a random adjective
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat", "Dog", "Lion"];
// //pick a random word
// let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// //join all the random strings
// //let randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " +randomWord + "!!!";
// let randomInsult = ["Your", randomBodyPart, "is like a", randomAdjective, randomWord, "!!!"].join(" ");
// console.log(randomInsult);

//Do it yourself
//#1 make your own random insults

// let randomBodyParts = ["Cheeks", "Chin", "Arms", "Feet", "Legs"];
// let randomAdjectives = ["Funny", "Long", "Short", "Skew"];
// let randomWords = ["Car", "Tree", "Puppy", "Goat", "Snake"];

// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// let randomInsult = ["Your sister's", randomBodyPart, "looks like a", randomAdjective, randomWord, "!"].join(" ");

// console.log(randomInsult);

//#2 more sophisticated insults

// let randomBodyParts = ["Cheeks", "Chin", "Arms", "Feet", "Legs"];
// let randomAdjectives = ["Funny", "Long", "Short", "Skew", "Ugly"];
// let randomAnimalBodyParts = ["Lion's Tail", "Cat's Furr", "Elephant Horns", "Pigs Belly", "Bunnies Ears"]

// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];

// let randomInsult = ["Your sister's", randomBodyPart, "is more", randomAdjective, "than a", randomAnimalBodyPart, "!"].join(" ");

// console.log(randomInsult);

//#3 use + or join

// let randomBodyParts = ["Cheeks", "Chin", "Arms", "Feet", "Legs"];
// let randomAdjectives = ["Funny", "Long", "Short", "Skew", "Ugly"];
// let randomAnimalBodyParts = ["Lion's Tail", "Cat's Furr", "Elephant Horns", "Pigs Belly", "Bunnies Ears"]

// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];

// //let randomInsult = ["Your sister's", randomBodyPart, "is more", randomAdjective, "than a", randomAnimalBodyPart, "!"].join(" ");
// let randomInsult = "Your sister's " + randomBodyPart + " is more " + randomAdjective +  " than a " + randomAnimalBodyPart + "!";

// console.log(randomInsult);

//#4 joining numbers

// let numbers = [3,2,1];
// console.log(numbers.join("  is bigger than "));


