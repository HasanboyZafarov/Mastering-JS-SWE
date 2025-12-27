// If ... Else
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// let hour = 13;
// if (hour >= 6 && hour < 12) {
//   console.log("Good morning!");
// } else if (hour >= 12 && hour < 18) {
//   console.log("Good afternoon!");
// } else {
//   console.log("Good evening!");
// }

// Switch Case

// let role;

// switch (role) {
//   case "guest":
//     console.log("Guest User");
//     break;

//   case "moderator":
//     console.log("Moderator User");
//     break;

//   default:
//     console.log("Unknown Role");
// }

// if (role === "guest") console.log("Guest");
// else if (role === "moderator") console.log("Moderator");
// else console.log("Unknown");

// Loops
// For, While, Do...while, For...in, For...of

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

// for (let i = 5; i >= 1; i--) {
// console.log("Hello World", i);
//   if (i % 2 != 0) console.log(i);
// }

// While
// let i = 9;
// while (i <= 5) {
//   if (i % 2 != 0) console.log(i);
//   i++;
// }

// Do ... While
// let i = 9;
// do {
//   if (i % 2 != 0) console.log(i);
//   i++;
// } while (i <= 5);

// Do ... While will run at least once even if the condition is false

// Infinite loops

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// while (true) {}
// do {} while (true);
// for (let i = 0; i > 0; i++) {}

// Avoid infinite loops by ensuring the loop condition will eventually be false.

// For ... in
// let person = {
//   name: "Mosh",
//   age: 30,
// };

// for (key in person) console.log(key, person[key]);

// const colors = ["red", "green", "blue"];
// for (index in colors) {
//   console.log(colors[index]);
// }

// For ... of
// const colors = ["red", "green", "blue"];
// for (key of colors) {
//   console.log(key);
// }

// We use "for...in" to iterate over the properties of an object and "for...of" to iterate over the values of an iterable object like an array.
// Note: "for...of" cannot be used to iterate over objects directly.

// Break and Continue`

// let i = 0;
// while (i <= 10) {
// if (i === 5) break;
//   if (i % 2 == 0) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// }

// Task 1

// Write a function that takes two numbers
// and returns the maximum of the two

// function max(x, y) {
// if (x > y) return x;
// else return y;
// return x > y ? x : y;
// }
// console.log(max(5, 3)); // 5

// Landscape or Portrait
// function checkImg(width, height) {
//   return width > height ? "Landscape" : "Portrait";
// }
// console.log(checkImg(200, 500));

// FizzBuzz
// function fizzBuzz(num) {
//   if (num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
//   else if (num % 3 == 0) return "Fizz";
//   else if (num % 5 == 0) return "Buzz";
//   else return "Not FizzBuzz";
// }

// console.log(fizzBuzz(10));

// SpeedLimit
// Limit = 70
// 5 -> 1 point
// 12 points -> suspended

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;
//   const points = Math.floor(Math.max(0, speed - speedLimit) / kmPerPoint);
//   if (points >= 12) {
//     console.log("License suspended");
//   } else if (points > 0) {
//     console.log("Points", points);
//   } else {
//     console.log("Ok");
//   }
// }
// checkSpeed(74);

// Even or Odd Numbers

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     console.log(i % 2 == 0 ? `${i} EVEN` : `${i} ODD`);
//   }
// }
// showNumbers(10);

// Count Truthy

// function countTruthy(array) {
//   let counter = 0;
//   for (key of array) {
//     if (key) counter++;
//   }
//   console.log(counter);
// }
// countTruthy([1, "", false, true, "hello", undefined]);

// let movie = {
//   title: "a",
//   releaseYear: 2018,
//   rating: 4.5,
//   director: "b",
// };

// function showProperties(obj) {
//   for (key in obj) if (typeof obj[key] == "string") console.log(key, obj[key]);
// }
// showProperties(movie);

// function sum(limit) {
//   let counter = 0;
//   for (let i = 0; i <= 10; i++) {
//     if (i % 3 == 0 || i % 5 == 0) counter += i;
//   }
//   return counter;
// }
// console.log(sum(10));

// let marks = [80, 80, 50];

// Avarage = 70
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// function calculateGrade(marks) {
//   let counter = 0;
//   for (key of marks) counter += key;
//   let avarage = counter / marks.length;
//   console.log(avarage);
//   if (avarage >= 90 && avarage <= 100) return "A";
//   else if (avarage >= 80 && avarage <= 89) return "B";
//   else if (avarage >= 70 && avarage <= 79) return "C";
//   else if (avarage >= 60 && avarage <= 69) return "D";
//   if (avarage >= 1 && avarage <= 59) return "F";
// }
// console.log(calculateGrade(marks));

// function showStars(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let stars = "";
//     for (let k = 0; k < i; k++) {
//       stars += "*";
//     }
//     console.log(stars);
//   }
// }
// showStars(4);

// function showPrimes(limit) {
//   for (let i = 2; i <= limit; i++) {
//     let isPrime = true;

//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }

// showPrimes(10);

// End of the Control Flow