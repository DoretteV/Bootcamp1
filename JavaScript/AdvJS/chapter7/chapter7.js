//Classes
//classes is like a template or a blue print

"use strict";

// class Dog {
//   dogName;
//   weight;
//   color;
//   breed;
//   constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//   }
// }

// let dog1 = new Dog("Ketana", "18kg", "black", "Pitbull");
// let dog2 = new Dog("Shadow", "3kg", "brown", "Yorkie");

// console.log(dog1.dogName, dog1.color);
// console.log(dog2.dogName, dog2.color, dog2.breed);
// console.log(`The dog's name is ${dog1.dogName} and the color is ${dog1.color}.`)
// console.log(`The other dog's name is ${dog2.dogName} the color is ${dog2.color} and the breed is a ${dog2.breed}.`);

// class Person {
//     firsName;
//     lastName;
//     constructor(firsName, lastName = "Doe") {
//         this.firsName = firsName;
//         this.lastName = lastName;
//     }
// }
// let person = new Person("Maaike", "Van Putten");            //if you dont put a surname its going to print Doe
// console.log(person.firsName, person.lastName);

//Practise exercise 7.1

// class Person {
//     firsName;
//     lastName;
//     constructor(firsName, lastName) {
//         this.firsName = firsName;
//         this.lastName = lastName;
//     }
// }
// let friend1 = new Person("Estelle", "Posthumus");
// let friend2 = new Person("Pierre", "Van der Merwe");
// console.log(`Hello ${friend1.firsName} and ${friend2.firsName}!`);

//Methods
//functions of a class are called methods

// class Person {
//   firsName;
//   lastName;
//   constructor(firsName, lastName) {
//     this.firsName = firsName;
//     this.lastName = lastName;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.firsName}`);
//   }
//   compliment(name, object) {
//     console.log(`That's a wonderful ${object}, ${name}! From ${this.firsName}`);
//   }
// }
// let friend1 = new Person("Estelle", "Posthumus");
// let friend2 = new Person("Pierre", "Van der Merwe");
// console.log(`Hello ${friend1.firsName} and ${friend2.firsName}!`);
// friend1.greet();
// friend2.greet();
// friend1.compliment("Eben", "car");
// friend2.compliment("Eben", "gaming pc");

//Practise exercise 7.2

// class Person {
//     firsName;
//     lastName;
//     constructor(firsName, lastName) {
//         this.firsName = firsName;
//         this.lastName = lastName;
//     }
//     fullName() {
//         return this.firsName + " " + this.lastName;
//     }
// }
// let friend1 = new Person("Estelle", "Posthumus");
// let friend2 = new Person("Pierre", "Van der Merwe");
// console.log(friend1.fullName());

//Properties, getters and setters, prototype
//getters and setters # protects
//prototype makes it possible to have objects. Objects inherit from object.prototype

// class Person {
//   #firstName;
//   #lastName;
//   constructor(firstName, lastName) {
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.firstName}`);
//   }
//   compliment(name, object) {
//     console.log(`That's a wonderful ${object}, ${name}! From ${this.firstName}`);
//   }
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }
//   get firstName() {
//     return this.#firstName;
//   }
//   set firstName(firstName) {
//     this.#firstName = firstName;
//   }
//   get lastName() {
//     return this.#lastName;
//   }
//   set lastName(lastName) {
//     this.#lastName = lastName;
//   }
// }

// Person.prototype.introduce = function() {console.log(`Hi, I am ${this.firstName}`)};
// Person.prototype.favoriteColor = "blue";
// let person1 = new Person("Joe", "Deer");
// person1.introduce();
// console.log(`${person1.firstName} has a favorite color of ${person1.favoriteColor}`)

// let friend1 = new Person("Estelle", "Posthumus");
// let friend2 = new Person("Pierre", "Van der Merwe");
// friend1.lastName = "Van Wyk";
// console.log(friend1.fullName());
// console.log(`Hello ${friend1.firstName} and ${friend2.firstName}!`);
// friend1.firstName = "Rynhardt";
// friend1.greet();
// friend2.greet();
// friend1.compliment("Eben", "car");
// friend2.compliment("Eben", "gaming pc");

//Inheritence
//super calls the constructor in the parent and its compulsary

// class Vehicle {
//   color;
//   currentSpeed;
//   maxSpeed;
//   constructor(color, currentSpeed, maxSpeed) {
//     this.color = color;
//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//   }
//   move() {
//     console.log(`Moving at ${this.currentSpeed}`);
//   }
//   accelerate(amount) {
//     this.currentSpeed += amount;
//   }
// }
// class Motorcycle extends Vehicle {                    //extends inherit from parent(vehicle);
//   fuel;
//   constructor(color, currentSpeed, maxSpeed, fuel) {
//     super(color, currentSpeed, maxSpeed);
//     this.fuel;
//   }
//   doWheelie() {
//     console.log("Driving on one wheel!");
//   }
// }
// let motorC = new Motorcycle("blue", 100, 120, "diesel");
// console.log(motorC.color);
// motorC.move();
// motorC.accelerate(15);
// motorC.move();

//Practise exercise 7.3

// class Animal {
//   species;
//   sound;
//   constructor(species, sound) {
//     this.species = species;
//     this.sound = sound;
//   }
//   animalSound() {
//     console.log(`A ${this.species} can ${this.sound}!`);
//   }
// }
// Animal.prototype.trick = function () {
//   console.log(`This ${this.species} can jump.`);
// };

// let dog = new Animal("yorkie", "bark");
// let lion = new Animal("lion", "roar");
// lion.trick();
// lion.animalSound();
// dog.animalSound();
// dog.trick();
// console.log(dog);
// console.log(lion);

