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

// Mapping an Array

// const numbers = [1, -1, 2, 3];
// const filtered = number.filter((n) => n >= 0);
// const items = filtered.map((n) => ({ value: n }));
// const items = numbers
//   .filter((n) => n >= 0)
//   .map((n) => ({ value: n }))
//   .filter((obj) => obj.value > 1)
//   .map((obj) => obj.value);

// console.log(items);

// Reducing an Array

// const numbers = [1, 1, 2, 3];
// let sum = 0;
// for (key of numbers) sum += key;
// console.log(sum);

// let all = numbers.reduce((acc, newValue) => acc + newValue);

// console.log(all);

// Exercises

// Function Range
// const numbers = arrayFromRange(-10, -4);

// function arrayFromRange(min, max) {
//   let array = [];
//   for (let i = min; i <= max; i++) {
//     array.push(i);
//   }

//   return array;
// }
// console.log(numbers);

// Includes Function
// const numbers = [1, 2, 3, 4, 5];
// function isIncluded(arr, searchEl) {
//   for (key of arr) return key === searchEl ? true : false;
// }
// console.log(isIncluded(numbers, 6));

// Excluded Function
// const numbers = [1, 2, 3, 4, 5, 1];
// let output = except(numbers, [1, 2]);
// function except(array, exluded) {
//   let newArr = [];
//   for (key of array) {
//     if (!exluded.includes(key)) {
//       newArr.push(key);
//     }
//   }
//   return newArr;
// }

// console.log(output);

// Moving an Element
// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 0, 1);
// console.log(output);
// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.error("Invalid offset.");
//     return;
//   }
//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(position, 0, element);
//   return output;
// }

// Count Occurrences
// const numbers = [1, 2, 3, 4, 1];
// const count = countOccurrences(numbers, 1);
// console.log(count);
// function countOccurrences(array, searchEl) {
//   let counter = 0;
//   for (key of array) key === searchEl ? counter++ : false;
//   return counter;
//   return array.reduce((acc, currenVal) => {
//     const occurrences = currenVal === searchEl ? 1 : 0;
//     console.log(acc, currenVal, searchEl);

//     return acc + occurrences;
//   }, 0);
// }

// Get Max

// const numbers = [-10, 1];
// const max = getMax(numbers);
// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;
//   //   return Math.max(...array);
//   return array.reduce((acc, currentVal) => {
//     let maxNum = acc > currentVal ? acc : currentVal;
//     acc = currentVal;
//     return maxNum;
//   });
// }

// Movies

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order 5 => 4
// Pick their titel

// "b"
// "a"

// function getMovie(arr) {
//   let rated = arr
//     .filter((obj) => {
//       if (obj.year > 2017 && obj.rating > 4) {
//         return obj;
//       }
//     })
//     .sort(function (a, b) {
//       let ratingA = a.rating;
//       let ratingB = b.rating;
//       if (ratingA > ratingB) return -1;
//       if (ratingA < ratingB) return 1;
//       return 0;
//     });
//   return [rated[0].title, rated[1].title];
// }
// console.log(getMovie(movies));
