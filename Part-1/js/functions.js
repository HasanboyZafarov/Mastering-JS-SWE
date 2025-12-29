// Function Declaration
// function walk() {
//   console.log("walk");
// }

// Anonymous Function Expression
// let run = function () {
//   console.log("run");
// };
// let move = run;
// run();
// move();

// Arguments

// function sum() {
//   let total = 0;
//   for (value of arguments) {
//     total += value;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 10));

// Rest Operator
// function sum(discount, ...prices) {
//   const total = prices.reduce((acc, current) => acc + current, 0);
//   return total * (1 - discount);
// }
// console.log(sum(0.2, 20, 30));

// Default Parametres
// function interest(principal, rate = 3.5, years) {
//   return ((principal * rate) / 100) * years;
// }

// console.log(interest(10000, undefined, 5));

// Getters and Setters
const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "John Smith";

// getters => access properties
// setters => change (mutate) them

// console.log(person.fullName);

// console.log(person);
