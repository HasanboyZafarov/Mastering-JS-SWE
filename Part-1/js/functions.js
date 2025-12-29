// Function Declaration
// function walk() {
//   console.log("walk");
// }

// Anonymous Function Expression
// let run = function () {
//   console.log("run");
// };
// let move = run;
// run();
// move();

// Arguments

// function sum() {
//   let total = 0;
//   for (value of arguments) {
//     total += value;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 10));

// Rest Operator
// function sum(discount, ...prices) {
//   const total = prices.reduce((acc, current) => acc + current, 0);
//   return total * (1 - discount);
// }
// console.log(sum(0.2, 20, 30));

// Default Parametres
// function interest(principal, rate = 3.5, years) {
//   return ((principal * rate) / 100) * years;
// }

// console.log(interest(10000, undefined, 5));

// Getters and Setters
// const person = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// person.fullName = "John Smith";

// getters => access properties
// setters => change (mutate) them

// console.log(person.fullName);

// console.log(person);

// Try and Catch

// const person = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
//   set fullName(value) {
//     if (typeof value !== "string") {
//       throw new Error("Value is not a string");
//     }
//     const parts = value.split(" ");
//     if (parts.length !== 2) {
//       throw new Error("Enter a first and last name");
//     }
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };
// try {
//   person.fullName = "";
// } catch (e) {
//   alert(e);
// }
// console.log(person);

// Local and Global scope

// {
//   const message = "hi";
// }

// console.log(message);

// const color = "red";
// function start() {
//   const message = "hi";
//   const color = "blue";
//   console.log(color);
// }

// function stop() {
//   const message = "bye";
// }

// start();

// Let vs Var

// function start() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//     if (true) {
//       var color = "red";
//     }
//   }
//   console.log(color);
// }

// var => function-scoped
// ES6 (ES2015):let, const => block-scoped

// start();

// var color = "red";
// let age = 30;

// function sayHi() {
//   console.log("Hi");
// }

// This keyword
// the object tha is executing the current function

// method => obj
// function => global (window, global)

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this, tag);
//     }, this);
//   },
// };
// video.showTags();
// video.stop = function () {
//   console.log(this);
// };

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// video.play();

// const v = new Video("b");

// Changing This

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
// const self = this;
//     this.tags.forEach((tag) => {
//       console.log(this.title, tag);
//     });
//   },
// };

// video.showTags();

// function playVideo(a, b) {
//   console.log(this);
// }

// playVideo.call({ name: "Mosh" }, 1, 2);
// playVideo.apply({ name: "Mosh" }, [1, 2]);
// let video = playVideo.bind({ name: "Mosh" })();
// playVideo();

// Exercises

// Write a function that return the sum of arguments
// function sum(...args) {
//   let total = 0;
//   if (args.length === 1) for (key of args[0]) total += key;
//   else for (key of args) total += key;
//   return total;
// }
// console.log(sum(1, 2, 3, 4));

// Area of Circle
// const circle = {
//   radius: 1,
//   get area() {
//     return Math.PI * this.radius * this.radius;
//   },
// };

// console.log(circle.area);

// Error Handling

// const numbers = [1, 2, 3, 4, 1];
// try {
//   const count = countOccurrences(numbers, 1);
//   console.log(count);
// } catch (e) {
//   console.log(e);
// }

// function countOccurrences(array, searchEl) {
//   if (!Array.isArray(array)) throw new Error("Not Array");
//   return array.reduce((acc, currenVal) => {
//     const occurrences = currenVal === searchEl ? 1 : 0;
//     return acc + occurrences;
//   }, 0);
// }
