// Operators in JavaScript

// Arithmetic, Assignment, Comparison, Logical, and Bitwise Operators

// Operators variables -> Expressions -> Algorithms -> Programs

// Arythmetic Operators

// let x = 10;
// let y = 3;

// console.log(x + y); // Addition
// console.log(x - y); // Subtraction
// console.log(x * y); // Multiplication
// console.log(x / y); // Division
// console.log(x % y); // Modulus | Remainder
// console.log(x ** y); // Exponentiation | 10^3 = 10*10*10 = 1000

// Increment
// console.log(x); // 10
// console.log(x++); // 11

// Decrement Operators
// console.log(--x); // 9

// Assignment Operators
// let x = 10;

// x += 5; // x = x + 5
// console.log(x); // 15

// x *= 2; // x = x * 2
// console.log(x); // 30

// All the arythmetic operators can be used with assignment operators
// x %= 7; // x = x % 7
// console.log(x); // 2

// Comparison Operators

// let x = 1;

// // Relational Operators
// console.log(x > 0); // Greater than - true
// console.log(x < 0); // Less than - false
// console.log(x >= 1); // Greater than or equal to - true
// console.log(x <= 1); // Less than or equal to - true

// // Equality Operators
// console.log(x == "1"); // Equal to - true
// console.log(x === "1"); // Strict equal to - false
// console.log(x != 2); // Not equal to - true
// console.log(x !== "1"); // Strict not equal to - true

// Equality operators are used in conditional statements and loops

// Strict equality (Value + Type)
// console.log(1 === 1); // true
// console.log(1 === "1"); // false
// Strict equality checks for both value and type

// Loose equality (Value)
// console.log(1 == 1); // true
// console.log(1 == "1"); // true
// Loose equality checks for value only, performs type coercion if necessary

// Ternary Operator

// If a customer has more than 100 points, they are 'Gold' else 'Silver'

// let points = 90;
// let type = points > 100 ? "Gold" : "Silver";
// console.log(type);

// Logical Operators

// Logical AND (&&), Logical OR (||), Logical NOT (!)
// console.log(true && true); // true
// console.log(true && false); // false

// console.log(true || false); // true
// console.log(false || false); // false

// console.log(!true); // false
// console.log(!false); // true

// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log("Eligible for Loan", eligibleForLoan);

// let applicationRefused = !eligibleForLoan;
// console.log("Application Refused", applicationRefused);

// Logical operators with non-boolean values

// Falsy values: false, 0, "", null, undefined, NaN
// values that evaluate to false in a boolean context
// Examples of Falsy values:

// Truthy values: All values that are not falsy

// console.log(false || "Hello"); // "Hello"
// console.log(false || 1); // 1
// console.log(false || 0); // 0

// console.log("Hello" && 123); // 123
// console.log(1 && "World"); // "World"
// console.log(0 && "World"); // 0

// let userColor = "Red";
// let defaultColor = "Blue";
// let currentColor = userColor || defaultColor;
// console.log(currentColor); // "Blue"


// Bitwise Operators

// Bitwise AND (&), Bitwise OR (|), Bitwise NOT (~), Bitwise XOR (^)
// let a = 5; // In binary: 0101
// let b = 3; // In binary: 0011   
// console.log(a & b); // Bitwise AND: 0001 -> 1
// console.log(a | b); // Bitwise OR: 0111 -> 7
// console.log(~a);    // Bitwise NOT: 1010 -> -6
// console.log(a ^ b); // Bitwise XOR: 0110 -> 6
// Bitwise operators work on the binary representations of numbers
// They are less commonly used in high-level programming tasks

// Operators Precedence

// Precedence determines the order in which operators are evaluated
// Parentheses have the highest precedence
// Multiplication and Division have higher precedence than Addition and Subtraction

let result = 10 + 5 * 2; // Multiplication first, then Addition
console.log(result); // 20
result = (10 + 5) * 2; // Parentheses first, then Multiplication
console.log(result); // 30