// Prototypical inheritance

// function Shape() {}

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);

// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// const s = new Shape();
// const c = new Circle();

// Whenever we reset the prototype of an object, we need to set the constructor property back to the original constructor function.
// Circle.prototype.constructor = Circle;

// Calling the parent constructor function from the child constructor function

// function Shape(color) {
//   this.color = color;
// }

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle(radius, color) {
//   Shape.call(this, color);
//   this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);

// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// const s = new Shape();
// const c = new Circle();
