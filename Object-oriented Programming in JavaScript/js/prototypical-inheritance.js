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

// Intermeddiate function inheritance

// function Shape(color) {
//   this.color = color;
// }

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Circle(radius, color) {
//   Shape.call(this, color);
//   this.radius = radius;
// }

// extend(Circle, Shape);

// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// function Square(size) {
//   this.size = size;
// }
// extend(Square, Shape);

// Method Overriding

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape() {}

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle() {}

// extend(Circle, Shape);

// Circle.prototype.duplicate = function () {
//   Shape.prototype.duplicate.call(this);

//   console.log("duplicate circle");
// };

// const c = new Circle();

// Polymorphism

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape() {}

// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle() {}

// extend(Circle, Shape);

// Circle.prototype.duplicate = function () {
//   console.log("duplicate circle");
// };

// function Square() {}

// extend(Square, Shape);

// Square.prototype.duplicate = function () {
//   console.log("duplicate square");
// };

// const c = new Circle();

// const shapes = [new Circle(), new Square()];

// for (let shape of shapes) {
//   shape.duplicate();
// }
