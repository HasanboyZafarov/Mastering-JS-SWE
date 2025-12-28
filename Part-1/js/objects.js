// let radius = 1;
// let x = 1;
// let y = 1;

// Object-Oriented Programming (OOP)

// circle.draw(); // We call it method

// Factory Functions
// function createCircle(radius) {
//   return {
//     radius,

//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(1);
// console.log(circle1);
// circle1.draw()

// function createUser(name) {
//   return {
//     name,
//     greet() {
//       console.log("Hi", name);
//     },
//   };
// }
// let user1 = createUser("Alice");
// let user2 = createUser("Bob");
// user1.greet()
// user2.greet()

// Camel Notation: oneTwoThreeFourFive
// Pascal Notation: OneTwoThreeFourFive

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// let circle = new Circle(1);

// function CreateUser(name, age) {
//   this.name = name;
//   this.age = age;
// }
// CreateUser.prototype.greet = function () {
//   console.log(`Hi I'm ${this.name} and I'm ${this.age} years old`);
// };
// let user1 = new CreateUser("Bob", 45);
// let user2 = new  CreateUser("Alice", 30);
// user1.greet();
// user2.greet();

// Dynamic nature of Objects

// let circle = {
//   radius: 1,
// };
// circle.color = "yellow";
// circle.draw = function () {
//   console.log("Draw");
// };

// delete circle.draw;
// console.log(circle);

// function createCircle(radius) {
//   return {
//     radius,

//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(1);

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const another = new Circle(1);

// let x = {};
// let x = new Object()

// Constructor Properties

// new String(); // '', "",``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3 ... etc

// if (new Boolean(false)) {
//   console.log("runs"); // runs!
// }

// Functions are Objects

// function Circle(radius) {
//   (this.radius = radius),
//     (this.draw = function () {
//       console.log("draw");
//     });
// }

// let another = new Circle(1);

// Value Types
// Number, String, Boolean, Symbol, undefined, null

// Reference Types
// Object, Function, Array

// let x = 10;
// let y = x;
// console.log(x);
// console.log(y);

// x = 20;
// console.log(x);
// console.log(y);

// let x = { value: 10 };
// let y = x;

// x.value = 20
// console.log(y);

// Enumerating Properties of an Object

// let circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// for (let key in circle) console.log(key, circle[key]);

// for (key of circle) {
//   console.log(key);
// }

// const obj = { a: 1, b: 2 };

// for (let key in obj) {
//   console.log(key); // a, b
// }

// if (obj.hasOwnProperty(key)) {
// }

// Object.keys(obj); // ["a", "b"]
// Object.values(obj); // [1, 2]
// Object.entries(obj);
// // [["a", 1], ["b", 2]]
// obj.hasOwnProperty("a"); // true

// Cloning an Object

// let circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// }

// const another = Object.assign({}, circle);

// const another = { ...{ color: "yellow" }, ...circle };

// console.log(another);

// String Primitive
// let message = "This is my first message";

// String Object
// let another = new String("hi");

// Template Literals

// let message = "This is my\n" + " first message";

// Object {}
// Boolean true false
// String "" ''
// Template ``
// let name = "John";
// const another = `Hi ${name},

// Thank you for joining my mailing list.

// Regards,
// Mosh`;

// console.log(another);

// Date

// const now = new Date();
// const date1 = new Date("May 11 2018 09:00");
// const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2017);
// console.log(now);

// Exercises

// 1 Write function that shows properties and values of object

// let address = {
//   street: "Tor kocha",
//   city: "Andijan",
//   zipcode: 170003,
// };

// function showAddress(address) {
//   for (key in address) {
//     console.log(`${key}: ${address[key]}`);
//   }
// }

// showAddress(address);

// 2 Write a factory and constructor function based on given example

// let address = {
//   street: "Tor kocha",
//   city: "Andijan",
//   zipcode: 170003,
// };

// // Factory function
// function newAddress(street, city, zipcode) {
//   return { street, city, zipcode };
// }
// let address2 = newAddress("Tor kocha", "Andijan", 17003);
// console.log(address2);

// // Constructor function
// function SetAddress(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }

// let address3 = new SetAddress("Tor Kocha", "Andijan", 17002);
// console.log(address3);

// 3
// let address1 = new SetAddress("a", "b", "c");
// let address2 = new SetAddress("a", "b", "c");
// let address3 = address1;
// function SetAddress(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipcode === address2.zipcode
//   );
// }
// function areSame(address1, address2) {
//   return address1 === address2;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

// 4

// let blogPost = {
//   title: "a",
//   body: "some text",
//   author: "me",
//   views: 13,
//   comments: [
//     { author: "nerdGuy", body: "some text" },
//     { author: "nerdGuy", body: "some text" },
//     { author: "nerdGuy", body: "some text" },
//   ],
//   isLive: true,
// };

// console.log(blogPost);

// 5

// let blogPost = {
//   title: "a",
//   body: "some text",
//   author: "me",
//   views: 13,
//   comments: [
//     { author: "nerdGuy", body: "some text" },
//     { author: "nerdGuy", body: "some text" },
//     { author: "nerdGuy", body: "some text" },
//   ],
//   isLive: true,
// };

// console.log(blogPost);
// let dailyPost = new Post("a", "b", "c");
// console.log(dailyPost);

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.isLive = false;
// }

// 6
// let priceRanges = [
//   { label: "$", toolTip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
//   { label: "$$", toolTip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
//   { label: "$$$", toolTip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
// ];
