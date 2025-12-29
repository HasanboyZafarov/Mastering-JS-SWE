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

// Combining and Slicing Arrays
// let first = [1, 2, 3];
// let second = [4, 5, 6];

// let combined = first.concat(second);
// console.log(combined);

// let sliced = combined.slice(2, 4);
// console.log(combined);

// console.log(sliced);

// Concat will get a copy of array, if it's primitive type, it will copy the value, if it's reference type, it will copy the reference

// Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, ...second];
// console.log(combined);

// const copy = [...combined];
// console.log(copy);

// Iterating an Array

// const numbers = [1, 2, 3];

// for (number of numbers) console.log(number);
// numbers.forEach((number, index) => console.log(index, number));

// We can also get the index of the element while iterating using forEach method

// Joining Arrays

// const numbers = [1, 2, 3];
// let joined = numbers.join(",");
// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);

// const combined = parts.join("-");
// console.log(combined);

// Sorting Arrays

// const number = [2, 3, 1];
// console.log(number.sort());
// console.log(number.reverse());

// const courses = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "javaScript" },
// ];

// console.log(
//   courses.sort(function (a, b) {
//     let nameA = a.name.toLowerCase();
//     let nameB = b.name.toLowerCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
//   })
// );

// Testing the Elements of an Array
// const numbers = [1, -1, 2, 3];

// every() => to check every value that matches criteria
// some() => to check some value that matches criteria

// const atLeastOnePositive = numbers.some(function (value) {
//   return value >= 0;
// });

// console.log(atLeastOnePositive);

// Filtering an Array

// const numbers = [1, -1, 2, 3];
// const filtered = numbers.filter(function (value) {
//   return value >= 0;
// });

// const filtered2 = numbers.filter((n) => n <= 0);

// console.log(filtered);
// console.log(filtered2);
