// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// const circle = new Circle(10);

// Property Descriptors

// let person = { name: "Mosh" };
// console.log(person);
// for (let key in person) {
//   console.log(key);
// }

// Constructor Prototypes

// let x = {};
// console.log(Object.getPrototypeOf(x));

// function Circle(radius) {
//   this.radius = radius;
// }
// const circle = new Circle(1);

// console.log(Circle.prototype);

// function Circle(radius) {
//   // Instance Member
//   this.radius = radius;
//   this.move = function () {
//     this.draw();
//     console.log("move");
//   };
// }

// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// const c1 = new Circle(5456789);
// const c2 = new Circle(1);

// Circle.prototype.toString = function () {
//   return "Circle with radius " + this.radius;
// };

// function Stopwatch() {
//   let startTime,
//     endTime,
//     running,
//     duration = 0;

//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//     set: function (value) {
//       duration = value;
//     },
//   });
//   Object.defineProperty(this, "startTime", {
//     get: function () {
//       return startTime;
//     },
//   });
//   Object.defineProperty(this, "endTime", {
//     get: function () {
//       return endTime;
//     },
//   });
//   Object.defineProperty(this, "running", {
//     get: function () {
//       return running;
//     },
//   });
// }

// Stopwatch.prototype.start = function () {
//   if (this.running) throw new Error("Stopwatch has already started.");

//   this.running = true;
//   this.startTime = new Date();
// };

// Stopwatch.prototype.stop = function () {
//   if (!this.running) throw new Error(`Stop watch hasn't started.`);

//   this.running = false;
//   this.endTime = new Date();
//   const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//   duration += seconds;
// };

// Stopwatch.prototype.reset = function () {
//   this.startTime = null;
//   this.endTime = null;
//   this.running = false;
//   duration = 0;
// };

// const sw = new Stopwatch();

// function palindrome(str) {
//   let right = str.length;
//   for (let left = 0; left < str.length / 2; left++) {
//     right--;
//     if (str[left] !== str[right]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palindrome("level"));

// function palindrome(str) {
//   let reversed = [];
//   for (let i = 0; i < str.length; i++) {
//     reversed.unshift(str[i]);
//   }
//   console.log(reversed.join(""));
//   console.log(str);

//   if (reversed.join("") == str) return "True";
//   else return "False";
// }
// console.log(palindrome("year"));
