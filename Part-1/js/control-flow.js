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

let i = 0;
while (i <= 10) {
  // if (i === 5) break;
  if (i % 2 == 0) {
    i++;
    continue;
  }
  
  console.log(i);
  i++;
}
