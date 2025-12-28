// Adding Elements

// const numbers = [3, 4];

// // End
// numbers.push(5);

// // Beginning
// numbers.unshift(1, 2);

// // Middle
// numbers.splice(2, 0, "a", "b");

// console.log(numbers);

// Finding Elements - Primitive Types

// const numbers = [1, 2, 3, 1, 4];
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));

// Finding Reference

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// console.log(courses.includes({ id: 1, name: "a" }));
// let found = courses.findIndex(function (course) {
//   return course.name === "b";
// });

// console.log(found);

// Arraw Function

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// console.log(courses.includes({ id: 1, name: "a" }));
// let found = courses.findIndex((course) => course.name === "b");

// Removing Element in Array;

// let numbers = [1, 2, 3, 4];

// End
// let last = numbers.pop();
// console.log(numbers);
// console.log(last);

// Beginning
// let start = numbers.shift();
// console.log(numbers);
// console.log(start);

// Middle
// let middle = numbers.splice(2, 2);
// console.log(numbers);
// console.log(middle);

// Emptying an Array
// let numbers = [1, 2, 3, 4];
// let another = numbers;

// Solution 1
// numbers = [];

// Solution 2
// numbers.length = 0

// Solution 3
// numbers.splice(0, numbers.length);

// Solution 4
// while (numbers.length > 0) {
//   numbers.pop();
// }

// console.log(numbers);
// console.log(another);
