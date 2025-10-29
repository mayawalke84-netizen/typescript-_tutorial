// 1. Number


//The number data type in TypeScript is used to represent numeric values — integers, floating-point numbers, binary, octal, and hexadecimal numbers.
//All numeric values (no separate int or float types) are of type number.

// Decimal (normal number)
let decimalNum: number = 42;

// Binary (prefix: 0b)
let binaryNum: number = 0b101010; // 42 in binary

// Octal (prefix: 0o)
let octalNum: number = 0o52; // 42 in octal

// Hexadecimal (prefix: 0x)
let hexNum: number = 0x2A; // 42 in hexadecimal

console.log("Decimal:", decimalNum);
console.log("Binary:", binaryNum);
console.log("Octal:", octalNum);
console.log("Hexadecimal:", hexNum);




// 2. String
  

//The string data type represents textual data (a sequence of characters).
//It can be enclosed in single quotes (''), double quotes (""), or template literals (``).


// Using single quotes
let firstName: string = 'John';

// Using double quotes
let lastName: string = "Doe";

// Using template literals (allows embedding variables)
let fullName: string = `${firstName} ${lastName}`;

// Using string concatenation
let greeting: string = "Hello, " + fullName + "!";

console.log(firstName);   // John
console.log(lastName);    // Doe
console.log(fullName);    // John Doe
console.log(greeting);    // Hello, John Doe!



// 3.  Boolean

// The boolean data type represents logical values — either true or false.
// It is mainly used for conditions, flags, and control flow.

// Boolean declaration
let isCompleted: boolean = true;
let isActive: boolean = false;

// Using boolean expressions
let num1: number = 10;
let num2: number = 5;

let isGreater: boolean = num1 > num2; // true
let isEqual: boolean = num1 === num2; // false

console.log("Is Completed:", isCompleted);
console.log("Is Active:", isActive);
console.log("Is Greater:", isGreater);
console.log("Is Equal:", isEqual);




// 4. Void

// The 'void' type is used when a function does NOT return any value.

function greetUser(name: string): void {
    console.log(`Hello, ${name}!`); // only performs an action
  }
  
  greetUser("Maya");
  
  // Another example — using void in function type
  let logMessage: () => void = () => {
    console.log("This is a log message.");
  };
  
  logMessage();



// 5. Null

// null represents the intentional absence of any value.
let emptyValue: null = null;

console.log(emptyValue); // null



// 6. undefined

// undefined represents a variable that has been declared but not assigned a value.
let notAssigned: undefined;

console.log(notAssigned); // undefined

  
// 7. any type

// 'any' type can hold any type of value (string, number, boolean, etc.)
let randomValue: any;

randomValue = 10;       // number
randomValue = "Hello";  // string
randomValue = true;     // boolean

console.log(randomValue);




