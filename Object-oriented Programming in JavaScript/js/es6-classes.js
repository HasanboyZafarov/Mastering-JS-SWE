// "use strict";

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

// the This keyword
// class Circle {
//   draw() {
//     console.log(this);
//   }
// }

// const c = new Circle();
// const draw = c.draw;
// draw();

// Private Properties and Methods
// const _radius = Symbol();
// const _draw = Symbol();
// class Circle {
//   constructor(radius) {
//     // this.radius = radius;
//     // this["radius"] = radius;
//     this[_radius] = radius;
//   }
//   [_draw]() {}
// }

// const c = new Circle(1);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);

// Private Properties using WeakMaps

// const _radius = new WeakMap();
// const _move = new WeakMap();
// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);

//     _move.set(this, () => {
//       console.log("move", this);
//     });
//   }

//   draw() {
//     _move.get(this)();

//     console.log("draw");
//   }
// }

// const c = new Circle(1);

// Getters and Setters in Classes

// const _radius = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }
//   get radius() {
//     return _radius.get(this);
//   }
//   set radius(value) {
//     if (value <= 0) throw new Error("invalid radius");
//     _radius.set(this, value);
//   }
// }

// const c = new Circle(1);

// Inheritance

// class Shape {
//   constructor(color) {
//     this.color = color;
//   }
//   move() {
//     console.log("move");
//   }
// }

// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }
//   draw() {
//     console.log("draw");
//   }
// }

// const c = new Circle("red", 1);
