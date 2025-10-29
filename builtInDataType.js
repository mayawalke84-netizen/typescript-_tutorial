// 1. Number
//The number data type in TypeScript is used to represent numeric values — integers, floating-point numbers, binary, octal, and hexadecimal numbers.
//All numeric values (no separate int or float types) are of type number.
// Decimal (normal number)
var decimalNum = 42;
// Binary (prefix: 0b)
var binaryNum = 42; // 42 in binary
// Octal (prefix: 0o)
var octalNum = 42; // 42 in octal
// Hexadecimal (prefix: 0x)
var hexNum = 0x2A; // 42 in hexadecimal
console.log("Decimal:", decimalNum);
console.log("Binary:", binaryNum);
console.log("Octal:", octalNum);
console.log("Hexadecimal:", hexNum);
// 2. String
//The string data type represents textual data (a sequence of characters).
//It can be enclosed in single quotes (''), double quotes (""), or template literals (``).
// Using single quotes
var firstName = 'John';
// Using double quotes
var lastName = "Doe";
// Using template literals (allows embedding variables)
var fullName = "".concat(firstName, " ").concat(lastName);
// Using string concatenation
var greeting = "Hello, " + fullName + "!";
console.log(firstName); // John
console.log(lastName); // Doe
console.log(fullName); // John Doe
console.log(greeting); // Hello, John Doe!
// 3.  Boolean
// The boolean data type represents logical values — either true or false.
// It is mainly used for conditions, flags, and control flow.
// Boolean declaration
var isCompleted = true;
var isActive = false;
// Using boolean expressions
var num1 = 10;
var num2 = 5;
var isGreater = num1 > num2; // true
var isEqual = num1 === num2; // false
console.log("Is Completed:", isCompleted);
console.log("Is Active:", isActive);
console.log("Is Greater:", isGreater);
console.log("Is Equal:", isEqual);
// 4. Void
// The 'void' type is used when a function does NOT return any value.
function greetUser(name) {
    console.log("Hello, ".concat(name, "!")); // only performs an action
}
greetUser("Maya");
// Another example — using void in function type
var logMessage = function () {
    console.log("This is a log message.");
};
logMessage();
// 5. Null
// null represents the intentional absence of any value.
var emptyValue = null;
console.log(emptyValue); // null
// 6. undefined
// undefined represents a variable that has been declared but not assigned a value.
var notAssigned;
console.log(notAssigned); // undefined
// 7. any type
// 'any' type can hold any type of value (string, number, boolean, etc.)
var randomValue;
randomValue = 10; // number
randomValue = "Hello"; // string
randomValue = true; // boolean
console.log(randomValue);
