// Object Literals

// const circle = {
//   radius: 1,
//   location: { x: 1, y: 1 },
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw()
// properties: radius, location
// methods: function

// properties are used to hold data
// methods are used to define some logic

// Factory Function

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("salom");
//     },
//   };
// }

// const circle = createCircle(1);

// circle.draw();

// Constuctor Function

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("another");
//   };
// }

// const another = new Circle(1);
// another.draw();

// Functions are Objects

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("another - draw");
//   };
// }

// Circle.call({}, 1);

// const another = new Circle(1);

// Value and Reference Types

// let obj = { value: 10 };

// function increse(obj) {
//   obj.value++;
// }
// increse(obj);
// console.log(obj);

// Adding and Removing Properties

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);

// circle.location = { x: 1, y: 2 };
// circle["isLogged"] = true;

// Enumirating Properties

// for (let key in circle) {
//   if (typeof circle[key] !== "function") console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ("radius" in circle) console.log("Circle has a radius.");

// Abstraction

// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };
//   this.getDefaultLocation = function () {
//     return defaultLocation;
//   };
//   this.draw = function () {
//     console.log("draw");
//   };

//   Object.defineProperty(this, "defaultLocation", {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) throw new Error("Invalid location");
//       defaultLocation = value;
//     },
//   });
// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// console.log(circle.defaultLocation);

// const sw = new Stopwatch()

// Methods in Stopwatch function

// sw.start
// sw.stop
// sw.duration
// sw.reset

// function Stopwatch() {
//   let startTime,
//     endTime,
//     running,
//     duration = 0;
//   this.start = function () {
//     if (running) throw new Error("Stopwatch has already started.");

//     running = true;
//     startTime = new Date();
//   };
//   this.stop = function () {
//     if (!running) throw new Error(`Stop watch hasn't started.`);

//     running = false;
//     endTime = new Date();
//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };
//   this.reset = function () {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };
//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//   });
// }
// const sw = new Stopwatch();
