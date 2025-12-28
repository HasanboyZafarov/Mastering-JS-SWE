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
