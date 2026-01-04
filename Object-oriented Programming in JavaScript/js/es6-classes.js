// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log("draw");
//   };
// }

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.move = function () {
//       console.log("move");
//     };
//   }
//   draw() {
//     console.log("draw");
//   }
// }

// const c = new Circle(1);

// Hoisting

// Function Declaration
// function sayHello() {}

// Function Exression
// const sayGoodBye = function () {};

// Class Declaration
// class Circle {}

// Class Expression
// const Square = class {};

// Static Methods

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   // instance method
//   draw() {
//     console.log("draw");
//   }

//   // Static Method
//   static parse(str) {
//     const radius = JSON.parse(str).radius;
//     return new Circle(radius);
//   }
// }

// const circle = Circle.parse('{"radius":1}');
// console.log(circle);

// class Math2 {
//   static abs(value) {
//     // ...
//   }
// }

// Math.abs(2);
